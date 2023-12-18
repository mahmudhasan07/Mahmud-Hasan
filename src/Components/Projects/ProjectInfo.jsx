import { useState } from "react";
import { useParams } from "react-router-dom";
import project from '../../../public/projects.json';

const ProjectInfo = () => {
    const id = useParams()
    console.log(id);
    const array = project.find((element) => element.projectno == id.id)
    console.log(array);
    const [image, setimage] = useState(array.image1)
    return (
        <section>
            <h1 className="text-4xl text-center my-5">Project Info</h1>
            <hr className='w-1/3 mx-auto border mt-2' />
            <div className="lg:my-10 my-5 flex flex-wrap lg:mx-10">
                <div className="">
                    <img className=" lg:w-3/4 h-96" src={image} alt="" />
                    <div className="flex lg:w-3/4 gap-5 my-2 justify-center">
                        <img onClick={() => setimage(array.image1)} className="lg:w-32 w-16" src={array.image1} alt="" />
                        <img onClick={() => setimage(array.image2)} className="lg:w-32 w-16" src={array.image2} alt="" />
                        <img onClick={() => setimage(array.image3)} className="lg:w-32 w-16" src={array.image3} alt="" />
                        <img onClick={() => setimage(array.image4)} className="lg:w-32 w-16" src={array.image4} alt="" />
                    </div>
                </div>
                <div>
                    <h1 className=" text-3xl font-semibold">{array.name}</h1>
                    <h1 className="flex my-2 text-2xl">Technology Use : {
                        array?.technologyUse.map((element, idx) => <img className="w-7 mr-2" key={idx} src={element} ></img>)}</h1>
                    <h1>Live Link: <span>{array.live_link}</span></h1>
                    <h1>Github Client Link: <span>{array.client_github_link}</span></h1>
                    <h1>Github Server Link: <span>{array.sever_github_link}</span></h1>
                </div>
            </div>
            <hr className='w-11/12 mx-auto border mt-2' />
            <div className="lg:mx-10 lg:my-10 my-5">
                <h1 className="text-4xl font-bold mb-5">Features</h1>
                {
                    array?.features.map((element, idx) => <li className="text-lg" key={idx}>{element}</li>)
                }
            </div>
        </section>
    );
};

export default ProjectInfo;