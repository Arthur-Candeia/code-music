'use client'

import { Dispatch } from "react";

export function useToastReceive(setMessage: Dispatch<any>) {
  const toastReceive = async () => {
    window.electronAPI.ReceiveFromElectron('toast:receive', (event: any, args: any) => {
      setMessage(args);
      const toast = document.getElementById('toast')!;
      toast.style.display = 'flex';
      setTimeout(() => handleClose(), 5000);
    });
  }

  const handleClose = () => {
    setMessage('');
    const toast = document.getElementById('toast')!;
    toast.style.display = 'none';
  }

  return {toastReceive, handleClose}
}