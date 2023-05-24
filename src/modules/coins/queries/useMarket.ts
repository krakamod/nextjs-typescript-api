import { useQuery, QueryObserverOptions } from "react-query";
import { Currency, Market } from "@/modules/coins/Coin";
import coinsApi from "@/modules/coins/api";

const useMarket = ({
  id,
  currency
}: {
  id: string,
  currency: Currency,
}, {
  enabled,
}: QueryObserverOptions<Market>) => useQuery(
  ['market', id],
  () => coinsApi.getMarket(id, currency),
  {
    enabled,
  }
);

export default useMarket;
