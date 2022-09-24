import { type ColorEditorType } from '@/components/color/editor/ColorEditorTypeSwitch'
import { type ColorFormat, colorFromString, getColorHslaComponents } from '@/libs/color'
import { signalWithStorage } from '@/signals'

// FIXME(HiDeoo) default color
export const editorHslaColorSignal = signalWithStorage(
  'editorHslaColor',
  getColorHslaComponents(colorFromString('#ff00ff'))
)

export const editorTypeSignal = signalWithStorage<ColorEditorType>('editorType', 'rgba')

export const editorExportFormatSignal = signalWithStorage<ColorFormat>('editorExportFormat', 'hsl')
