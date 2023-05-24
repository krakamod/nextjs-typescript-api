import { Currency } from "../../Coin";

const getCurrencyName = (
  currency: Currency,
) => ({
  [Currency.USD]: "USD",
}[currency])

export default getCurrencyName;
