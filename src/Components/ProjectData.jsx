import ErrorPage from "../Pages/ErrorPage";
const projectsData = [
    {
      title: 'Cloud Platform',
      description: 'Scalable cloud infrastructure management with real-time monitoring and automated scaling.',
      technologies: ['React', 'Node.js', 'AWS', 'Docker' , ' sql'],
      link: "",
      images:"https://picsum.photos/200/300"
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'ML-powered data visualization platform with predictive analytics and interactive reports.',
      technologies: ['Python', 'TensorFlow', 'D3.js', 'Flask'],
      link: "",
      images:"https://picsum.photos/200/300"
    },
    {
      title: 'E-Commerce Web App',
      description: 'Full-stack e-commerce with modern UI, secure payment integration, and customizable product inventory.',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      link: "",
      images:"https://picsum.photos/200/300"
    },
    {
      title: 'Real-Time Chat App',
      description: 'Scalable chat platform supporting real-time messaging, presence, and group chat features.',
      technologies: ['Socket.IO', 'Express', 'React', 'Redis'],
      link: {ErrorPage},
      images:"https://picsum.photos/200/300"
    },
  ];

  export default projectsData;