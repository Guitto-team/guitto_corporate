import styled from 'styled-components'
import Seo from 'src/components/foundation/seo'
import Header from 'src/components/ui-projects/header'
import Footer from 'src/components/ui-projects/footer'
import Main from 'src/components/ui-projects/main'
import LayoutInner from 'src/components/foundation/layout-inner'
import LayoutStack from 'src/components/foundation/layout-stack'
import Typography from 'src/components/ui-parts/typography'

export default function Page() {
  return (
    <>
      <Seo title='サービス' />
      <Header />

      <Main>
        <LayoutInner>
          <LayoutStack>

            <Typography html='h1' size='xl7' textAlign='center' weight='semibold'>SERVICE</Typography>

          </LayoutStack>
        </LayoutInner>
      </Main>

      <Footer />

    </>
  )
}
