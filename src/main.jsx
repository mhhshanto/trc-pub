import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routers/MainRouter'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from './auth/AuthProvider'
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
            <RouterProvider router={router} />
            <Toaster></Toaster>
        </ChakraProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
