import React from 'react'
import styled from 'styled-components'
import LayoutInner from 'src/components/foundation/layout-inner';
import Typography from 'src/components/ui-parts/typography';

export interface MainVisualProps {
  children?: React.ReactNode,
  title: string,
  subtitle?: string,
  backgroundImageUrl?: string
}

export const MainVisual: React.FC<MainVisualProps> = ({
  children,
  title,
  subtitle,
  backgroundImageUrl = '/images/common/main-visual-dammy.png'
  }) => {

  return (
    <MainVisualWrapper backgroundImageUrl={backgroundImageUrl}>
      <MainVisualContainer>
        <Typography html='h1' size='xl7' textAlign='center'>{title}</Typography>
        <Typography html='h6' textAlign='center'>{subtitle}</Typography>
        {children}
      </MainVisualContainer>
    </MainVisualWrapper>
  );
}

export default React.memo(MainVisual);

const MainVisualWrapper = styled.div<{ backgroundImageUrl: string }>`
  height: 300px;
  background-image: ${({ backgroundImageUrl }) => `url(${backgroundImageUrl})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin-bottom: 3em;
`;

const MainVisualContainer = styled.div`
  display: grid;
  place-content: center;
  height: 100%;
  width: 90%;
  margin-left: auto;
  margin-right: auto;

  * + * {
    margin-top: 1em;
  }
`;