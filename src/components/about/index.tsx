const About = () => {
  return (
        <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-4xl font-semibold text-center mb-12 text-dark-blue">About Me</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
                <div className="bg-white rounded-xl h-96 flex items-center justify-center text-light-gray text-lg">
                    <img src="/images/profile-pic.jpg" alt="Profile Picture" 
                    style={{objectFit: "cover", width: "80%", height: "100%" }} />
                </div>
                <div className="lg:col-span-2 space-y-6">
                    <p className="text-lg text-medium-blue leading-relaxed">
                        Hi there! I'm Oghenemine, a passionate frontend developer with 4+ years of experience creating beautiful, functional web applications. I love turning complex problems into simple, intuitive designs.
                    </p>
                    <p className="text-lg text-medium-blue leading-relaxed">
                        When I'm not coding, you'll find me exploring new technologies, or listening to music while sketching out new ideas.
                    </p>
                    <p className="text-lg text-medium-blue leading-relaxed">
                        I believe in writing clean, maintainable code and creating user experiences that truly matter. Let's build something amazing together!
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;
