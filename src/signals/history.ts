import { type ColorEditorType } from '@/components/color/editor/ColorEditorTypeSwitch'
import { getColorHslaComponents, colorFromString } from '@/libs/color'
import { signalWithStorage } from '@/signals'

// FIXME(HiDeoo) default color
export const editorHslaColorSignal = signalWithStorage(
  'editorHslaColor',
  getColorHslaComponents(colorFromString('#ff00ff'))
)

export const editorTypeSignal = signalWithStorage<ColorEditorType>('editorType', 'rgba')
