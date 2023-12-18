import html from '../../../public/images/html.svg';
import css from '../../../public/images/css.svg';
import javaScript from '../../../public/images/java.svg';
import tailwind from '../../../public/images/meta.svg';
import react from '../../../public/images/react.svg';
import node from '../../../public/images/node.svg';
import metarial from '../../../public/images/Metarial.svg';
import express from '../../../public/images/express.svg';
import mongodb from '../../../public/images/mongo.svg';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Skills = () => {
    return (
        <section className='lg:my-20 my-5'>
            <h1 className='text-4xl font-bold text-center'><span className=' text-lg border-4 pt-3 border-yellow-400 my-auto text-center align-middle mr-2'></span>Skills </h1>
            <hr className='w-1/3 mx-auto border mt-2' />
            <div className='lg:my-10 my-5 mx-10'>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
                    spaceBetween={150}
                    slidesPerView={3}
                    // navigation={true}
                    autoplay={true}
                    loop={true} 
                    pagination={{ clickable: true ,}}
                    scrollbar={{ draggable: true, dragClass: "white" }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <div className="border-2 border-yellow-400 shadow-xl backdrop-blur-sm  shadow-yellow-400 w-80 h-44 p-2 rounded-xl">
                            <div className='flex my-1'>
                                <img src={`${html}`} alt="" />
                                <h1>Html</h1>
                            </div>
                            <div>
                                <h1>Level: <span>Advanced</span></h1>
                                <h1>Time-period: <span>2022-Present</span></h1>
                                <p>
                                    The foundation of web development, providing the structure for your web pages.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="border-2 border-yellow-400 shadow-xl shadow-yellow-400 backdrop-blur-sm w-80 h-44 p-2 rounded-xl">
                            <div className='flex my-1'>
                                <img src={`${css}`} alt="" />
                                <h1>Css</h1>
                            </div>
                            <div>
                                <h1>Level: <span>Advanced</span></h1>
                                <h1>Time-period: <span>2022-Present</span></h1>
                                <p>
                                    Used for styling HTML elements, making your web pages visually appealing.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="border-2 border-yellow-400 shadow-xl shadow-yellow-400 backdrop-blur-sm w-80 h-44 p-2 rounded-xl">
                            <div className='flex my-1'>
                                <img src={`${javaScript}`} alt="" />
                                <h1>JavaScript</h1>
                            </div>
                            <div>
                                <h1>Level: <span>Advanced</span></h1>
                                <h1>Time-period: <span>2022-Present</span></h1>
                                <p>
                                    A powerful scripting language that enables interactivity and dynamic content on web pages.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="border-2 border-yellow-400 shadow-xl shadow-yellow-400 backdrop-blur-sm w-80 h-44 p-2 rounded-xl">
                            <div className='flex my-1'>
                                <img src={`${tailwind}`} alt="" />
                                <h1>Tailwind Css</h1>
                            </div>
                            <div>
                                <h1>Level: <span>Advanced</span></h1>
                                <h1>Time-period: <span>2022-Present</span></h1>
                                <p>
                                    A utility-first CSS framework that provides a set of low-level utility classes to build custom designs more easily.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="border-2 border-yellow-400 shadow-xl shadow-yellow-400 backdrop-blur-sm w-80 h-44 p-2 rounded-xl">
                            <div className='flex my-1'>
                                <img src={`${react}`} alt="" />
                                <h1>React</h1>
                            </div>
                            <div>
                                <h1>Level: <span>Advanced</span></h1>
                                <h1>Time-period: <span>2023-Present</span></h1>
                                <p>
                                    A JavaScript library for building user interfaces, known for its component-based architecture. </p>                    </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="border-2 border-yellow-400 shadow-xl shadow-yellow-400 backdrop-blur-sm w-80 h-44 p-2 rounded-xl">
                            <div className='flex my-1'>
                                <img src={`${node}`} alt="" />
                                <h1>Node.js</h1>
                            </div>
                            <div>
                                <h1>Level: <span>Advanced</span></h1>
                                <h1>Time-period: <span>2023-Present</span></h1>
                                <p>
                                    A runtime environment that executes JavaScript code outside of a web browser, commonly used for server-side applications.</p>
                                    </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="border-2 border-yellow-400 shadow-xl shadow-yellow-400 backdrop-blur-sm w-80 h-44 p-2 rounded-xl">
                            <div className='flex my-1'>
                                <img src={`${metarial}`} alt="" />
                                <h1>Material UI</h1>
                            </div>
                            <div>
                                <h1>Level: <span>Intermediate</span></h1>
                                <h1>Time-period: <span>2023-Present</span></h1>
                                <p>
                                    A React UI framework that implements Google's Material Design, offering pre-built components for faster development.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="border-2 border-yellow-400 shadow-xl shadow-yellow-400 backdrop-blur-sm w-80 h-44 p-2 rounded-xl">
                            <div className='flex my-1'>
                                <img src={`${express}`} alt="" />
                                <h1>Express Js</h1>
                            </div>
                            <div>
                                <h1>Level: <span>Intermediate</span></h1>
                                <h1>Time-period: <span>2022-Present</span></h1>
                                <p>
                                    A web application framework for Node.js, used for building APIs and handling HTTP requests.</p></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="border-2 border-yellow-400 shadow-xl shadow-yellow-400 backdrop-blur-sm w-80 h-44 p-2 rounded-xl">
                            <div className='flex my-1'>
                                <img src={`${mongodb}`} alt="" />
                                <h1>MongoDB</h1>
                            </div>
                            <div>
                                <h1>Level: <span>Intermediate</span></h1>
                                <h1>Time-period: <span>2023-Present</span></h1>
                                <p>
                                    A NoSQL database used for storing and retrieving data in JSON-like documents.</p>                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </section>
    );
};

export default Skills;