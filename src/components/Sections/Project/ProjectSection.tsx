import SectionHeader from '../../UI/SectionHeader.tsx';

const ProjectSection = ({ content, icon, title }: { content: any[], icon: any, title: string }) => {
  return (
    <div className="w-full flex flex-col items-center pt-16">
      <SectionHeader icon={icon} title={title} navigation={title} />
      <div className="flex flex-col items-center max-w-[80%] md:max-w-3xl w-full space-y-4 mt-8 mb-8 ">
        {content.map((block, idx) =>
          block.type === 'text' ? (
            <p key={idx} className="text-small font-light text-justify leading-relaxed ">{block.value}</p>
          ) : block.type === 'image' ? (
            <img key={idx} src={block.src} alt={block.alt || ''} className="rounded shadow-md md:w-2/3" />
          ) : null
        )}
      </div>
    </div>
  );
};

export default ProjectSection;
