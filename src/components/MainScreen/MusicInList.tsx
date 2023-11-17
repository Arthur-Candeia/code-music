'use client'

import { EmptyAlbumIcon } from "../icons/EmptyAlbumIcon";
import { AddIcon } from "../icons/AddIcon";
import { DeleteIcon } from "../icons/DeleteIcon";
import styles from '@/styles/MainScreen/MusicInList.module.scss';

export function MusicInList({ music }: { music: any }) {

  function handleDeleteMusic(music: string) {
    window.electronAPI.SendToElectron("music-delete", music)
  }

  function handleAddMusic(music: string) {
    window.electronAPI.SendToElectron("music-to-play", music)
  }

  return (
    <div className={styles.container}>
      <EmptyAlbumIcon />
      <div className={styles.iconContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Nome</h1>
          <h2 className={styles.subtitle}>{music}</h2>
        </div>
        <div className={styles.actionContainer}>
          <AddIcon onClick={() => handleAddMusic(music)}/>
          <DeleteIcon onClick={() => handleDeleteMusic(music)} />
        </div>
      </div>
    </div>
  );
}
