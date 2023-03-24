import React from 'react'
import styled from 'styled-components'

export interface LayoutBoxProps {
  padding?: 'none' | 'small' | 'medium' | 'large' | 'xlarge',
  children: React.ReactNode,
}

const paddingSizes = {
  none: '0',
  small: '0.5em',
  medium: '1em',
  large: '1.5em',
  xlarge: '2em',
};

export const LayoutBox: React.FC<LayoutBoxProps> = ({
   padding = 'small',
   children,
  }) => {
  return (
    <Box padding={paddingSizes[padding]}>
      {children}
    </Box>
  );
}

export default React.memo(LayoutBox);

const Box = styled.div<{ padding: string }>`
  padding: ${(props) => props.padding};
`;