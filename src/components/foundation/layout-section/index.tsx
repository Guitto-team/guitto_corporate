import React from 'react'
import styled from 'styled-components'

export interface LayoutSectionProps {
  padding?: 'none' | 'small' | 'medium' | 'large'
  backgroundColor?: 'none' | 'lightgray' | 'gray' | 'white'
  children: React.ReactNode,
}

export const LayoutSection: React.FC<LayoutSectionProps> = ({
    padding = 'medium',
    backgroundColor = 'none',
    children,
  }) => {
  return (
    <Section padding={padding} backgroundColor={backgroundColor}>
      {children}
    </Section>
  );
}

export default React.memo(LayoutSection);

const Section = styled.section<LayoutSectionProps>`
  padding: ${({ padding }) => {
    switch (padding) {
      case 'none':
        return '0';
      case 'small':
        return '2rem 0';
      case 'medium':
        return '4rem 0';
      case 'large':
        return '6rem 0';
      default:
        return '0';
    }
  }};
  background-color: ${({ theme, backgroundColor }) => {
    switch (backgroundColor) {
      case 'none':
        return 'transparent';
      case 'lightgray':
        return theme.colors.lightgray;
      case 'gray':
        return theme.colors.gray;
      case 'white':
        return theme.colors.white;
      default:
        return 'transparent';
    }
  }};
`;