import Head from "next/head";
import Heading from "@/components/Heading";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import Container from "@/components/Container";
import MarketCards from "@/modules/coins/Cards";
import MarketCard from "@/modules/coins/Card";
import getCurrencyName from "@/modules/coins/utils/getCurrencyName";
import useMarkets from "@/modules/coins/queries/useMarkets";
import { useCurrency } from "@/modules/coins/currentCurrency";

const Home: React.FC = () => {
  const currency = useCurrency();
  
  const { data: markets } = useMarkets({
    currency,
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
            The following is a list of crypto currencies with information
            related to the {getCurrencyName(currency)} trading pair.
          </Subtitle>
        </Heading>
        <Container>
          {markets && (
            <MarketCards>
              {markets.map((market) => (
                <MarketCard key={market.id} market={market} />
              ))}
            </MarketCards>
          )}
        </Container>
      </main>
    </>
  );
};

export default Home;
