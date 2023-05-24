import { HttpInstance } from "./HttpInstance";
import query from "./query";

const baseUrl = "https://api.coingecko.com/api/v3";

const concatUrlWithQueryString = (
  url: string,
  queryString: string,
) => {
  if (queryString !== '') {
    return `${url}?${queryString}`;
  }
  return url;
}

const http: HttpInstance = {
  get: async (url, options) => {
    const queryString = query.stringify(options?.params);
    const response = await fetch(`${baseUrl}${concatUrlWithQueryString(url, queryString)}`).then((res) => res.json());
    return {
      data: response,
    };
  }
};

export default http;
