// src/data/projects.ts
import PortfolioImage from '../assets/images/portfolio/portfolio.png';
import PortfolioDesignImage from '../assets/images/portfolio/portfolio-old.png';
import PortfolioDesignImage2 from '../assets/images/portfolio/portfolio-old-2.png';
import LoanImage from '../assets/images/loan/student-loan.png';
import BenefitsImage from '../assets/images/benefits/special-needs.png';
import BenefitsDesignImage from '../assets/images/benefits/special-needs2.png';

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
          { type: 'text', value: 'Lastly, this most recent build as of 2025 was rewritten from the ground up with more modern React practices and Tailwind as the main driver for styling.' },
          { type: 'text', value: 'I had a really tough time converting this project to Tailwind, but the refactor was necessary, as my SCSS was getting pretty messy. In the end, it was absolutely worth it and I\'m glad I took the time to do it.' }
        ],
      },
    },
  },
  {
    id: 'benefits',
    title: 'Benefits Analysis',
    description: 'Understand the benefits you\'re eligible for.',
    image: BenefitsImage,
    links: {
      github: 'https://github.com/tjstumpy/special-needs-analysis',
      figma: '',
      demo: '',
    },
    sections: {
      about: {
        content: [
          { type: 'text', value: 'This was the second project I completed during my frontend web development internship in the summer of 2022. The team was twice as big this time, with a total of seven interns.' },
          { type: 'text', value: 'The goal of this project was to help the user understand the benefits they were eligible for, and how to apply for them.' },
          { type: 'text', value: 'I really enjoyed working on this project, as I felt like I was able to make a real impact on the user\'s life.' },
        ],
      },
      design: {
        content: [
          { type: 'text', value: 'This was much trickier to design than the first project, as it was multiple pages and I had to consider the user flow between them.' },
          { type: 'text', value: 'I\'m glad I was able to lead the design of this project once again, as it let me improve my skills leading a bigger team in a low stakes environment.' },
          { type: 'image', src: BenefitsDesignImage, alt: 'Example of the multiple page form design' },
          { type: 'text', value: 'This was the first time I had to develop a multi-page form, and it was a great learning experience. It was a great challenge to make sure the user flow was seamless and intuitive.' },
          { type: 'text', value: 'I ended up with the final design by putting myself in the shoes of the user and thinking about what would make my life easier.' },
          { type: 'text', value: 'Some quality of life features I added after thinking this way was an interactive progress bar that shows the user how much of the form is remaining, and they can click it to jump back and forth between sections.' },
          // { type: 'image', src: BenefitsDesignImage2, alt: 'Example of the dashboard page design' },
          { type: 'text', value: 'Once the form is completed, the dashboard page shows the user their eligibility and what benefits they are eligible for. Unfortunately, I do not have any screenshots of the dashboard page design before my internship ended, and I am unable to run it locally.' },
          { type: 'text', value: 'Looking back, there are many things I would do differently. First and most importantly, I would change the color palette to be more appealing and modern. We chose this color palette because it fit ADA compliance, but it really is not that appealing.' },

        ],
      },
      implementation: {
        content: [
          { type: 'text', value: 'I learned a lot about more advanced Angular concepts, like how to effectively use the router and how to manage state between different components and routes.' },
          { type: 'text', value: 'This was a much larger project than the student loan calculator, and we were given the same amount of time; which helped me improve my coding efficiency and overall time management skills.' },          
          { type: 'text', value: 'It was also great to get more experience with Bootstrap on a bigger project, where variables and concise styling is crucial.' },
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
        content: [
          { type: 'text', value: 'This was the first project I completed during my frontend web development internship in the summer of 2022. I worked alongside another intern to develop this frontend while the rest of the team completed the backend and business analysis.' },
          { type: 'text', value: 'The goal of this project was to provide a seamless experience for users to understand how they can best amortize their student loans as efficiently as possible.' },
        ],
      },
      design: {
        content: [
          { type: 'text', value: 'I used this opportunity of working on a small team to establish the lead position of the design side; as I wanted to push myself with a bigger responsibility to understand the full hand-off process in a business setting.' },
          { type: 'text', value: 'I knew going into this project I wanted the design to be as simple and intuitive as possible; so I focused on a simple color palette and a basic card-based layout.' },
          { type: 'text', value: 'Student loans can be complex and overwhelming, so I wanted the user to get their analysis with as little friction as possible. ' },
        ],
      },
      implementation: {
        content: [
          { type: 'text', value: 'The frontend of this project was built with Angular and Bootstrap While the backend used .NET Core.  ' },
          { type: 'text', value: 'This was my first time working with both of these frontend frameworks, and thankfully I was able to learn a lot from the tech lead on our team who guided us.' },
          { type: 'text', value: 'While he didn\'t help us implement any code, he gave us a solid foundation in the Angular framework - like how to think with components, prevent prop drilling, and how to best structure our code.' },
        ],
      },
    },
  }
];
