import React from 'react'
import styled from 'styled-components'

export interface FlexProps {
  justifyContent?: 'j-flex-start' | 'j-center' | 'j-flex-end' | 'j-between';
  alignItems?: 'a-flex-start' | 'a-center' | 'a-flex-end';
  direction?: 'row' | 'col';
  gap?: 'none' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge',
  children: React.ReactNode,
}

export const Flex: React.FC<FlexProps> = ({
    justifyContent = 'j-flex-start',
    alignItems = 'a-center',
    direction = 'row',
    gap = 'medium',
    children,
  }) => {
  return (
    <FlexContainer justifyContent={justifyContent} alignItems={alignItems} direction={direction} gap={gap}>
      {children}
    </FlexContainer>
  );
}

export default React.memo(Flex);

const FlexContainer = styled.ul<FlexProps>`
  display: flex;
  flex-wrap: wrap;

  justify-content: ${(props) => {
    switch (props.justifyContent) {
      case 'j-flex-start':
        return 'flex-start';
      case 'j-center':
        return 'center';
      case 'j-flex-end':
        return 'flex-end';
      case 'j-between':
        return 'space-between';
      default:
        return 'center';
    }
  }};
  align-items: ${(props) => {
    switch (props.alignItems) {
      case 'a-flex-start':
        return 'flex-start';
      case 'a-center':
        return 'center';
      case 'a-flex-end':
        return 'flex-end';
      default:
        return 'flex-start';
    }
  }};
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => {
    switch (props.gap) {
      case 'none':
        return '0';
      case 'xsmall':
        return '0.5rem';
      case 'small':
        return '1rem';
      case 'medium':
        return '1.5rem';
      case 'large':
        return '2rem';
      case 'xlarge':
        return '3rem';
      default:
        return '0';
    }
  }};
`;