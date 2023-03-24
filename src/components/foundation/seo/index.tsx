import React from 'react'
import Head from 'next/head';

export interface SeoProps {
  title?: string;
  description?: string;
  imageUrl?: string;
}

export const Seo: React.FC<SeoProps> = ({
    title = '株式会社ぐいっと',
    description = 'ぐいっとは、東京の神保町で企画・デザインを中心に制作事業を行っているクリエイティブ企業です。各種WEB制作・グラフィック制作等、ご相談ください。',
    imageUrl = 'https://www.guitto.co.jp/ogp.png'
  }) => {

  const url = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <title key="title">{`${title} | Guitto Inc.`}</title>
      <meta
        name='description'
        content={description}
      />
      <meta property='og:title' content={title} />
      <meta property="og:site_name" content={title} />
      <meta
        property='og:description'
        content={description}
      />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content="website" />
      <link rel="canonical" href={url} />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
    </Head>
  );
}

export default React.memo(Seo);