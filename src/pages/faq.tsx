import styled from 'styled-components'
import Seo from 'src/components/foundation/seo'
import Header from 'src/components/ui-projects/header'
import Footer from 'src/components/ui-projects/footer'
import Main from 'src/components/ui-projects/main'
import LayoutInner from 'src/components/foundation/layout-inner'
import LayoutStack from 'src/components/foundation/layout-stack'
import Typography from 'src/components/ui-parts/typography'
import MainVisual from 'src/components/ui-projects/main-visual'

export default function Page() {
  return (
    <>
      <Seo title='よくある質問' />
      <Header />

      <Main>
        <MainVisual title='FAQ' subtitle='ぐいっとへの質問お答えします' />

        <LayoutInner>
          <LayoutStack>


          </LayoutStack>
        </LayoutInner>
      </Main>

      <Footer />

    </>
  )
}
