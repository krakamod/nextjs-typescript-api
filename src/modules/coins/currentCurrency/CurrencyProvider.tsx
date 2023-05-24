import { createContext, useContext } from "react";
import { Currency } from "../Coin";

const CurrencyContext = createContext(Currency.USD);

export const useCurrency = (): Currency => {
  return useContext(CurrencyContext);
}

interface CurrencyProviderProps {
  children: React.ReactNode;
}

const CurrencyProvider: React.FC<CurrencyProviderProps> = ({
  children,
}) => (
  <CurrencyContext.Provider value={Currency.USD}>
    {children}
  </CurrencyContext.Provider>
);

export default CurrencyProvider;
