import React from 'react'
import styled from 'styled-components'


export interface MainProps {
  children: React.ReactNode,
}

export const Main: React.FC<MainProps> = ({
  children,
  }) => {
  return (
    <StyledMain>
      {children}
    </StyledMain>
  );
}

export default React.memo(Main);

const StyledMain = styled.main`
  padding: 6rem 0 4rem;
  min-height: 90vh;
  margin-top: ${({ theme }) => theme.properties.headerHeight};
  ${({ theme }) => theme.breakpoint.md`
    padding: 4rem 0;
  `}
`;