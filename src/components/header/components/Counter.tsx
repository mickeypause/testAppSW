import WhiteText from '@components/whiteText/WhiteText'
import { useAppSelector } from '@hooks/storeHooks'
import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components'

const Wrapper = styled(View)`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: ${({ theme }) => theme.gaps.small};
`
const Value = styled(WhiteText)``
const Name = styled(WhiteText)``
const Counter = () => {
  const count = useAppSelector((state) => state.favorite.people)
  return (
    <Wrapper>
      <Name>Total Count</Name>
      <Value>{count.length}</Value>
    </Wrapper>
  )
}

export default Counter
