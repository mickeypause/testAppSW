import React from 'react'
import { Block, Button, ButtonText, Name, Row, Value, Wrapper } from './styles'
import Counter from './components/Counter'
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks'
import { reset } from '@store/services/favoriteSlice'

const Header = () => {
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => state.favorite.people)

  const filterGender = (gender: string) => {
    switch (gender) {
      case 'male':
        return data.filter((item) => item.gender === 'male').length
      case 'female':
        return data.filter((item) => item.gender === 'female').length
      case 'other':
        return data.filter(
          (item) => item.gender !== 'male' && item.gender !== 'female'
        ).length
    }
  }
  return (
    <Wrapper>
      <Row>
        <Counter />
        <Button onPress={() => dispatch(reset())}>
          <ButtonText>Reset</ButtonText>
        </Button>
      </Row>
      <Row>
        <Block>
          <Value>{filterGender('male')}</Value>
          <Name>Male</Name>
        </Block>
        <Block>
          <Value>{filterGender('female')}</Value>
          <Name>Female</Name>
        </Block>
        <Block>
          <Value>{filterGender('other')}</Value>
          <Name>Other</Name>
        </Block>
      </Row>
    </Wrapper>
  )
}

export default Header
