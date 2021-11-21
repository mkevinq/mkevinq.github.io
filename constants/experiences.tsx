export type Experience = {
  title: string;
  role: string;
  date: string;
  description: string;
  points: JSX.Element[];
  link: string;
  image: string;
};

const experience: Experience[] = [
  {
    title: 'Bonsai',
    role: 'Back-end Developer',
    date: 'May 2021 - December 2021 (8 months)',
    description:
      'Bonsai is an E2E e-commerce platform for publishers. I worked on the integrations team, building microservices to communicate with third party e-commerce platforms, including Shopify and Magento.',
    points: [
      <>
        Constructed a whole new pipeline using <span className="text-blue-400">RabbitMQ</span> to
        speed up inventory updates by <strong>600%</strong>
      </>,
      <>
        Migrated to a new product categorization system to{' '}
        <span className="text-blue-400">improve SEO</span>, making <strong>millions</strong> of
        products more searchable for publishers
      </>,
      <>
        Maintained microservices written in <span className="text-blue-400">TypeScript</span>,
        fixing critical bugs, and increasing satisfaction for <strong>thousands</strong> of
        merchants and publishers
      </>,
    ],
    link: 'https://www.shopbonsai.ca/',
    image: '/imgs/bonsai.webp',
  },
  {
    title: 'Firefly AR',
    role: 'Full-stack Developer',
    date: 'May 2020 - September 2020 (4 months)',
    description:
      'Firefly is an interactive augmented reality experience. I worked as a full-stack developer, creating a 3D mobile app and game server from scratch.',
    points: [
      <>
        Implemented touch-based 3D object manipulation and{' '}
        <span className="text-blue-400">OAuth2.0 user authentication with IdentityServer4</span>,
        allowing for an interactive user experience
      </>,
      <>
        Built a game server using the{' '}
        <span className="text-blue-400">ASP.NET framework, along with SignalR</span>, enabling
        <strong> real-time communication</strong> between the server and client
      </>,
    ],
    link: 'https://www.shopbonsai.ca/',
    image: '/imgs/firefly2.png',
  },
];

export default experience;
