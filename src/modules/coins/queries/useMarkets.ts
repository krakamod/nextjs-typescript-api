import { useQuery } from "react-query";
import { Currency } from "@/modules/coins/Coin";
import coinsApi from "@/modules/coins/api";

const useMarkets = ({
  currency
}: {
  currency: Currency,
}) => useQuery(
  'markets',
  () => coinsApi.getMarkets(currency),
);

export default useMarkets;
