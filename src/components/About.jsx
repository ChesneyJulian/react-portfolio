// create function to return About section 
export default function About() {
  return (
    <>
      <div className='mb-8 flex flex-col items-start'>  
        <h3 className='text-3xl font-semibold'>About Me</h3>
        <img className='rounded-full w-28 aspect-square object-cover object-top mt-8' src="/assets/images/profile-img.jpeg" alt="headshot photo"></img>
      </div>
      <div>
        <p className="leading-7">I am a full stack web developer from Knoxville, TN. I am passionate about turning ideas into beautiful applications that not only look and feel great, but also offer advanced solutions to real world problems. I prioritize active learning and believe that web development offers endless opportunities for improvement. By practicing this mindset, I have been successfully crafting and maintaining my skills in responsive full stack web design. Lately, I have been gaining experience and knowledge while earning a Certificate in Full Stack Web Development through Vanderbilt University&apos;s Web Development Bootcamp.</p>
      </div>
    </>
  )
}
