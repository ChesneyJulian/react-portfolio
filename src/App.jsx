import { Outlet } from 'react-router-dom';
import Header from './components/Header'
import './App.css'

function App() {

  return (
    <>
      <main className="text-white">
        <div className="relative isolate overflow-y-auto overflow-x-hidden bg-gray-800 py-4 h-screen grid grid-flow-row lg:grid-cols-12">
          <div
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-2xl"
            aria-hidden="true">
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#11f0e1] to-[#057d69] opacity-40"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            aria-hidden="true">
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#11f0e1]] to-[#057d69] opacity-20"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className='col-span-12 container mx-auto h-[25%] mb-12'>
            <Header />
          </div>
          <div className='container mx-auto col-span-12 row-span-6 min-h-full w-[85%] bg-gray-900 p-12 drop-shadow-3xl rounded'>
            <Outlet />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
