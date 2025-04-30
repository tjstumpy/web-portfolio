const Footer = () => {
  return (
    <div className="text-center w-full mb-20">
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
        className="text-small text-text-secondary font-light duration-300 hover:text-text-primary cursor-pointer"
      >
        Back to Top
      </button>
    </div>
  );
};

export default Footer;