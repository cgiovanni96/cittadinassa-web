import { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "../global/components/Layout/Layout.component";

import { useLocalStorageValue } from "@mantine/hooks";
import { Provider } from "@global/components/Provider.component";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  const [value] = useLocalStorageValue({
    key: "nassa-rpx-token",
    defaultValue: "",
  });

  return (
    <>
      <Head>
        <title>cittadinassa</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <Provider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
