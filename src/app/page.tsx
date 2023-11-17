'use client'

import { Toast } from '@/components/Toast/Toast';
import { MainScreen } from '@/components/MainScreen/MainScreen';
import { BottomBar } from '@/components/BottomBar/BottomBar';
import { ModalPlaylist } from '@/components/ModalPlaylist/ModalPlaylist';
import '@/styles/style.scss';

export default function Home() {
  return (
    <main style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
      <Toast />
      <MainScreen />
      <BottomBar />
      <ModalPlaylist />
    </main>
  )
}
