import { type ApiInstance } from "./IApi";
import getMarkets from "./getMarkets";
import getMarket from "./getMarket";

const Api: ApiInstance = (
  http,
) => ({
  getMarkets: (...params) => getMarkets(http, ...params),
  getMarket: (...params) => getMarket(http, ...params),
});

export default Api;
