import WhiteText from '@components/whiteText/WhiteText'
import { Pressable, Text, View } from 'react-native'
import styled from 'styled-components'

export const Wrapper = styled(View)`
  width: 100%;
  height: 120px;
  gap: ${({ theme }) => theme.gaps.medium};
  padding: ${({ theme }) => theme.gaps.medium};
  position: relative;
`

export const Row = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Block = styled(View)`
  justify-content: center;
  align-items: center;
`

export const Name = styled(WhiteText)`
  font-size: ${({ theme }) => theme.fontSizes.small};
`
export const Value = styled(WhiteText)`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

export const Button = styled(Pressable)`
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.gaps.small};
  border: ${({ theme }) => theme.colors.yellow};
  border-radius: ${({ theme }) => theme.borderRadius};
`

export const ButtonText = styled(Text)`
  color: ${({ theme }) => theme.colors.yellow};
`
