import React from 'react';
import styled from 'styled-components'

export interface TypographyProps {
  children: React.ReactNode,
  html?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span',
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'xl2' | 'xl3' | 'xl4' | 'xl5' | 'xl6' | 'xl7'
  weight?: 'thin' | 'extralight' | 'regular' | 'normal' | 'medium' | 'semibold' | 'bold',
  textAlign?: 'left' | 'center' | 'right',
  color?: 'black' | 'white' | 'primary' | 'secondary' | 'subcolor'
}

const Typography: React.FC<TypographyProps> = ({
  children,
  html = 'span',
  size = 'base',
  weight = 'normal',
  textAlign = 'left',
  color = 'black'
}) => {

return (
  <TypographyWrapper as={html} size={size} weight={weight} textAlign={textAlign} color={color}>
    {children}
  </TypographyWrapper>
);
}

export default React.memo(Typography);

const TypographyWrapper = styled.p<TypographyProps>`
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ size, theme }) => {
    switch (size) {
      case 'xs':
        return theme.fonts.size.xs;
      case 'sm':
        return theme.fonts.size.sm;
      case 'base':
        return theme.fonts.size.base;
      case 'lg':
        return theme.fonts.size.lg;
      case 'xl':
        return theme.fonts.size.xl;
      case 'xl2':
        return theme.fonts.size.xl2;
      case 'xl3':
        return theme.fonts.size.xl3;
      case 'xl4':
        return theme.fonts.size.xl4;
      case 'xl5':
        return theme.fonts.size.xl5;
      case 'xl6':
        return theme.fonts.size.xl6;
      case 'xl7':
        return theme.fonts.size.xl7;
      default:
        return theme.fonts.size.base;
    }
  }};
  font-weight: ${({ weight, theme }) => {
    switch (weight) {
      case 'thin':
        return theme.fonts.weight.thin;
      case 'extralight':
        return theme.fonts.weight.extralight;
      case 'regular':
        return theme.fonts.weight.regular;
      case 'normal':
        return theme.fonts.weight.normal;
      case 'medium':
        return theme.fonts.weight.medium;
      case 'semibold':
        return theme.fonts.weight.semibold;
      case 'bold':
        return theme.fonts.weight.bold;
      default:
        return theme.fonts.weight.normal;
    }
  }};
  color: ${({ theme, color }) => {
    switch (color) {
      case 'white':
        return theme.colors.white;
      case 'primary':
        return theme.colors.primary;
      case 'secondary':
        return theme.colors.secondary;
      case 'subcolor':
        return theme.colors.subcolor;
      default:
        return theme.colors.black;
    }
  }};
`;