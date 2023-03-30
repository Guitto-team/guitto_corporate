import { client } from 'src/libs/client';
import styled from 'styled-components'
import Seo from 'src/components/foundation/seo'
import Header from 'src/components/ui-projects/header'
import Footer from 'src/components/ui-projects/footer'
import Main from 'src/components/ui-projects/main'
import LayoutInner from 'src/components/foundation/layout-inner'
import LayoutStack from 'src/components/foundation/layout-stack'
import Typography from 'src/components/ui-parts/typography'
import Image from 'next/image';

export default function Page({ member }) {

  const eyecatchUrl = member.eyecatch?.url ?? '/images/placehold.png';

  return (
    <>
      <Seo
        title={ member.name } 
        description={`${ member.name }の紹介ページ`}
      />
      <Header />

      <Main>

        <LayoutInner>
          <Typography html='h5' size='xl2' textAlign='center' weight='semibold'>{ member.catch }</Typography>
        </LayoutInner>

        <ImageWrapper>
          <Image src={eyecatchUrl} layout='fill' alt={`${member.name}のアイキャッチ画像`} objectFit='cover' />
        </ImageWrapper>

        <LayoutInner>
          <LayoutStack>

            <Typography html='h1' size='xl5' textAlign='center' weight='semibold'>{ member.name }</Typography>
            <Typography html='p' size='xl'>{ member.comment }</Typography>

          </LayoutStack>
        </LayoutInner>
      </Main>

      <Footer />

    </>
  )
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'member' });

  const paths = data.contents.map((content) => `/member/${content.id}`);
  return { paths, fallback: false };
};


export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'member', contentId: id });

  return {
    props: {
      member: data,
    },
  };
};


const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 514px;
`;