import { XRInputSourceState } from '@inspatial/xr/internals'
import { createContext } from 'react'
import { XRStore } from './xr.js'
import { CombinedPointer } from '@inspatial/pointer-events'

export const xrContext = createContext<XRStore | undefined>(undefined)
export const xrInputSourceStateContext = createContext<XRInputSourceState | undefined>(undefined)
export const xrSpaceContext = createContext<XRSpace | undefined>(undefined)
export const combinedPointerContext = createContext<CombinedPointer | undefined>(undefined)
