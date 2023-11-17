'use client'

import { useEffect, useState } from "react"
import { MusicInList } from "./MusicInList"
import { useFetchMusicList } from "@/hooks/useFetchMusicList";
import styles from '@/styles/MainScreen/MusicList.module.scss';

export function MusicList() {
    const [musicList, setMusicList] = useState<any>([])
    const {fetchMusicList} = useFetchMusicList()

    useEffect(() => {fetchMusicList(setMusicList)}, [])

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Music List</h2>
      {musicList.length === 0 ? (
        <p className={styles.emptyText}>Empty</p>
      ) : (
        musicList.map((music: any, index: any) => (
          <MusicInList music={music} key={index} />
        ))
      )}
    </div>
  )
}
