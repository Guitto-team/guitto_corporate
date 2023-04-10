import React from 'react'
import styled from 'styled-components'
import { LayoutStack } from 'src/components/foundation/layout-stack'
import { Typography } from 'src/components/ui-parts/typography'
import Link from 'next/link'
import { Flex } from 'src/components/foundation/flex'
import { Eyecatch } from 'src/components/ui-parts/eyecatch'

export interface MemberItemProps {
  member: any
}

export const MemberItem: React.FC<MemberItemProps> = ({ member }) => {
  return (
    <StyledLink href={`/member/${member.id}`}>
      <LayoutStack margin='s1'>
        <Eyecatch eyecatch={member.eyecatch} alt={member.name} />

        {member.position.map((content, index) => (
          <Typography key={index} html='span'>{`${content}${
            index !== member.position.length - 1 ? '/' : ''
          }`}</Typography>
        ))}

        <Typography html='h4' weight='normal' size='xl'>
          {member.name}
        </Typography>

        <Flex gap='xsmall'>
          {member.tags.map((content, index) => (
            <li key={index}>
              <Typography html='span'>#{content.text}</Typography>
            </li>
          ))}
        </Flex>
      </LayoutStack>
    </StyledLink>
  )
}

export default React.memo(MemberItem)

const StyledLink = styled(Link)`
  text-decoration: none;
`
