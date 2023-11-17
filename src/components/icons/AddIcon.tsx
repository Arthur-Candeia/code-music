export function AddIcon({onClick}: {onClick: () => void}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
      viewBox="0 0 24 24"
      fill="#fff"
      onClick={onClick}
      style={{cursor: 'pointer'}}
    >
      <path 
        d="M12 4V20M20 12L4 12"
        stroke="#ddd"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}