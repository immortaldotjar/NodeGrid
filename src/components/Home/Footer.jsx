import NavBar from '../NavBar'

const Footer = () => {
  return (
    <div className='flex justify-between p-9 mt-15 border-t border-gray-300'>
        <div className="flex gap-1">
        <p className='font-bold' style={{fontFamily : "Orbitron"}}>NoteGrid</p>
        <p className='text-gray-600'>-The tacticle card organizer.</p>
        </div>
        <p className='text-gray-600 text-[15px]'>2026 NoteGrid. All rights reserved.</p>
    </div>
  )
}

export default Footer
