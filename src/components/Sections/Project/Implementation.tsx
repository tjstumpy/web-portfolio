import { Keyboard } from 'lucide-react';
import SectionHeader from '../../UI/SectionHeader.tsx';

const Implementation = ({ project }: { project: any }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <SectionHeader icon={<Keyboard className="text-text-secondary w-8 h-8 mt-2 mr-2 mb-2 ml-0"/>} title="Implementation" navigation="project" />
    </div>
  );
};

export default Implementation;
