import React from "react";
import { DefaultTitle } from "./styled";

const Title = ({
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
    <DefaultTitle
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
    </DefaultTitle>
  );
};

export default Title;
