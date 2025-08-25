const Contact = () => {
    return (
        <>
         <section id="contact" className="py-15 bg-dark-blue text-white text-center">
        <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-4xl font-semibold mb-12">Let's Work Together</h2>
            <div className="max-w-2xl mx-auto">
                <p className="text-xl mb-8 opacity-90 leading-relaxed">I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!</p>
                <div className="flex justify-center space-x-8 flex-wrap gap-4">
                    <div className="flex items-center space-x-2 text-lighter-gray">
                        <span><img src="/images/email.svg" alt="Email Icon" className="w-5 h-5" /></span>
                        <span>edeworchristabel@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-2 text-lighter-gray">
                        <span><img src="/images/Chat_new.svg" alt="Email Icon" className="w-5 h-5" /></span>
                        <span>+23408162670016</span>
                    </div>
                    <div className="flex items-center space-x-2 text-lighter-gray">
                        <span><img src="/images/github.svg" alt="Email Icon" className="w-7 h-7" /></span>
                        <a href ="https://github.com/Chrisinabit">https://github.com/Chrisinabit</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

        <footer className="bg-medium-blue text-white text-center py-8">
        <div className="max-w-6xl mx-auto px-8">
            <p>&copy; 2025 Oghenemine. All rights reserved.</p>
            <p>Built with passion</p>
        </div>
    </footer>
    </>
    )
}

export default Contact;