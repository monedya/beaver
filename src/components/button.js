import { TouchableOpacity } from 'react-native';
import styled from 'styled-components'
import { compose, flexbox, color, size, space, layout,borderRadius } from 'styled-system'

const Button = styled(TouchableOpacity)(

    compose(
        flexbox,
        color,
        size,
        space,
        layout,
        borderRadius,
    ),
);

Button.defaultProps = {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}

export default Button;

