import { ControlMusic } from "./ControlMusic";
import { PlaylistIcon } from "../icons/PlaylistIcon";
import styles from '@/styles/BottomBar/BottomBar.module.scss';

export function BottomBar() {
  return (
    <>
      <nav className={styles.container}>
        <ControlMusic />
      </nav>
      <div className={styles.iconContainer}>
        <PlaylistIcon />
      </div>
    </>
  );
}
