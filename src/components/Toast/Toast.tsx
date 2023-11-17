'use client'

import { useEffect, useState } from "react";
import { useToastReceive } from "@/hooks/useToastReceive";
import styles from '@/styles/Toast/Toast.module.scss';

export function Toast() {
  const [message, setMessage] = useState("");
  const {toastReceive, handleClose} = useToastReceive(setMessage)

  useEffect(() => {toastReceive()}, []);

  return (
    <div id="toast" className={styles.container}>
      <p className={styles.content}>
        <svg
          className={styles.icon}
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="info-circle"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
          ></path>
        </svg>
        {message}
      </p>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button
          type="button"
          data-te-toast-dismiss
          aria-label="Close"
          onClick={handleClose}
          className={styles.closeButton}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#FFF"
              style={{ height: '1.5rem', width: '1.5rem' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
