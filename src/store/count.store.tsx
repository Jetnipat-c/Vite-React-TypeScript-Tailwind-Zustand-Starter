import create from 'zustand'

import { TCount } from './types/count.types'

export const CountStore = create<TCount> ((set,get) => ({
    count: 0,
    setIncrease: () => {
        set(state => {state.count = state.count+1})
    },
    setDecrease: () => {
        set(state => {state.count = state.count-1})
    },
}))