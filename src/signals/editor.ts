import { type ColorEditorType } from '@/components/color/editor/ColorEditorTypeSwitch'
import { type ColorFormatName } from '@/constants/color'
import { colorFromString, getSerializedColor } from '@/libs/color'
import { signalWithStorage } from '@/signals'

export const editorColorSignal = signalWithStorage(
  'editorColor',
  getSerializedColor(colorFromString('hsl(161 94% 30%)'))
)

export const editorTypeSignal = signalWithStorage<ColorEditorType>('editorType', 'hsla')

export const editorFormatSignal = signalWithStorage<ColorFormatName>('editorFormat', 'CssHsl')
