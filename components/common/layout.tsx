// components/layout.js

import Navbar from './navbar/navbar'
import Footer from './footer/footer'
import { ReactNode } from 'react'

interface IProps {
  children: ReactNode;
  // any other props that come into the component
}

export default function Layout({ children, ...props }: IProps) {
  return (
    <>
      <Navbar />
        <main>{children}</main>
      <Footer />
    </>
  )
}