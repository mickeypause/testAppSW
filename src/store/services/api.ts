import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ApiResponse } from './types'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://swapi.dev/api/people/',
  }),
  endpoints: (builder) => ({
    getPeopleList: builder.query<ApiResponse, number>({
      query: (page = 1) => ({
        url: `/?page=${page}`,
      }),
      transformResponse: (response: ApiResponse) => {
        return {
          next: response?.next || null,
          results: response?.results,
          count: response?.count,
          previous: response?.previous,
        }
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      merge: (currentCache, newItems, { arg }) => {
        if (arg === 1) {
          currentCache.next = newItems.next
          currentCache.results = [...newItems.results]
        } else {
          currentCache.next = newItems.next
          currentCache.results.push(...newItems.results)
        }
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
    }),
  }),
})

export const { useGetPeopleListQuery } = api
