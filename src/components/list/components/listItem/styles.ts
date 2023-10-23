import WhiteText from '@components/whiteText/WhiteText'
import { Text, View } from 'react-native'

import styled from 'styled-components'

export const Wrapper = styled(View)`
  width: 100%;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: ${({ theme }) => theme.gaps.medium};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.gray};
`

export const Name = styled(Text)`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
`
