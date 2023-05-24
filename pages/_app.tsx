import type { AppProps } from "next/app";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";

import "@/styles/globals.css";

import CurrencyProvider from "@/modules/coins/currentCurrency";

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <CurrencyProvider>
      <Component {...pageProps} />
    </CurrencyProvider>
  </QueryClientProvider>
);

export default App;
