import './App.css'
import image from './assets/images/image-qr-code.png'


function App() {
  

  return (
    <>
      
      <div className="flex items-center justify-center sm:py-36 py-16 bg-gray-200 w-full h-full">
        <div className="flex flex-row flex-wrap items-start justify-center bg-white bg-opacity-40 rounded-2xl pt-4" style={{width: '320px', height: '496px',}}>
            <img className="rounded-lg" src={image} style={{width: '288px', height: '288px'}}/>
            <p className='font-sans text-[21px] font-bold text-center  px-4'>Improve your front-end skills by building projects</p>
            <p className='font-sans text-md text-center px-4 text-gray-500 pb-4'>Scan the QR code to visit Frontend Mentor and take your coding skill to the next level</p>
        </div>
      </div>
      
    </>
  )
}

export default App
