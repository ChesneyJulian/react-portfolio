// create array of objects to store data for each project, including url, image path, name, and github link
const projectData = [
  {
    name: 'Maintenance Manatee',
    image: '/assets/images/maintenance-manatee.png',
    github: 'https://github.com/cdgonzo23/maintenance-manatee',
    url: 'https://maintenance-manatee-20230807-e071f072b462.herokuapp.com/',
  },
  {
    name: 'Night-In Generator',
    image: '/assets/images/night-in-generator.png',
    github: 'https://github.com/cdgonzo23/night-in-generator/',
    url: 'https://cdgonzo23.github.io/night-in-generator/',
  },
  {
    name: 'J.A.T.E.',
    image: '/assets/images/pwa-text-editor-screenshot.png',
    github: 'https://github.com/ChesneyJulian/PWA-text-editor',
    url: 'https://jate-pwa-2023-433da1eb4458.herokuapp.com/',
  },
  {
    name: 'Tech Blog',
    image: '/assets/images/tech-blog-screenshot.png',
    github: 'https://github.com/ChesneyJulian/tech-blog',
    url: 'https://mvc-tech-blog-2023-86b27f515ccd.herokuapp.com/',
  },
  {
    name: 'Note Taker App',
    image: '/assets/images/note-taker-screenshot.png',
    github: 'https://github.com/ChesneyJulian/note-taker-app',
    url: 'https://stormy-fortress-54603-8d3de02ba2d7.herokuapp.com/'
  },
  {
    name: 'Weather Dashboard',
    image: '/assets/images/weather-dashboard.png',
    github: 'https://github.com/ChesneyJulian/weather-dashboard/',
    url: 'https://chesneyjulian.github.io/weather-dashboard/',
  },

]

function Project() {
  return (
    <>
      {projectData.map((item) => (
        // for each item, return the following output to display project cards using the properties of each item
        <div key={item.name} className="container relative h-auto w-auto m-4">
          <img className="aspect-square object-cover object-top rounded z-10 h-64" src={item.image} alt={`image of ${item.name}`}></img>
          <div className="overlay opacity-0 hover:opacity-90 bg-gray-800 absolute top-0 h-64 w-full transition duration-300 ease-in-out">
              <div className="flex flex-col flex-wrap items-start justify-center h-64 w- tracking-tight px-2 pb-8 leading-7">
                <p className="text-xl font-semibold underline underline-offset-4 decoration-1">{item.name}</p>
                <a target="_blank" rel="noreferrer" href={item.github} className="text-[#11f0b5] hover:text-[#057d69]">GitHub Repository</a>
                <a target="_blank" rel="noreferrer" href={item.url} className="text-[#11f0b5] hover:text-[#057d69]">Deployed Application</a>
              </div>
          </div>
        </div>
        ))}
    </>
        )}
        

export default Project