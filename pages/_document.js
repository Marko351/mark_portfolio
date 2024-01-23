import Document, { Html, Head, Main, NextScript } from 'next/document';

function MyDocument() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script>
      </body>
    </Html>
  );
}

export default MyDocument;
