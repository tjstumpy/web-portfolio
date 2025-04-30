import { BookText } from 'lucide-react';
import SectionHeader from '../../UI/SectionHeader.tsx';

const About = ({ project }: { project: any }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <SectionHeader icon={<BookText className="text-text-secondary w-8 h-8 mt-2 mr-2 mb-2 ml-0"/>} title="About" navigation="project" />
    </div>
  );
};

export default About;
