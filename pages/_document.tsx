import { FC } from 'react';
import { DocumentProps, Html, Head, Main, NextScript } from 'next/document';

const Document: FC<DocumentProps> = () => {
  return (
    <Html>
      <Head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=Manrope&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="./imgs/logo.png" />
        <meta name="description" content="Kevin's personal website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
