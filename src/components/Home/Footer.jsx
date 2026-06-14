import NavBar from '../NavBar'

const Footer = () => {
  return (
    <div className='flex items-center px-8 justify-between h-15 border-t border-gray-300 bg-olive-200'>
      <div className="flex gap-1">
        <p className='font-bold' style={{ fontFamily: "Orbitron" }}>NoteGrid</p>
        <p className='text-zinc-600'> - The tacticle card organizer.</p>
      </div>
      <p className='text-zinc-600 text-[15px]'>2026 NoteGrid. All rights reserved.</p>
    </div>
  )
}

export default Footer
