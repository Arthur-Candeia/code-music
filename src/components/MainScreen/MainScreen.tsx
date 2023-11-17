import { ImportFiles } from "./ImportFiles";
import { MusicList } from "./MusicList";
import styles from '@/styles/MainScreen/MainScreen.module.scss';

export function MainScreen() {
  return (
    <section className={styles.section}>
      <div className={styles.sidebar}>
        <ImportFiles />
      </div>
      <div className={styles.content}>
        <MusicList />
      </div>
    </section>
  )
}
