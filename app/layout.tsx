'use client'
import * as React from "react";

import { Header, Footer } from '../components'
import '../styles/globals.css'
import {NextUIProvider} from "@nextui-org/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html>
      <head />
      <NextUIProvider>
          <body className='dark min-h-screen flex flex-col bg-zinc-900 text-white justify-between overflow-x-hidden'>
          {children}
          </body>
          <Footer/>
      </NextUIProvider>
    </html>
  )
}
