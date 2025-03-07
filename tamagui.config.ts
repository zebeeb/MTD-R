
// Basic Tamagui configuration file that sets up the theme provider
import { createTamagui } from 'tamagui'
import { createInterFont } from '@tamagui/font-inter'
import { shorthands } from '@tamagui/shorthands'
import { themes, tokens } from '@tamagui/themes'

// Create font configurations
const headingFont = createInterFont({
  size: {
    // Define standard font sizes
    1: 12,
    2: 14,
    3: 16,
    4: 18,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
  },
  weight: {
    4: '400',
    6: '600',
  },
  color: {
    1: '$colorFocus',
    2: '$color',
  },
  letterSpacing: {
    4: 0,
  },
  face: {
    400: { normal: 'InterRegular' },
    600: { normal: 'InterSemiBold' },
  },
})

// Create the base Tamagui configuration
const appConfig = createTamagui({
  defaultFont: 'body',
  fonts: {
    heading: headingFont,
    body: headingFont,
  },
  tokens,
  themes,
  shorthands,
})

// Export the configuration
export type AppConfig = typeof appConfig
export default appConfig
