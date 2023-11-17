import { Dispatch, MutableRefObject } from "react";

export interface propsUseControlMusic {
  audioRef: MutableRefObject<any>,
  audio: any,
  musicIndex: number,
  musicPlayList: string[],
  setMusicIndex: Dispatch<any> | Dispatch<(current: number) => number>,
  setDuration: Dispatch<number>,
  setMusicPlayList: Dispatch<string[]>,
  setAudio: Dispatch<any>,
  setCurrentTime: Dispatch<number>
}