import styled from 'styled-components'
import Seo from 'src/components/foundation/seo'
import Header from 'src/components/ui-projects/header'
import Footer from 'src/components/ui-projects/footer'
import { Main } from 'src/components/ui-projects/main'
import { LayoutInner } from 'src/components/foundation/layout-inner'
import { LayoutStack } from 'src/components/foundation/layout-stack'
import { Typography } from 'src/components/ui-parts/typography'
import { MainVisual } from 'src/components/ui-projects/main-visual'

export default function Page() {
  return (
    <>
      <Seo title='お問い合わせ' />
      <Header />

      <Main>
        <MainVisual title='CONTACT' />

        <LayoutInner>
          <LayoutStack></LayoutStack>
        </LayoutInner>
      </Main>

      <Footer />
    </>
  )
}
