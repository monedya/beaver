import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

function SvgArrow(props) {
  return (
    <Svg width="32" height="32" viewBox="0 0 20.325 20.325" {...props}>
      <G data-name="Group 12">
        <Path
          data-name="Path 2"
          d="M16.36 3.724l-7.888.44 2.071 2.234-8.03 8.492 3.255 3.513 8.03-8.492 2.07 2.235z"
          fill="#57ff89"
        />
      </G>
    </Svg>
  );
}

export default SvgArrow;
