import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const awsApi = createApi({
  reducerPath: "awsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ze82cjgyq5.execute-api.eu-west-1.amazonaws.com/v1",
  }),
  keepUnusedDataFor: 1800,
  endpoints: (builder) => ({
    getArticlesList: builder.query({
      query: () => `articles`,
    }),
    getArticle: builder.query({
      query: (id) => ({
        url: `article/${id}`,
        responseHandler: (response) => response.text(),
      }),
    }),
    subscribe: builder.mutation({
      query(email) {
        const body = { email: email };
        return {
          url: `subscribe`,
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const {
  useGetArticlesListQuery,
  useGetArticleQuery,
  useSubscribeMutation,
} = awsApi;
