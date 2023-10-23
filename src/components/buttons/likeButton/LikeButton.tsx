import { useAppDispatch, useAppSelector } from '@hooks/storeHooks'
import { addPerson, removePerson } from '@store/services/favoriteSlice'
import { Person } from '@store/services/types'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

import styled from 'styled-components'

const Wrapper = styled(Pressable)`
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
`

interface LikeProps {
  data: Person
}

const LikeButton: React.FC<LikeProps> = ({ data }) => {
  const isLiked = useAppSelector((state) =>
    state.favorite.people.find((item) => item.url == data.url)
  )
  const dispatch = useAppDispatch()
  return (
    <Wrapper
      onPress={() => {
        if (!isLiked) dispatch(addPerson(data))
        else {
          dispatch(removePerson(data.url))
        }
      }}>
      <Text>{isLiked ? '💛' : '🤍'}</Text>
    </Wrapper>
  )
}

export default LikeButton
