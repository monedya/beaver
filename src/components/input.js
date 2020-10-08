import { TextInput} from 'react-native';
import styled from 'styled-components'
import {
    compose,
    color,
    size,
    space,
    layout,
    typography
} from 'styled-system'

const Input = styled(TextInput)(
    compose(
        color,
        size,
        space,
        layout,
        typography,
    ),
);

export default Input;

