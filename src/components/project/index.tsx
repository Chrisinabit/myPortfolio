const Project =()=> {
    return (
         <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-4xl font-semibold text-center mb-12 text-dark-blue">Featured Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                <div className="bg-gray-50 rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                    <div className="h-48 bg-lighter-gray flex items-center justify-center text-light-gray text-lg">
                        <img src="/images/ecommerce-screenshot.png" alt="E-Commerce Platform Screenshot" 
                        style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                    </div>
                    <div className="p-8">
                        <h3 className="mb-4 text-dark-blue font-semibold text-xl">Footwears E-Commerce Platform</h3>
                        <p className="text-light-gray mb-6 leading-relaxed">A full-featured online store with shopping cart, and payment integration. Built with React and Node.js.</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="bg-warm-orange text-white px-3 py-1 rounded-full text-sm font-medium">React</span>
                            <span className="bg-warm-orange text-white px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
                            <span className="bg-warm-orange text-white px-3 py-1 rounded-full text-sm font-medium">CSS</span>
                        </div>
                        <div className="flex space-x-4">
                            <a href="https://kickshub234.netlify.app/" className="text-warm-orange font-medium hover:text-light-orange transition-colors duration-300">Live Demo</a>
                            <a href="https://github.com/Chrisinabit/KicksHub.git" className="text-warm-orange font-medium hover:text-light-orange transition-colors duration-300">GitHub</a>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                    <div className="h-48 bg-lighter-gray flex items-center justify-center text-light-gray text-lg">
                        <img src="/images/movie-screenshot.png" alt="Weather Dashboard Screenshot"
                        style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                    </div>
                    <div className="p-8">
                        <h3 className="mb-4 text-dark-blue font-semibold text-xl">Movie Search App</h3>
                        <p className="text-light-gray mb-6 leading-relaxed">Movie discovery application with intelligent search capabilities, personalized recommendations, 
                            and comprehensive film details powered by modern React architecture..</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="bg-warm-orange text-white px-3 py-1 rounded-full text-sm font-medium">React</span>
                            <span className="bg-warm-orange text-white px-3 py-1 rounded-full text-sm font-medium">API Int.</span>
                            <span className="bg-warm-orange text-white px-3 py-1 rounded-full text-sm font-medium">TypeScript</span>
                        </div>
                        <div className="flex space-x-4">
                            <a href="https://favmoviesearch123.netlify.app/" className="text-warm-orange font-medium hover:text-light-orange transition-colors duration-300">Live Demo</a>
                            <a href="https://github.com/Chrisinabit/Movie-Search-App.git" className="text-warm-orange font-medium hover:text-light-orange transition-colors duration-300">GitHub</a>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 lg:col-span-2 xl:col-span-1">
                    <div className="h-48 bg-lighter-gray flex items-center justify-center text-light-gray text-lg">
                         <img src="/images/menu-screenshot.png" alt="Weather Dashboard Screenshot" 
                         style={{ objectFit: "cover", width: "100%", height: "100%" }}/>
                    </div>
                    <div className="p-8">
                        <h3 className="mb-4 text-dark-blue font-semibold text-xl">Menu App</h3>
                        <p className="text-light-gray mb-6 leading-relaxed">Interactive restaurant menu application with category navigation, customizable order options, and real-time cart management.</p>
                        <br />
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="bg-warm-orange text-white px-3 py-1 rounded-full text-sm font-medium">React</span>
                            <span className="bg-warm-orange text-white px-3 py-1 rounded-full text-sm font-medium">CSS</span>
                            <span className="bg-warm-orange text-white px-3 py-1 rounded-full text-sm font-medium">PostgreSQL</span>
                        </div>
                        <div className="flex space-x-4">
                            <a href="https://whimsical-fox-c0797f.netlify.app/" className="text-warm-orange font-medium hover:text-light-orange transition-colors duration-300">Live Demo</a>
                            <a href="#" className="text-warm-orange font-medium hover:text-light-orange transition-colors duration-300">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Project;