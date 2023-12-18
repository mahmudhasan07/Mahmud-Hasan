import { NavLink, useNavigate } from 'react-router-dom';
import project from '../../../public/projects.json';
const Projects = () => {
    return (
        <section className="lg:my-20 my-5">
            <h1 className='text-4xl font-bold text-center'><span className=' text-lg border-4 pt-3 border-yellow-400 my-auto text-center align-middle mr-2'></span>Projects </h1>
            <hr className='w-1/3 mx-auto border mt-2' />
            <div className='flex flex-wrap justify-around lg:my-10 my-5'>
            {
                project.map((element, idx) => <Cards key={idx} card={element}></Cards>)
            }
            </div>
        </section>
    );
};

const Cards = ({ card }) => {
    const navigate = useNavigate()
    const handlebtn =()=>{
        navigate(`/project/${card.projectno}`)
    }
    return (
        <div className='lg:w-1/3 flex flex-col border-2 p-3 rounded-2xl border-yellow-400 shadow-xl backdrop-blur-sm'>
            <img className='w-96 mx-auto mb-2' src={card.image1} alt="" />
            <h1 className=' text-xl font-semibold'>Name: <span className='font-normal'>{card.name}</span></h1>
            <p className='text-xl font-semibold'>Note: <span className='font-normal'>{card.note}</span></p>
            <button onClick={handlebtn} className='btn w-full mt-auto bg-gradient-to-r from-black via-black text-lg text-white to-yellow-400'>Details</button>
        </div>
    )
}

export default Projects;