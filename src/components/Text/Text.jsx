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
  fontWeight,
  width,
  letterSpacing,
  ...restProps
}) => {
  return (
    <TextDefault
      letterSpacing={letterSpacing}
      fontSize={fontSize}
      margin={margin}
      color={color}
      cursor={cursor}
      padding={padding}
      background={background}
      borderRadius={borderRadius}
      border={border}
      fontWeight={fontWeight}
      width={width}
      {...restProps}
    >
      {children}
    </TextDefault>
  );
};

export default Text;
