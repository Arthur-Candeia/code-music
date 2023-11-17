'use client'

export function PlaylistIcon() {

  function handleModalPlaylist() {
    const modal = document.getElementById('modal-play-list')!
    modal.style.display = modal.style.display == 'none' ? 'flex' : 'none'
  }

  return (
    <svg
      onClick={handleModalPlaylist}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{position: 'fixed', bottom: '25px'}}
    >
      <path d="M3 5H21H3Z" fill="#fcfcfc" />
      <path
        d="M3 5H21"
        stroke="#fcfcfc"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g opacity="0.6">
        <path d="M3 19H21H3Z" fill="#fcfcfc" />
        <path
          d="M3 19H21"
          stroke="#fcfcfc"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g opacity="0.6">
        <path d="M3 12H21H3Z" fill="#fcfcfc" />
        <path
          d="M3 12H21"
          stroke="#fcfcfc"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}