import WhiteText from '@components/whiteText/WhiteText'
import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components'

const Wrapper = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const Title = styled(WhiteText)`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

const EmptyList = () => {
  return (
    <Wrapper>
      <Title>No items found</Title>
    </Wrapper>
  )
}

export default EmptyList
