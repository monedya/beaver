import { TouchableOpacity } from 'react-native';
import styled from 'styled-components'
import { compose, flexbox, color, size, space, layout,borderRadius,shadow} from 'styled-system'

const Button = styled(TouchableOpacity)(

    compose(
        flexbox,
        color,
        size,
        space,
        layout,
        borderRadius,
        shadow,
    ),
);

Button.defaultProps = {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}

export default Button;

