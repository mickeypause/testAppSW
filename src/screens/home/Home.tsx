import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Loader from '@components/loader/Loader'
import Header from '@components/header/Header'
import { useGetPeopleListQuery } from '@store/services/api'
import List from '@components/list/List'

const Home = () => {
  const [page, setPage] = useState(1)
  const { data, isLoading, isFetching } = useGetPeopleListQuery(page)

  const onEndReached = () => {
    if (data?.next) setPage(page + 1)
  }

  if (isLoading) return <Loader />
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      {data && (
        <List
          data={data}
          onEndReached={onEndReached}
          refreshing={isFetching}
        />
      )}
    </SafeAreaView>
  )
}

export default Home
