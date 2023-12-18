import image from '../../../public/images/IMG20230616001800.jpg'

const About = () => {
    return (
        <section>
            <h1 className='text-4xl font-bold text-center'><span className=' text-lg border-4 pt-3 border-yellow-400 my-auto text-center align-middle mr-2'></span>About Me </h1>
            <hr className='w-1/3 mx-auto border mt-2' />
            <div className='bg-transparent backdrop-blur-sm'>
            <div>
                <img className='w-96 rounded-xl' src={image} alt="" />
            </div>
            <div>
            </div>
            </div>
        </section>
    );
};

export default About;