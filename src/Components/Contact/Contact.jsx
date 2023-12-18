import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_k66xk9s', 'template_kvkgfri', form.current, 'hBm6FCmTz2fLTfKOC')
            .then((result) => {
                console.log(result.text);
                toast.success('Successfully Message Sent to Mahmud Hasan', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <section className="p-2 lg:my-10 my-5">
            <h1 className='text-4xl font-bold text-center'><span className=' text-lg border-4 pt-3 border-yellow-400 my-auto text-center align-middle mr-2'></span>Contact US</h1>
            <hr className='w-1/3 mx-auto border mt-2' />
            <div className="flex flex-wrap justify-around lg:my-10 my-5 backdrop-blur-sm p-5 rounded-xl">
                <div className=" my-auto p-3">
                    <h1 className="text-lg">Full Name: <span>Mahmud Hasan Siddique</span></h1>
                    <h1 className="text-lg">Email: <span>mahmudhasan.hb@gmail.com</span></h1>
                    <h1 className="text-lg">WhatsApp Number: <span>01625598782</span></h1>
                    <h1 className="text-lg">Linked-In: <span>https://www.linkedin.com/in/mahmud-hasan-8873b221a</span></h1>
                    <h1 className="text-lg">GitHub: <span>https://github.com/mahmudhasan07</span></h1>

                </div>
                <p className="border-2"></p>
                <div>
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name: </label>
                        <input className="my-5 text-black p-1" type="text" name="user_name" /> <br />
                        <label>Email: </label>
                        <input className="my-5 text-black p-1" type="email" name="user_email" /> <br />
                        <label className="">Message: </label> <br />
                        <textarea className="text-black w-56 p-1 h-20" name="message" /> <br />
                        <input type="submit" className="btn btn-sm" value="Send" />
                    </form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </section>
    );
};

export default Contact;