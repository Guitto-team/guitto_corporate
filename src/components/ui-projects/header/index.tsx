import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import styled from 'styled-components'

export default function Header() {
  return (
    <StyledHeader>
      <Link href={`/`} scroll={false}>
        <Home>
          <Icon>
            <Image src={'/images/common/logo.png'} alt={'Good it! ぐいっと'}  width={188} height={49} />
          </Icon>
        </Home>
      </Link>
      <Lists>
        <ListsItem>
          <Link href={'/'} scroll={false}>
            <StyledLink>
              <Icon>
                <Image src={'/images/common/home.svg'} alt={'HOMEのアイコン'}  width={22} height={21} />
              </Icon>
            </StyledLink>
          </Link>
        </ListsItem>
        <ListsItem>
          <Link href={`https://www.guitto.co.jp/contact`} scroll={false}>
            <StyledLink target="_blank">
              <Icon>
                <Image src={'/images/common/mail.svg'} alt={'CONTACTのアイコン'}  width={25} height={18} />
              </Icon>
            </StyledLink>
          </Link>
        </ListsItem>
      </Lists>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 3%;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.bordercolor};
  height: ${({ theme }) => theme.properties.headerHeight};

  > a {
    text-decoration: none;
  }
`;

const Home = styled.a`
  font-size: 20px;
  font-weight: bold;
`;

const Icon = styled.i`
  position: relative;
  width: 22px;
  height: 22px;
`;

const Lists = styled.ul`
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
`;

const ListsItem = styled.li`

`;

const StyledLink = styled.a`
  
`;