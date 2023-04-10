import { client } from 'src/libs/client'
import styled from 'styled-components'
import Seo from 'src/components/foundation/seo'
import Header from 'src/components/ui-projects/header'
import Footer from 'src/components/ui-projects/footer'
import { Main } from 'src/components/ui-projects/main'
import { LayoutSection } from 'src/components/foundation/layout-section'
import { LayoutInner } from 'src/components/foundation/layout-inner'
import { LayoutStack } from 'src/components/foundation/layout-stack'
import { Typography } from 'src/components/ui-parts/typography'
import Image from 'next/image'
import Link from 'next/link'
import { Flex } from 'src/components/foundation/flex'

export default function Page({ member }) {
  const eyecatchUrl = member.eyecatch?.url ?? '/images/common/placehold.png'

  return (
    <>
      <Seo title={member.name} description={`${member.name}の紹介ページ`} />
      <Header />

      <Main>
        <LayoutInner>
          <Typography html='h5' size='xl2' textAlign='center' weight='semibold'>
            {member.catch}
          </Typography>
        </LayoutInner>

        <ImageWrapper>
          <Image
            src={eyecatchUrl}
            layout='fill'
            alt={`${member.name}のアイキャッチ画像`}
            objectFit='cover'
          />
        </ImageWrapper>

        <Section>
          <LayoutInner size='small'>
            <LayoutStack>
              <Flex>
                <Icon><Image src={member.icon?.url ?? '/images/common/dammy_icon.png'} layout='fill' alt={`${member.name}のアイコン`} objectFit='contain' /></Icon>
                <LayoutStack>
                  <Entry><Typography html='span' size='sm'>{member.entryYear + member.entryDivision}入社</Typography></Entry>

                  {member.position.map((content, index) => (
                    <Typography key={index} html='span'>{`${content}${
                      index !== member.position.length - 1 ? '/' : ''
                    }`}</Typography>
                  ))}

                  <Typography html='h4' size='xl3' weight='semibold'>{member.name}</Typography>

                  <Flex gap='xsmall'>
                    {member.tags.map((content, index) => (
                      <li key={index}>
                        <Typography html='span'>#{content.text}</Typography>
                      </li>
                    ))}
                  </Flex>
                </LayoutStack>
              </Flex>

              <Typography html='p' size='xl'>
                {member.comment}
              </Typography>
            </LayoutStack>
          </LayoutInner>
        </Section>

        {member.rows.length > 0 && (
          <LayoutSection backgroundColor='lightgray'>
            <LayoutInner>
              <LayoutStack>
                <Typography html='h3' size='xl3' textAlign='center' weight='bold'>他のメンバーからみるとこんな人</Typography>
                <OtherList>
                  {member.rows.map((content, index) => (
                    <li key={index}>
                      <OtherIntroduction href={`/member/${content.member.id}`}>
                        <Icon><Image src={content.member.icon?.url ?? '/images/common/dammy_icon.png'} layout='fill' alt={`${content.member.name}のアイコン`} objectFit='contain' /></Icon>
                        <Balloon>
                          <Typography>{content.text}</Typography>
                        </Balloon>
                      </OtherIntroduction>
                    </li>
                  ))}
                </OtherList>
              </LayoutStack>
            </LayoutInner>
          </LayoutSection>
        )}

      </Main>

      <Footer />
    </>
  )
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'member' })

  const paths = data.contents.map((content) => `/member/${content.id}`)
  return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const data = await client.get({ endpoint: 'member', contentId: id })

  return {
    props: {
      member: data,
    },
  }
}

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 514px;
`;

const Section = styled.section`
  padding: 5rem 0;
`;

const Entry = styled.span`
  border: solid 1px ${({ theme }) => theme.colors.bordercolor};
  border-radius: 2em;
  padding: 0.5em 1em;
  margin-right: 1em;
`;

const Icon = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  width: 100px;
  background-color: ${({ theme }) => theme.colors.white};

  img {
    max-width: 60%;
    max-height: 60%;
    margin: auto;
  }
`;

const OtherList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const OtherIntroduction = styled(Link)`
  text-decoration: none;
  display: grid;
  grid-template-columns: 10% minmax(0, 1fr);
  gap: 1rem;

  & + & {
    margin-top: 1rem;
  }
`

const Balloon = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  padding: 1em;
`;