import React from 'react';
import './Projects.scss';
import { faFolder, faBookmark } from '@fortawesome/free-regular-svg-icons';
import ProjectCard from '../../../UI/ProjectCard/ProjectCard.tsx';
import LoanImage from '../../../../assets/images/loan/student-loan.png';
import PortfolioImage from '../../../../assets/images/portfolio/portfolio.png';
import PortfolioDesignImage from '../../../../assets/images/portfolio/portfolio-old.png';
import PortfolioDesignImage2 from '../../../../assets/images/portfolio/portfolio-old-2.png';
import SpecialNeedsImage from '../../../../assets/images/benefits/special-needs.png';
import SectionHeader from '../../../UI/SectionHeader.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Folder } from 'lucide-react';

export const projectsData = {
  portfolio: {
    title: 'Web Portfolio',
    description: 'This very site!',
    aboutText: [
      'This project started as a college assignment back in 2021. We needed to create a portfolio website to showcase our skills, interests, and professional resources.',
      'Even though this was years ago, I still like to keep this site updated so it accurately displays my skills and interests. I find it quite fun!',
    ],
    designText: [
      'Redesigning this portfolio is always a fun challenge. It allows me to express myself, my skills, and my interests in the way I see fit, while also making sure my designs are translatable to a front-end dev.',
      'After being a developer for multiple years, I feel like I have a strong understanding for what can realistically be done.',
      'The image above shows the first design that went live, and it was the first design I created in Figma.',
      'Looking back so many years later, I can truly see how much I have grown as a designer. While I think there are some solid design choices here (I’m still using this color palette!), there are some glaring issues with the user flow and content layout that have been ironed out in more recent iterations.',
      'Unfortunately, I do not have any screenshots of any designs before this point.',
      'In the second iteration, I decided to make the entire site one page and have some more fun with animations and other styles. Scrapping the card-based user interfaces, I was able to create a much more engaging and immersive page with clean animations and layout.',
      'The third is very similar to the previous one. Aside from some general UI cleanup, like fixing font sizes/weights, shrinking rounded edges, and cleaning up the header layout, I focused on fleshing out the projects section by giving them an image display and a link to a whole separate page (this one).',
      'I am excited for what challenges I will face on my next design; whenever that may be. In the meantime, please feel free to explore these designs more in depth from the Figma linked at the top of the page!',
    ],
    implementationText: [
      'This portfolio has been rebuilt multiple times from the ground up, each time with a different design and implementation approach. With each iteration, I focused on learning a new skill or technology.',
      'The first build, in 2020, was the first website I created and deployed. I put into practice the HTML, CSS, JS fundamentals that I learned in college.',
      'I also learned external skills, such as the process of buying a custom domain, hosting a website, and creating a custom email.',
      'The second build, in 2022, was one of the first steps I took into learning React. Shortly after my front-end web development internship in the summer of 2021, I wanted to expand my framework knowledge beyond Angular. So, I thought modernizing my portfolio into React would warrant a nice introductory challenge that would pay off in the long run.',
      'Lastly, this most recent build as of 2025 is still in the works, and being rewritten with more modern React practices and Tailwind as the main driver for styling.',
    ],
    image: PortfolioImage,
    designImages: [PortfolioDesignImage, PortfolioDesignImage2],
    githubLink: 'https://github.com/tjstumpy/web-portfolio',
    figmaLink:
      'https://www.figma.com/design/X6xpbjMBUA7gFmRTgwg4yF/Personal-Website?node-id=506-64&t=ViI8dDh2UHH7s5LQ-1',
    demoLink: 'https://timstumper.com',
  },
  loan: {
    title: 'Student Loan Calculator',
    description: 'See and plan how to pay off your loans.',
    image: LoanImage,
    githubLink: 'https://github.com/tjstumpy/student-loan-calculator',
    figmaLink:
      'https://www.figma.com/design/0000000000000000000000000000000000000000/0000000000000000000000000000000000000000',
    demoLink: 'https://tjstumpy.github.io/student-loan-calculator/',
  },
  specialNeeds: {
    title: 'Special Needs',
    description: 'Understand the benefits you\'re eligible for.',
    image: SpecialNeedsImage,
    githubLink: 'https://github.com/tjstumpy/special-needs-analysis',
    figmaLink:
      'https://www.figma.com/design/0000000000000000000000000000000000000000/0000000000000000000000000000000000000000',
    demoLink: 'https://tjstumpy.github.io/special-needs-analysis/',
  },
};

const Projects = () => {
  return (
    <div className="projects-wrapper">
      <SectionHeader
        icon={<Folder className="text-[3em] text-[var(--text-secondary)] mt-[0.5em] mr-[0.5em] mb-[0.5em] ml-0" />}
        title="Projects"
        navigation="projects"
      />
      <div className="project-bio" data-aos="fade-up">
        <p style={{ fontSize: '2em', textAlign: 'center', marginTop: '1em', marginBottom: '1em' }}>
          Some of my most relevant projects to date
        </p>
      </div>
      <div className="grid-container" data-aos="fade-up">
        {Object.entries(projectsData).map(([key, project], idx) => (
          <div key={idx} className={`grid-item grid-item-${idx + 1}`}>
            <ProjectCard
              image={project.image}
              title={project.title}
              summary={project.description}
              githubUrl={project.githubLink}
              projectPath={`/projects/${key}`}
            />
          </div>
        ))}
        <div className="grid-item grid-item-5">
          <div className="wip-container">
            <FontAwesomeIcon icon={faBookmark} className="wip-icon" />
            <span>New projects coming soon!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
