// ImportFiles.tsx

'use client'

import styles from '@/styles/MainScreen/ImportFiles.module.scss';
import { handleInputFileChange } from '@/utilities/handleInputFileChange';

declare global {
  interface Window {
    electronAPI?: any
  }
}

export function ImportFiles() {
  return (
    <div className="mb-3">
      <label className={styles.label} htmlFor="formFileMultiple">
        Importar Músicas
      </label>
      <input
        className={styles.input}
        type="file"
        id="formFileMultiple"
        multiple
        accept=".mp3,.wav"
        onChange={handleInputFileChange}
      />
    </div>
  )
}
