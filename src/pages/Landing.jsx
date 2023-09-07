import Header from '../components/Header'

export default function Landing() {
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-6'>
        <Header />
      </div>
      <div className='col-span-6'>
        <p className='p-16'>
          welcome to my website
        </p>
      </div>
    </div>
  )
}