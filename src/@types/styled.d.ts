import 'styled-components'
import { DefaultTheme } from 'styled-components'
import { defaultTheme } from '../styles/theme/default'

type theme = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends theme{}
}