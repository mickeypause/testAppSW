import React, { useEffect } from 'react'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated'
import logo from '../../assets/icons/logo.png'
import { View } from 'react-native'

const Loader = () => {
  const angle = useSharedValue(0)

  const rotate = () => {
    angle.value = withRepeat(withTiming(360, { duration: 3000 }), -1, false)
  }

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: angle.value + 'deg' }],
    }
  })

  useEffect(() => {
    rotate()
  }, [])
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.Image
        source={logo}
        style={[
          {
            width: 150,
            height: 150,
          },
          animatedStyles,
        ]}
      />
    </View>
  )
}

export default Loader
