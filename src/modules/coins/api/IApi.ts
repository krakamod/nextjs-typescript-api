import { HttpInstance } from "@/service/HttpInstance";
import { Market, Currency } from "../Coin";

export interface IApi {
  getMarkets: (
    currency: Currency,
  ) => Promise<Market[]>;
  getMarket: (
    id: string,
    currency: Currency,
  ) => Promise<Market>;
}

export type ApiInstance = (
  http: HttpInstance,
) => IApi;
