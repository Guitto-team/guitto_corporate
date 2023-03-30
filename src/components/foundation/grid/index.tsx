import React from 'react'
import styled from 'styled-components'

export interface GridProps {
  type?: 'col2' | 'col3' | 'col4' | 'col6' ,
  gap?: 'none' | 'small' | 'medium' | 'large' ,
  children: React.ReactNode,
}

export const Grid: React.FC<GridProps> = ({
    type = 'col4',
    gap = 'medium',
    children,
  }) => {
  return (
    <GridContainer type={type} gap={gap}>
      {children}
    </GridContainer>
  );
}

export default React.memo(Grid);

const GridContainer = styled.ul<{type: GridProps['type'], gap: GridProps['gap']}>`
  display: grid;

  grid-template-columns: repeat(${({type}) => {
    switch (type) {
      case 'col2':
        return 2;
      case 'col3':
        return 3;
      case 'col4':
        return 4;
      case 'col6':
        return 6;
      default:
        return 4;
    }
  }}, minmax(0,1fr));

  gap: ${({gap}) => {
    switch (gap) {
      case 'none':
        return '0';
      case 'small':
        return '0.5rem';
      case 'medium':
        return '1rem';
      case 'large':
        return '2rem';
      default:
        return '1rem';
    }
  }};
`;