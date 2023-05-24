import { useRouter } from "next/router";
import Head from "next/head";
import Heading from "@/components/Heading";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import Container from "@/components/Container";
import Details from "@/modules/coins/Details";
import getCurrencyName from "@/modules/coins/utils/getCurrencyName";
import useMarket from "@/modules/coins/queries/useMarket";
import { useCurrency } from "@/modules/coins/currentCurrency";

const CurrencyPage: React.FC = () => {
  const router = useRouter();
  const currency = useCurrency();
  
  const { data: market } = useMarket({
    id: router.query.symbol as string,
    currency,
  }, {
    enabled: !!router.query.symbol,
  });

  return (
    <>
      <Head>
        <title>CoinGecko Market Pairs ({getCurrencyName(currency)})</title>
      </Head>
      <main>
        <Heading>
          <Title>
            Market Pairs ({getCurrencyName(currency)})
          </Title>
          <Subtitle>
            The following is a crypto currency with information
            related to the {getCurrencyName(currency)} trading pair.
          </Subtitle>
        </Heading>
        <Container size="sm">
          {/* End hero unit */}
          {market && (
            <Details key={market.id} market={market} />
          )}
        </Container>
      </main>
    </>
  );
};

export default CurrencyPage;
