import { ChangeEvent, FormEvent } from "react";

export function handleInputFileChange(event: ChangeEvent<HTMLInputElement>) {
  const selectFiles = Array.from(event.target.files!)
    selectFiles.forEach((file: any) => {
      const reader = new FileReader();
      reader.onload = () => {
        const fileData: any = reader.result
        const fileObject = {
          name: file.name,
          data: new Uint8Array(fileData),
        }
        window.electronAPI!.SendToElectron('music-upload', fileObject)
      }
      reader.readAsArrayBuffer(file)
    })
}