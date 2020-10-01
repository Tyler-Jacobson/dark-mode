import React, { useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (bool) => {
    const [storedValue, setValue] = useLocalStorage(bool)
    return [storedValue, setValue]
}