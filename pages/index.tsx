import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useColorMode } from '@chakra-ui/color-mode'
import React from 'react'
import {  Heading } from '@chakra-ui/layout'
import {
  MoonIcon,
  SunIcon
} from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/button'

const Home: NextPage = () => {

  const { colorMode, toggleColorMode } = useColorMode()
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Dark mode using Next.js and Chakra UI</title>
        <meta name="description" content="Dark mode using Next.js and Chakra UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

  
      <main className={styles.main}>
       <Heading> Dark Mode toggle using Chakra UI and Next.js </Heading>
       
       <IconButton mt={4} aria-label="Toggle Mode" onClick={toggleColorMode}>
          { colorMode === 'light' ? <MoonIcon/> : <SunIcon/> }
        </IconButton>
       
         
      </main>

      <footer className={styles.footer}>
        Built in ♥️ with Next.js and Chakra UI
      </footer>
    </div>
  )
}

export default Home
