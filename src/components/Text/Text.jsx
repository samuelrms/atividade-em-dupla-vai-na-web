import React from "react";
import { TextDefault } from "./styled";

const Text = ({
  children,
  fontSize,
  color,
  margin,
  cursor,
  padding,
  background,
  borderRadius,
  border,
  width,
  textAlign,
  ...restProps
}) => {
  return (
    <TextDefault
      textAlign={textAlign}
      width={width}
      fontSize={fontSize}
      margin={margin}
      color={color}
      cursor={cursor}
      padding={padding}
      background={background}
      borderRadius={borderRadius}
      border={border}
      {...restProps}
    >
      {children}
    </TextDefault>
  );
};

export default Text;
