import '@testing-library/jest-dom'

// Mock do next/navigation
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    }
  },
  usePathname() {
    return ''
  },
}))

// Mock do next-themes
jest.mock('next-themes', () => ({
  useTheme() {
    return {
      theme: 'light',
      setTheme: jest.fn(),
    }
  },
})) 