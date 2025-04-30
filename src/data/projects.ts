// src/data/projects.ts
import PortfolioImage from '../assets/images/portfolio/portfolio.png';
import PortfolioDesignImage from '../assets/images/portfolio/portfolio-old.png';
import PortfolioDesignImage2 from '../assets/images/portfolio/portfolio-old-2.png';
import LoanImage from '../assets/images/loan/student-loan.png';
import BenefitsImage from '../assets/images/benefits/special-needs.png';

export const projects = [
  {
    id: 'portfolio',
    title: 'Web Portfolio',
    description: 'This very site!',
    image: PortfolioImage,
    links: {
      github: 'https://github.com/tjstumpy/web-portfolio',
      figma: 'https://www.figma.com/design/X6xpbjMBUA7gFmRTgwg4yF/Personal-Website?node-id=506-64&t=ViI8dDh2UHH7s5LQ-1',
      demo: 'https://timstumper.com',
    },
    sections: {
      about: {
        content: [
          { type: 'text', value: 'This project started as a college assignment back in 2021. We needed to create a portfolio website to showcase our skills, interests, and professional resources.' },
          { type: 'text', value: 'Even though this was years ago, I still like to keep this site updated so it accurately displays my skills and interests. I find it quite fun!' },
        ],
      },
      design: {
        content: [
          { type: 'text', value: 'Redesigning this portfolio is always a fun challenge. It allows me to express myself, my skills, and my interests in the way I see fit, while also making sure my designs are translatable to a front-end dev.' },
          { type: 'text', value: 'After being a developer for multiple years, I feel like I have a strong understanding for what can realistically be done.' },
          { type: 'image', src: PortfolioDesignImage, alt: 'First portfolio design' },
          { type: 'text', value: 'The image above shows the first design that went live, and it was the first design I created in Figma.' },
          { type: 'text', value: 'Looking back so many years later, I can truly see how much I have grown as a designer. While I think there are some solid design choices here (I’m still using this color palette!), there are some glaring issues with the user flow and content layout that have been ironed out in more recent iterations.' },
          { type: 'text', value: 'Unfortunately, I do not have any screenshots of any designs before this point.' },
          { type: 'image', src: PortfolioDesignImage2, alt: 'Second portfolio design' },
          { type: 'text', value: 'In the second iteration, I decided to make the entire site one page and have some more fun with animations and other styles. Scrapping the card-based user interfaces, I was able to create a much more engaging and immersive page with clean animations and layout.' },
          { type: 'text', value: 'The third is very similar to the previous one. Aside from some general UI cleanup, like fixing font sizes/weights, shrinking rounded edges, and cleaning up the header layout, I focused on fleshing out the projects section by giving them an image display and a link to a whole separate page (this one).' },
          { type: 'text', value: 'I am excited for what challenges I will face on my next design; whenever that may be. In the meantime, please feel free to explore these designs more in depth from the Figma linked at the top of the page!' },
        ],
      },
      implementation: {
        content: [
          { type: 'text', value: 'This portfolio has been rebuilt multiple times from the ground up, each time with a different design and implementation approach. With each iteration, I focused on learning a new skill or technology.' },
          { type: 'text', value: 'The first build, in 2020, was the first website I created and deployed. I put into practice the HTML, CSS, JS fundamentals that I learned in college.' },
          { type: 'text', value: 'I also learned external skills, such as the process of buying a custom domain, hosting a website, and creating a custom email.' },
          { type: 'text', value: 'The second build, in 2022, was one of the first steps I took into learning React. Shortly after my front-end web development internship in the summer of 2021, I wanted to expand my framework knowledge beyond Angular. So, I thought modernizing my portfolio into React would warrant a nice introductory challenge that would pay off in the long run.' },
          { type: 'text', value: 'Lastly, this most recent build as of 2025 is still in the works, and being rewritten with more modern React practices and Tailwind as the main driver for styling.' }
        ],
      },
    },
  },
  {
    id: 'loan',
    title: 'Student Loan Calculator',
    description: 'See and plan how to pay off your loans.',
    image: LoanImage,
    links: {
      github: 'https://github.com/tjstumpy/student-loan-calculator',
      figma: '',
      demo: '',
    },
    sections: {
      about: {
        content: [],
      },
      design: {
        content: [],
      },
      implementation: {
        content: [],
      },
    },
  },
  {
    id: 'benefits',
    title: 'Benefits Analysis',
    description: 'Understand the benefits you\'re eligible for.',
    image: BenefitsImage,
    links: {
      github: 'https://github.com/tjstumpy/student-loan-calculator',
      figma: '',
      demo: '',
    },
    sections: {
      about: {
        content: [],
      },
      design: {
        content: [],
      },
      implementation: {
        content: [],
      },
    },
  }
];
