import React from 'react'
import styled from 'styled-components'

export interface LayoutInnerProps {
  size?: 'small' | 'medium' | 'large' | 'full',
  children: React.ReactNode,
}

const maxWidthSizes = {
  small: '800px',
  medium: '1200px',
  large: '1920px',
  full: 'unset',
};

export const LayoutInner: React.FC<LayoutInnerProps> = ({
   size = 'medium',
   children,
  }) => {
  return (
    <Inner maxWidth={maxWidthSizes[size]}>
      {children}
    </Inner>
  );
}

export default React.memo(LayoutInner);

const Inner = styled.div<{ maxWidth: string }>`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  max-width: ${(props) => props.maxWidth};
`;