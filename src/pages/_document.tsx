import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Main,
  NextScript,
  Head,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400&family=Inter:wght@400;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
