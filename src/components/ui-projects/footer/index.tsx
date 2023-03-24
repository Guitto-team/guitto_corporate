import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <StyledFooter>
      <p>© GUITTO INC. All Rights Reserved.</p>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: grid;
  place-content: center;
  padding: 3rem;
  border-top: 1px solid ${({ theme }) => theme.colors.bordercolor};
  font-size: 11px;
`;