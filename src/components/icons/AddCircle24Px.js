import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAddCircle24Px(props) {
  return (
    <Svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLineJoin="round"
     
      {...props}>
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
    </Svg>
  );
}

export default SvgAddCircle24Px;
