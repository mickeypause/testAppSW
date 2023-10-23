import { ScrollView, Text, View } from 'react-native'

import styled from 'styled-components'

export const Wrapper = styled(ScrollView)`
  flex: 1;
  padding: ${({ theme }) => theme.gaps.medium};
`

export const Row = styled(View)`
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.gaps.large};
`

export const Title = styled(Text)`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
`
