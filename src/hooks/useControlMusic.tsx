'use client'

import { Dispatch, MutableRefObject, useEffect } from "react"
import { propsUseControlMusic } from "@/interfaces/interfacePropsUseControlMusic"

export function useControlMusic({audioRef, audio, musicIndex, musicPlayList, setMusicIndex, setDuration, setMusicPlayList, setAudio, setCurrentTime}: propsUseControlMusic) {

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('loadedmetadata', () => setDuration(audioRef.current.duration))
    }
    
    window.electronAPI.ReceiveFromElectron('music-playable', async (event: any, music: any) => {
      setMusicPlayList([...musicPlayList, music])
      if (!audioRef.current!.currentSrc) {
        setAudio(() => {
          audioRef.current.src = `/musics/${music}`
          audioRef.current.load()
          return `/musics/${music}`
        })
        setCurrentTime(audioRef.current.currentTime)
      }
    })

    return () => {if (audioRef.current) audioRef.current.removeEventListener('loadedmetadata', () => {})}
  }, [musicPlayList])

  useEffect(() => {
    if (audioRef.current) {
      const interval = setInterval(() => {
        const musicDuration = audioRef.current.duration
        if (!audioRef.current.paused) {
          const time = audioRef.current.currentTime
          setCurrentTime(time)
          const progressBar = document.getElementById('progress-bar')
          if (!progressBar) return
          progressBar.style.width = `${(time / musicDuration) * 100}%`
        }
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [audioRef.current])

  function handlePlayPause(action: string) {
    if (audio !== null) {
      action === 'play' ? audioRef.current.play() : audioRef.current.pause()
      document.getElementById('play')!.style.display = action === 'play' ? 'none' : 'flex'
      document.getElementById('pause')!.style.display = action === 'play' ? 'flex' : 'none'
    }
  }

  function formatTime(seconds: number) {
    const minutes = String(Math.floor(seconds / 60))
    const remainingSeconds = String(Math.floor(seconds % 60))
    return `${minutes.padStart(2, '0')}:${remainingSeconds.padStart(2, '0')}`
  }

  function handleProgressBarClick(event: any) {
    if (audioRef.current) {
      const progressBar = event.currentTarget;
      const clickPosition = event.nativeEvent.offsetX;
      const totalWidth = progressBar.clientWidth
      const percentage = clickPosition / totalWidth
      const time = audioRef.current.duration * percentage
      audioRef.current.currentTime = time
    }
  }

  function handlePrevious() {
    if (musicIndex > 0) {
      setMusicIndex((current) => current - 1)
      setAudio(() => {
        audioRef.current.src = `/musics/${musicPlayList[musicIndex - 1]}`
        audioRef.current.load()
        audioRef.current.play()
        return `/musics/${musicPlayList[musicIndex - 1]}`
      })
    }
  }

  function handleNext() {
    if (musicIndex < musicPlayList.length - 1) {
      setMusicIndex((current: number) => current + 1)
      setAudio(() => {
        audioRef.current.src = `/musics/${musicPlayList[musicIndex + 1]}`
        audioRef.current.load()
        audioRef.current.play()
        return `/musics/${musicPlayList[musicIndex + 1]}`
      })
    }
  }

  return {handlePlayPause, formatTime, handleProgressBarClick, handlePrevious, handleNext}
}