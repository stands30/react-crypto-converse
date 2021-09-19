import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '8d2305d9f9mshb68a430a740a79cp12f0ecjsnd4c0d8378acf'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/';

const createRequest = ( url ) => ({
    url, headers:cryptoNewsHeaders
});


export const cryptoNewsApi = createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) =>({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&limit=${count}`),
        }),
    })
});


export const {
    useGetCryptoNewsQuery
} = cryptoNewsApi;