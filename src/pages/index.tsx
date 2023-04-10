import styled from 'styled-components'
import Seo from 'src/components/foundation/seo'
import Header from 'src/components/ui-projects/header'
import Footer from 'src/components/ui-projects/footer'
import { Main } from 'src/components/ui-projects/main'
import { LayoutInner } from 'src/components/foundation/layout-inner'
import { LayoutStack } from 'src/components/foundation/layout-stack'
import { Typography } from 'src/components/ui-parts/typography'

export default function Home() {
  return (
    <>
      <Seo />
      <Header />

      <Main>
        <LayoutInner>
          <LayoutStack>
            <Typography html='h1' textAlign='center' size='xl7' weight='semibold'>
              Guitto
            </Typography>
          </LayoutStack>
        </LayoutInner>
      </Main>

      <Footer />
    </>
  )
}
