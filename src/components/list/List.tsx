import React, { useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import ListItem from './components/listItem/ListItem'
import EmptyList from './components/emptyList/EmptyList'
import WhiteText from '@components/whiteText/WhiteText'
import { ApiResponse, Person } from '@store/services/types'

interface ListProps {
  data: ApiResponse
  onEndReached?: () => void
  refreshing?: boolean
}

const List: React.FC<ListProps> = ({ data, onEndReached, refreshing }) => {
  return (
    <FlatList
      data={data.results}
      keyExtractor={(item) => item.url}
      renderItem={(item) => <ListItem data={item.item} />}
      onEndReachedThreshold={0.3}
      onEndReached={onEndReached}
      ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      contentContainerStyle={{ paddingHorizontal: 16 }}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => <EmptyList />}
      ListFooterComponent={() =>
        refreshing && (
          <View>
            <WhiteText>Loading ...</WhiteText>
          </View>
        )
      }
    />
  )
}

export default List
