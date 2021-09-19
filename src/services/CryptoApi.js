import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '8d2305d9f9mshb68a430a740a79cp12f0ecjsnd4c0d8378acf'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/';

const createRequest = ( url ) => ({
    url, headers:cryptoApiHeaders
})

 export const cryptoApi = createApi({
     reducerPath:'cryptoApi',
     baseQuery: fetchBaseQuery({ baseUrl }),
     endpoints: (builder) =>({
         getCryptos: builder.query({
             query: (count) => createRequest(`/coins?limit=${count}`)
         }),
         getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timePeriod}) => createRequest(`/coin/${coinId}/history/${timePeriod}`)
        }),
        getExchanges: builder.query({
            query: () => createRequest(`/exchanges`)
        }),
     })
 });

 
 export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
    useGetExchangesQuery,
} = cryptoApi;