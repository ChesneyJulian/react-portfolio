const projectData = [
  {
    name: 'Maintenance Manatee',
    image: '/images/maintenance-manatee.png',
    github: 'https://github.com/cdgonzo23/maintenance-manatee',
    url: 'https://maintenance-manatee-20230807-e071f072b462.herokuapp.com/',
  },
  {
    name: 'Night-In Generator',
    image: '/images/night-in-generator.png',
    github: 'https://github.com/cdgonzo23/night-in-generator/',
    url: 'https://cdgonzo23.github.io/night-in-generator/',
  },
  {
    name: 'Tech Blog',
    image: '/images/tech-blog-screenshot.png',
    github: 'https://github.com/ChesneyJulian/tech-blog',
    url: 'https://mvc-tech-blog-2023-86b27f515ccd.herokuapp.com/',
  },
  {
    name: 'J.A.T.E.',
    image: '/images/pwa-text-editor-screenshot.png',
    github: 'https://github.com/ChesneyJulian/PWA-text-editor',
    url: 'https://jate-pwa-2023-433da1eb4458.herokuapp.com/',
  },
  {
    name: 'Note Taker App',
    image: '/images/note-taker-screenshot.png',
    github: 'https://github.com/ChesneyJulian/note-taker-app',
    url: 'https://stormy-fortress-54603-8d3de02ba2d7.herokuapp.com/'
  },
  {
    name: 'Weather Dashboard',
    image: '/images/weather-dashboard.png',
    github: 'https://github.com/ChesneyJulian/weather-dashboard/',
    url: 'https://chesneyjulian.github.io/weather-dashboard/',
  },

]

function Project() {
  return (
    <>
      {projectData.map((item) => (
        <div key={item.name} className="container relative h-auto w-auto m-4">
            <img className="aspect-square object-cover object-top rounded z-10" src={item.image}></img>
            <div className="overlay opacity-0 hover:opacity-90 bg-gray-800 absolute top-0 h-full w-full transition duration-300 ease-in-out">
                <div className="flex flex-col items-start justify-end h-full w-full tracking-tight px-2 pb-8">
                  <p className="text-xl font-semibold underline underline-offset-4 decoration-1">{item.name}</p>
                  <a target="_blank" rel="noreferrer" href={item.github} className="text-[#11f0b5]">GitHub Repository</a>
                  <a target="_blank" rel="noreferrer" href={item.url} className="text-[#11f0b5]">Deployed Application</a>
                </div>
            </div>
        </div>
        ))}
    </>
        )}
        

export default Project