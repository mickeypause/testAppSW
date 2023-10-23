import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Row, Title, Wrapper } from './styles'
import { RootStackScreenProps } from '@navigation/types'
import { useRoute } from '@react-navigation/native'
import WhiteText from '@components/whiteText/WhiteText'

const Detail = () => {
  const {
    params: { data },
  } = useRoute<RootStackScreenProps<'Detail'>['route']>()

  return (
    <Wrapper>
      <Row>
        <Title>{data.name}</Title>
      </Row>
      <WhiteText>Gender: {data.gender}</WhiteText>
      <WhiteText>Height: {data.height}</WhiteText>
      <WhiteText>Mass: {data.mass}</WhiteText>
      <WhiteText>Hair color: {data.hair_color}</WhiteText>
      <WhiteText>Skin color: {data.skin_color}</WhiteText>
      <WhiteText>Birth year: {data.birth_year}</WhiteText>
    </Wrapper>
  )
}

export default Detail
