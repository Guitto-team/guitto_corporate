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
      <Seo title='採用情報' />
      <Header />

      <Main>
        <MainVisual title='RECRUIT' subtitle='ぐいっとは会社を大きくしていく「仲間」を募集しています' />
        
        <LayoutInner>
          <LayoutStack>


          </LayoutStack>
        </LayoutInner>
      </Main>

      <Footer />

    </>
  )
}
