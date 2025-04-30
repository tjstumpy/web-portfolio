import React from 'react';

const SectionHeader = ({ icon, title, navigation }: { icon: React.ReactNode, title: string, navigation: string }) => {
  return (
    <div className="w-[80%]">
      <a href={`#${navigation}`} id={navigation}></a>
      <div className="flex items-center justify-center border-b border-text-primary" data-aos="fade-up">
        {icon}
        <h3 className="text-large text-text-primary w-full leading-[0.1em]">
          <a className="cursor-default bg-light-bg text-text-primary no-underline pr-2">{title}</a>
        </h3>
      </div>
    </div>
  );
};

export default SectionHeader;
