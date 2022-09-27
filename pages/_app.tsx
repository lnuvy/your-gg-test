import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import { theme } from '../styles/theme'
import GlobalStyles from '../styles/GlobalStyles'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient } from '@tanstack/query-core'
import ErrorBoundary from '@pages/ErrorBoundary'
import { useRouter } from 'next/router'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      useErrorBoundary: true,
      refetchOnWindowFocus: false,
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <GlobalStyles />

        <ErrorBoundary router={router}>
          <Component {...pageProps} />
        </ErrorBoundary>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default MyApp
