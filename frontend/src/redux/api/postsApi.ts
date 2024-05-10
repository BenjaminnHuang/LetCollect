// src/api/postsApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Post } from "./types";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://us-central1-leetsco.cloudfunctions.net/",
  }),
  endpoints: (builder) => ({
    fetchPosts: builder.query<Post[], void>({
      query: () => "post",
    }),
    deletePost: builder.mutation<void, string>({
      query: (id) => ({
        url: `post/${id}`,
        method: "DELETE",
      }),
    }),
    addPost: builder.mutation<Post, Partial<Post>>({
      query: (body) => ({
        url: "post",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useFetchPostsQuery } = postsApi;
