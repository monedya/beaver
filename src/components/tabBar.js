import React from 'react'
import { View } from 'react-native';
import Text from './text'
import Button from './button'
import Home from './icons/Home'
import MessageSquare from './icons/MessageSquare'
import CreditCard from './icons/CreditCard'
import Box from './box';

function TabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };


        return label === 'Home' ? (
          <Button
            key={label}
            pt={10}
            borderRadius={'full'}
            size={60}
            height={60}
            onPress={onPress}>
            <Home stroke={isFocused ? 'red' : 'blue'} />
            <Box mt={5}>
              <Text>{label}</Text>
            </Box>

          </Button>
        ) : <Button 
          key={label}
          pt={10}
          height={60}
          flex={1}
          onPress={onPress}>
            {label === 'Left' && <CreditCard stroke={isFocused ? 'red' : 'blue'} />}
            {label === 'Right' && <MessageSquare stroke={isFocused ? 'red' : 'blue'} />}
            <Box  mt={5}>
              <Text>{label}</Text>
            </Box>

          </Button>;
      })}
    </View>
  );
}

export default TabBar