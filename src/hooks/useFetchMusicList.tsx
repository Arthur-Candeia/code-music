'use client'

import { Dispatch } from "react";

export function useFetchMusicList() {
  const fetchMusicList = async (setMusicList: Dispatch<string[]>) => {
    try {
        await window.electronAPI.SendToElectron('music-get')
        await window.electronAPI.ReceiveFromElectron('music:list', (event: any, args: any) => {
          setMusicList(args)
        })
    } catch (err: any) {
        console.log(err.message)
    }
  }

  return {fetchMusicList}
}