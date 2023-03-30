import React from 'react';
import styled from 'styled-components'
import Image from 'next/image';

export interface EyecatchProps {
  eyecatch?: { url: string },
  alt: string,
  objectFit?: 'cover' | 'contain'
}

export const Eyecatch: React.FC<EyecatchProps> = ({
    eyecatch,
    alt,
    objectFit = 'cover'
  }) => {

  const imageUrl = eyecatch?.url ?? '/images/placehold.png';

  return (
    <ImageWrapper>
      <Image src={imageUrl} layout='fill' alt={`${alt}のアイキャッチ画像`} objectFit={objectFit} />
    </ImageWrapper>
  );
}

export default React.memo(Eyecatch);

const ImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 24 / 11;
  overflow: hidden;
`;