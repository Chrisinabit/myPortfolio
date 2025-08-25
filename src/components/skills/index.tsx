const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-4xl font-semibold text-center mb-12 text-dark-blue">What I Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                <div className="bg-white p-8 rounded-xl text-center shadow-lg hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-15 h-15 bg-warm-orange rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                        JS
                    </div>
                    <h3 className="mb-4 text-dark-blue font-semibold text-xl">Frontend Development</h3>
                    <p className="text-light-gray leading-relaxed">Building responsive, interactive web applications using React, and modern JavaScript frameworks.</p>
                </div>
                <div className="bg-white p-8 rounded-xl text-center shadow-lg hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-15 h-15 bg-warm-orange rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                        UI
                    </div>
                    <h3 className="mb-4 text-dark-blue font-semibold text-xl">UI/UX Design</h3>
                    <p className="text-light-gray leading-relaxed">Creating user-centered designs with tools like Figma, focusing on accessibility and user experience.</p>
                </div>
                <div className="bg-white p-8 rounded-xl text-center shadow-lg hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-15 h-15 bg-warm-orange rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                        ⚡
                    </div>
                    <h3 className="mb-4 text-dark-blue font-semibold text-xl">Performance Optimization</h3>
                    <p className="text-light-gray leading-relaxed">Optimizing applications for speed, SEO, and better user engagement across all devices.</p>
                </div>
                <div className="bg-white p-8 rounded-xl text-center shadow-lg hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-15 h-15 bg-warm-orange rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                        API
                    </div>
                    <h3 className="mb-4 text-dark-blue font-semibold text-xl">API Integration</h3>
                    <p className="text-light-gray leading-relaxed">Building robust API integrations with RESTful, implementing secure authentication flows, and optimizing data fetching strategies for maximum performance and reliability.</p>
                </div>
            </div>
        </div>
    </section>

    );
};

export default Skills;
