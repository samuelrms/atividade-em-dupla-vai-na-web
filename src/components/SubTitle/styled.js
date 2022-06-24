import styled from "styled-components";

export const SubTitleDefault = styled.h2`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
  cursor: ${({ cursor }) => cursor};
  padding: ${({ padding }) => padding};
  background: ${({ background }) => background};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  font-weight: ${({ fontWeight }) => fontWeight};
  width: ${({ width }) => width};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
`;

SubTitleDefault.defaultProps = {
  color: "#1d1d1d",
};
