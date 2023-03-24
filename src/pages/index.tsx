import styled from 'styled-components'
import Seo from 'src/components/foundation/seo'
import Header from 'src/components/ui-projects/header'
import Footer from 'src/components/ui-projects/footer'
import Main from 'src/components/ui-projects/main'
import { LayoutInner } from 'src/components/foundation/layout-inner'
import LayoutStack from 'src/components/foundation/layout-stack'

export default function Home() {
  return (
    <>
      <Seo />
      <Header />

      <Main>
        <LayoutInner>
          <LayoutStack>

            <Title>株式会社ぐいっとHPリニューアル</Title>

            <Description>
              Get started by editing{' '}
              <Code>pages/index.js</Code>
            </Description>

            <Grid>
              <Card href="https://nextjs.org/docs">
                <h2>Documentation &rarr;</h2>
                <p>Find in-depth information about Next.js features and API.</p>
              </Card>

              <Card href="https://nextjs.org/learn">
                <h2>Learn &rarr;</h2>
                <p>Learn about Next.js in an interactive course with quizzes!</p>
              </Card>

              <Card
                href="https://github.com/vercel/next.js/tree/canary/examples"
              >
                <h2>Examples &rarr;</h2>
                <p>Discover and deploy boilerplate example Next.js projects.</p>
              </Card>

              <Card
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              >
                <h2>Deploy &rarr;</h2>
                <p>
                  Instantly deploy your Next.js site to a public URL with Vercel.
                </p>
              </Card>
            </Grid>

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

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`;

const Code = styled.code`
  background: #000;
  color: #fff;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;

const Grid = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: column;

  ${({ theme }) => theme.breakpoint.md`
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 800px;
  `}
`;

const Card = styled.a`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 300px;

  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }

  > h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }
  > p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`