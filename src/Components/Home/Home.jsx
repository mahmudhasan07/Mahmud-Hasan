import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <section>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <Skills></Skills>
            </div>
            <div>
                <Projects></Projects>
            </div>
            <div>
                <About></About>
            </div>
            <div>
                <Contact></Contact>
            </div>
        </section>
    );
};

export default Home;