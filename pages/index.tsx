import Head from "next/head";
import Typography from '@/components/Typography';
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
        <div className="bg-white pt-8 pb-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-sm">
            <Typography className="mb-4" variant="h1">
              Market Pairs ({getCurrencyName(currency)})
            </Typography>
            <p className="text-xl text-center text-gray-600">
              The following is a list of crypto currencies with information
              related to the {getCurrencyName(currency)} trading pair.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {markets && (
            <MarketCards>
              {markets.map((market) => (
                <MarketCard key={market.id} market={market} />
              ))}
            </MarketCards>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
