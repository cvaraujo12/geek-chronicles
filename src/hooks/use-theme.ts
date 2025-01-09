'use client'

import { useTheme as useNextTheme } from 'next-themes'

export function useTheme() {
  const { theme, setTheme, systemTheme } = useNextTheme()

  return {
    theme: theme === 'system' ? systemTheme : theme,
    setTheme,
    isSystem: theme === 'system',
    isDark:
      theme === 'dark' ||
      (theme === 'system' && systemTheme === 'dark'),
  }
} 