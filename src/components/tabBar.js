import React from 'react'
import { View } from 'react-native';
import Text from './text'
import Button from './button'
import Home24Px from './icons/Home24Px'
import AccountBalanceWallet24Px from './icons/AccountBalanceWallet24Px'
import Chat24Px from './icons/Chat24Px'
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
            flexDirection={'row'}
            flex={1}
            height={48}
            bg={'#1f3c88'}
            key={label}
            onPress={onPress}>

            <Home24Px width={32} height={32} fill={isFocused ? '#EEEEEE' : '#EEEEEE'} />
          </Button>
        ) : <Button
          key={label}
          bg={'#1f3c88'}
          height={48}
          flex={1}
          onPress={onPress}>
            {label === 'Left' && <Chat24Px width={28} height={28} fill={'white'} />}
            {label === 'Right' && <AccountBalanceWallet24Px width={28} height={28} fill={'white'} />}
          </Button>;
      })}
    </View>
  );
}

export default TabBar