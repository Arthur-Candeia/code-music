'use client'

import { useState, useRef, useEffect } from "react";
import { useControlMusic } from "@/hooks/useControlMusic";
import { PreviousIcon } from "../icons/PreviousIcon";
import { PlayIcon } from "../icons/PlayIcon";
import { PauseIcon } from "../icons/PauseIcon";
import { NextIcon } from "../icons/NextIcon";
import styles from '@/styles/ControlMusic/ControlMusic.module.scss';

export function ControlMusic() {
  const audioRef = useRef<any>(null);
  const [musicPlayList, setMusicPlayList] = useState<string[]>([]);
  const [audio, setAudio] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(300000);
  const [duration, setDuration] = useState(0);
  const [musicIndex, setMusicIndex] = useState(0);
  const {handlePlayPause, formatTime, handleProgressBarClick, handlePrevious, handleNext} = useControlMusic({
    audioRef,
    audio,
    musicIndex,
    musicPlayList,
    setMusicIndex,
    setDuration,
    setMusicPlayList,
    setAudio,
    setCurrentTime
  })

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <div className={styles.controlIcon}>
          <div className={styles.controlIcon}>
            <PreviousIcon onClick={handlePrevious} />
          </div>
        </div>
        <div id="play" className={styles.controlIcon}>
          <div className={styles.controlIcon}>
            <PlayIcon onClick={() => handlePlayPause('play')} />
          </div>
        </div>
        <audio ref={audioRef} onEnded={handleNext}>
          <source src={audio!} type="audio/mp3" />
        </audio>
        <div id="pause" className={styles.controlIcon} style={{display: 'none'}}>
          <div className={styles.controlIcon}>
            <PauseIcon onClick={() => handlePlayPause('pause')} />
          </div>
        </div>
        <div className={styles.controlIcon}>
          <div className={styles.controlIcon}>
            <NextIcon onClick={handleNext} />
          </div>
        </div>
      </div>
      <div className={styles.timeInfo}>
        <div className={styles.timeText}>
          <p>{audioRef.current ? formatTime(currentTime) : '00:00'}</p>
        </div>
        <div className={styles.progressBarContainer} onClick={handleProgressBarClick}>
          <div id="progress-bar" className={styles.progressBar} />
        </div>
        <div className={styles.timeText}>
          {audioRef.current ? formatTime(duration) : '00:00'}
        </div>
      </div>
    </div>
  );
}
