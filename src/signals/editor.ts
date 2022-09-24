import { type ColorEditorType } from '@/components/color/editor/ColorEditorTypeSwitch'
import { type ColorFormat } from '@/constants/color'
import { colorFromString, getSerializedColor } from '@/libs/color'
import { signalWithStorage } from '@/signals'

// FIXME(HiDeoo) default color
export const editorColorSignal = signalWithStorage('editorColor', getSerializedColor(colorFromString('#ff00ff')))

export const editorTypeSignal = signalWithStorage<ColorEditorType>('editorType', 'rgba')

export const editorFormatSignal = signalWithStorage<ColorFormat>('editorFormat', 'hsl')
