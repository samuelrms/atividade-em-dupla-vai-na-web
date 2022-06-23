import React from "react";
import { DescriptionDefault } from "./styled";

const Description = ({
  children,
  fontSize,
  color,
  margin,
  textAlign,
  ...restProps
}) => {
  return (
    <DescriptionDefault
      margin={margin}
      textAlign={textAlign}
      color={color}
      fontSize={fontSize}
      {...restProps}
    >
      {children}
    </DescriptionDefault>
  );
};

export default Description;
