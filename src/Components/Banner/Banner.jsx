import banner from '../../../public/images/Normal-Banner.jpg'
import selfimage from '../../../public/images/IMG_20231205_02182322-removebg.png'
import './Banner.css'

const Banner = () => {
    return (
        <section className=' my-10'>
            <div className='w-full lg:h-[650px] h-fit p-3' style={{ backgroundImage: `url(${banner})`, backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                <div className='flex flex-wrap gap-5 justify-around'>
                    <div className='lg:text-4xl text-3xl my-auto'>
                        <h1>Hello..</h1>
                        <p>I am <br />
                        </p>
                        <p className='mahmud font-bold'>Mahmud Hasan </p>
                        <span>&</span>
                        <h1>I am a </h1>
                        <div className='text-wrap m-0 lg:h-12 h-8'>
                            <div className='text font-bold'>
                                <span className=''>MERN Stack Developer</span>
                                <span className='lg:mb-2'>Front-End Developer</span>
                                <span className=''>React Developer</span>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <img className='lg:w-80 w-64 lg:-mt-3 lg:ml-14' src={`${selfimage}`} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;