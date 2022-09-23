import { getColorHslaComponents, colorFromString } from '@/libs/color'
import { signalWithStorage } from '@/signals'

export const editorHslaColor = signalWithStorage('editorHslaColor', getColorHslaComponents(colorFromString('#ff00ff')))
