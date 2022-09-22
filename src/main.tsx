import 'uno.css'
import '@unocss/reset/tailwind.css'

import { render } from 'preact'

import { App } from './components/App'

render(<App />, document.querySelector('#app') as HTMLElement)
