import { useRouter } from "next/router";
import Head from "next/head";
import Typography from "@/components/Typography";
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
        <div className="bg-white pt-8 pb-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-sm">
            <Typography className="mb-4" variant="h1">
              Market Pairs ({getCurrencyName(currency)})
            </Typography>
            <p className="text-xl text-center text-gray-600">
              The following is a crypto currency with information
              related to the {getCurrencyName(currency)} trading pair.
            </p>
          </div>
        </div>
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8">
          {/* End hero unit */}
          {market && (
            <Details key={market.id} market={market} />
          )}
        </div>
      </main>
    </>
  );
};

export default CurrencyPage;
