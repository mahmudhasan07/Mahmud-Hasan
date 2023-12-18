import { NavLink } from "react-router-dom";
import logo from '../../../public/images/mhlogo.jpg'
import resume from '../../../public/Mahmudpdf.pdf'


const NavBar = () => {
    console.log(resume);
    return (
        <section className="flex flex-wrap justify-around bg-black py-7 border-b-2 border-yellow-400">
            <div className="flex">
                <img className=" w-8" src={logo} alt="" />
                <h1 className="text-3xl">Mahmud Hasan</h1>
            </div>
            <div >
                <ul className="flex flex-wrap gap-3 align-middle ">
                    <NavLink to={`/`}>
                        <li className="my-2">Home</li>
                    </NavLink>
                    <NavLink>
                        <li className="my-2">Skills</li>
                    </NavLink>
                    <NavLink>
                        <li className="my-2">Projects</li>
                    </NavLink>
                    <NavLink>
                        <li className="my-2">About Me</li>
                    </NavLink>
                </ul>
            </div>
            <div>
                <a href={resume} download={resume}><button className="btn bg-yellow-500 text-white">Resume</button></a>
            </div>
        </section>
    );
};

export default NavBar;