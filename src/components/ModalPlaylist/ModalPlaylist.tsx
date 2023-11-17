'use client'

import { useEffect, useState } from "react";
import styles from '@/styles/ModalPlaylist/ModalPlaylist.module.scss';

export function ModalPlaylist() {
  const [musicPlayList, setMusicPlayList] = useState<string[]>([]);

  useEffect(() => {
    window.electronAPI.ReceiveFromElectron('music-playable', (event: any, music: string) => {
      setMusicPlayList([...musicPlayList , music])
    })
  }, [musicPlayList])

  return (
    <div id="modal-play-list" className={styles.container}>
      <h1 className={styles.title}>PlayList</h1>
      <div className={styles.playlistContainer}>
        {musicPlayList.length === 0 ? (
          <p className={styles.emptyText}>Empty</p>
        ) : (
          musicPlayList.map((music: any, index: number) => (
            <p style={{ color: '#fff' }} key={index}>
              {music}
            </p>
          ))
        )}
      </div>
    </div>
  );
}
