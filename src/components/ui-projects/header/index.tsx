import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import styled from 'styled-components'

export default function Header() {
  return (
    <StyledHeader>
      <Link href={`/`}>
        <Icon>
          <Image src={'/images/common/logo.png'} alt={'Good it! ぐいっと'}  width={188} height={49} />
        </Icon>
      </Link>
      <Lists>
        <ListsItem>
          <Link href={'/mind'}>mind</Link>
        </ListsItem>
        <ListsItem>
          <Link href={'/service'}>service</Link>
        </ListsItem>
        <ListsItem>
          <Link href={'/works'}>works</Link>
        </ListsItem>
        <ListsItem>
          <Link href={'/voice'}>voice</Link>
        </ListsItem>
        <ListsItem>
          <Link href={'/member'}>member</Link>
        </ListsItem>
        <ListsItem>
          <Link href={'/recruit'}>recruit</Link>
        </ListsItem>
        <ListsItem>
          <Link href={'/faq'}>faq</Link>
        </ListsItem>
        <ListsItem>
          <a href="https://guitto.blog" target="_blank" rel="noopener noreferrer">
            blog
          </a>
        </ListsItem>
        <ListsItem>
          <a href="https://www.guitto.co.jp/contact" target="_blank" rel="noopener noreferrer">
            contact
          </a>
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

const Icon = styled.span`
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
  > a {
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    color: inherit;
    &:after {
      content: "";
      position: absolute;
      bottom: -15px;
      left: 0;
      height: 2px;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.black};
      opacity: 0;
      transition: opacity 0.3s, bottom 0.3s;
    }
    &:hover {
      &:after {
        bottom: -5px;
        opacity: 1;
      }
    }
  }
`;