import { View } from 'react-native';
import styled from 'styled-components'
import { compose, flexbox, color, size, space, layout ,borderRadius,shadow,grid} from 'styled-system'

const Box = styled(View)(
    compose(
        flexbox,
        color,
        size,
        space,
        layout,
        borderRadius,
        shadow,
        grid,
    ),
);


export default Box;

