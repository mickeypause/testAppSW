import 'styled-components'
import { Theme } from '@assets/styles/Theme'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
