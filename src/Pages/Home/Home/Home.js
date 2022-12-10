import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div className=' bg-slate-900 fontStyle'>
            <Banner />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;