import React, { ReactNode } from 'react'
import { Text } from 'react-native'
import styled from 'styled-components'

const Wrapper = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
`

interface WhiteTextProps {
  children: ReactNode
}

const WhiteText: React.FC<WhiteTextProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default WhiteText
