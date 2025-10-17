const header = {
  // all the properties are optional - can be left empty or deleted
  title: 'Juan Dev.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Juan Chavez',
  role: 'Front End Developer',

  description:
    'As a software engineering student my focus is on crafting captivating user experiences, driven by creativity. I specialize in creating simple yet impactful web pages with exceptional delivery, capable of conveying messages in a unique way.',
  resume: '/DevCV.pdf', // if no resume, the button will not show up
  social: {
    linkedin: 'https://www.linkedin.com/in/akavolkov',
    github: 'https://github.com/CopyVolkov',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Weather App',
    description:
      'A very simple weather app that shows the current weather and forecast for the city that´s inputed by the user using OpenWeather API',
    stack: ['Vanilla Javascript', 'Tailwind CSS', 'HTML'],
    sourceCode: 'https://github.com/CopyVolkov/CopyVolkov.github.io',
    livePreview: 'https://copy-volkov-github-io-27qf.vercel.app',
    image: 'proyect1.png',
  },
  {
    name: 'To do list App',
    description:
      'A simple to-do list app that allows users to add, edit, and delete tasks simulating a local ran API with JSON Server',
    stack: ['Tailwind CSS', 'Vanilla Javascript', 'React'],
    sourceCode: 'https://www.linkedin.com/feed/update/urn:li:activity:7329675986277445632/?originTrackingId=G3PJI%2FSEQpWoFRCOn47rcg%3D%3D',
    livePreview: '',
    image: 'proyect2.png',
  },
  {
    name: 'Rate it!',
    description:
      'A web game project that I\'m currently working on to improve my skills in Typescript, it-s a game based on the classic "Higher or Lower but this one uses game ratings instead of google searches.',
    stack: ['Tailwind CSS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/CopyVolkov/Rate.io',
    livePreview: '',
    image: 'project3.png',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Astro',
  'Tailwind CSS',
  'POSTMAN',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'blackfire748@mail.com',
}

export { header, about, projects, skills, contact }
