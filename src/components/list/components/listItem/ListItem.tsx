import React from 'react'
import { Name, Wrapper } from './styles'
import LikeButton from '@components/buttons/likeButton/LikeButton'
import { useNavigation } from '@react-navigation/native'
import { RootStackScreenProps } from '@navigation/types'
import { Pressable } from 'react-native'
import { Person } from '@store/services/types'

interface ListItemProps {
  data: Person
}

const ListItem: React.FC<ListItemProps> = ({ data }) => {
  const navigation = useNavigation<RootStackScreenProps<'Home'>['navigation']>()

  return (
    <Pressable onPress={() => navigation.navigate('Detail', { data: data })}>
      <Wrapper>
        <LikeButton data={data} />
        <Name>{data.name}</Name>
      </Wrapper>
    </Pressable>
  )
}

export default ListItem
