import styled from 'styled-components'
import Seo from 'src/components/foundation/seo'
import Header from 'src/components/ui-projects/header'
import Footer from 'src/components/ui-projects/footer'
import Main from 'src/components/ui-projects/main'
import { LayoutInner } from 'src/components/foundation/layout-inner'
import LayoutStack from 'src/components/foundation/layout-stack'

export default function Mind() {
  return (
    <>
      <Seo title='企業理念' />
      <Header />

      <Main>
        <LayoutInner>
          <LayoutStack>

            <Title>Mind</Title>

          </LayoutStack>
        </LayoutInner>
      </Main>

      <Footer />

    </>
  )
}

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;

  > a {
    color: #0070f3;
    text-decoration: none;

    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
  }
`;
