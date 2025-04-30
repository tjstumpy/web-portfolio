import { Pencil } from 'lucide-react';
import SectionHeader from '../../UI/SectionHeader.tsx';

const Design = ({ project }: { project: any }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <SectionHeader icon={<Pencil className="text-text-secondary w-8 h-8 mt-2 mr-2 mb-2 ml-0"/>} title="Design" navigation="project" />
    </div>
  );
};

export default Design;
