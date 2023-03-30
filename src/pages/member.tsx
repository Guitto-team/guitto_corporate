import { client } from 'src/libs/client';
import styled from 'styled-components'
import Seo from 'src/components/foundation/seo'
import Header from 'src/components/ui-projects/header'
import Footer from 'src/components/ui-projects/footer'
import Main from 'src/components/ui-projects/main'
import LayoutInner from 'src/components/foundation/layout-inner'
import LayoutStack from 'src/components/foundation/layout-stack'
import Typography from 'src/components/ui-parts/typography'
import Grid from 'src/components/foundation/grid';
import MemberItem from 'src/components/ui-projects/member-item';
import { motion } from 'framer-motion'

export default function Page({ members }) {
  return (
    <>
      <Seo title='メンバー' />
      <Header />

      <Main>
        <LayoutInner>
          <LayoutStack>

            <Typography html='h1' size='xl7' textAlign='center' weight='semibold'>MEMBER</Typography>

            <Grid type='col2' gap='large'>
              {members.map((member, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: "10%" }}
                  animate={{ opacity: 1, y: "0%" }}
                  exit={{ opacity: 0, y: "10%" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <MemberItem member={member} />
                </motion.li>
              ))}
            </Grid>

          </LayoutStack>
        </LayoutInner>
      </Main>

      <Footer />

    </>
  )
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'member' });

  return {
    props: {
      members: data.contents,
    },
  };
};
