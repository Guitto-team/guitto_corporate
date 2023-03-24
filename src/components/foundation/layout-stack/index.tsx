import React from 'react'
import styled from 'styled-components'

export interface LayoutStackProps {
  margin?: 'none' | 's0' | 's1' | 's2'| 's3'| 's4' | 's5',
  children: React.ReactNode,
}

const marginSizes = {
  none: '0',
  s1: '0.5em',
  s2: '1em',
  s3: '1.5em',
  s4: '2em',
  s5: '2.5em',
};

export const LayoutStack: React.FC<LayoutStackProps> = ({
   margin = 's2',
   children,
  }) => {
  return (
    <Stack margin={marginSizes[margin]}>
      {children}
    </Stack>
  );
}

export default React.memo(LayoutStack);

const Stack = styled.div<{ margin: string }>`
  * {
    margin-top: 0;
    margin-bottom: 0;
  }
  > * + * {
    margin-top: ${(props) => props.margin};
  }
`;