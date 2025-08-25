const Nav = () => {
  return (
    <>
    <nav className="fixed top-0 w-full bg-white bg-opacity-95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-8 flex justify-between items-center py-4">
        <div className="text-2xl font-bold text-medium-blue">Christabel.dev</div>
        <ul className="hidden md:flex space-x-8">
          <li><a href="#home" className="text-medium-blue font-medium hover:text-warm-orange transition-colors duration-300">Home</a></li>
          <li><a href="#about" className="text-medium-blue font-medium hover:text-warm-orange transition-colors duration-300">About</a></li>
          <li><a href="#skills" className="text-medium-blue font-medium hover:text-warm-orange transition-colors duration-300">Skills</a></li>
                <li><a href="#projects" className="text-medium-blue font-medium hover:text-warm-orange transition-colors duration-300">Projects</a></li>
                <li><a href="#contact" className="text-medium-blue font-medium hover:text-warm-orange transition-colors duration-300">Contact</a></li>
            </ul>
        </div>
    </nav>

     <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white text-center">
        <div className="max-w-6xl mx-auto px-8">
            <h1 className="text-5xl font-bold mb-4 text-dark-blue">Oghenemine Christabel Edewor</h1>
            <p className="text-xl mb-8 text-light-gray font-normal">Frontend Developer & UI/UX Enthusiast</p>
            <div className="flex justify-center space-x-4 flex-wrap gap-4">
                <a href="#projects" className="bg-warm-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-light-orange hover:-translate-y-0.5 transition-all duration-300">View My Work</a>
                <a href="#contact" className="bg-transparent text-medium-blue border-2 border-medium-blue px-8 py-3 rounded-lg font-semibold hover:bg-medium-blue hover:text-white transition-all duration-300">Get In Touch</a>
                <a href = "/resume.pdf" download="My_Resume.pdf" className="bg-warm-orange-100 text-medium-blue border-2 border-medium-blue px-8 py-3 rounded-lg font-semibold hover:bg-medium-blue hover:text-white transition-all duration-300">Download Resume</a>

            </div>
        </div>
    </section>
    </>
  );
};

export default Nav;
