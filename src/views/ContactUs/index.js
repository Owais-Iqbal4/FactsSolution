import React from 'react'
import './contact.css'
import Phoneicon from '../../images/phone-call.png'
import Gmailicon from '../../images/mail.png'
import mapIcon from '../../images/pin.png'
import TextField from '@mui/material/TextField';

function index() {
    return (
        <div className='containerDiv'>
            <div className='mainContainer p-4 !pt-32' style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <div className='container1 mb-10'>
                    <p className='sub-title' data-aos="fade-up">Get in touch</p>
                    <h1 className='title' data-aos="fade-up">Let's Build the world better Together</h1>
                    <div className='contact_info flex gap-24 '>
                        <div className='info_details basis-1/3 p-2'>
                            <h1 className="text-[22px] font-semibold mb-4" data-aos="fade-up">Have a project or an idea you'd like to collaborate with Us? Let's get in touch!
                            </h1>
                            <div className='flex gap-5 mb-2' data-aos="fade-up">
                                <div>
                                    <img src={Phoneicon} alt="" />
                                </div>
                                <li className='list'> <p className=' cursor-pointer'>+971 (0)4 584 48930</p></li>
                            </div>
                            <div className='flex gap-5 mb-2' data-aos="fade-up">
                                <div>
                                    <img src={Gmailicon} alt="" />
                                </div>
                                <li className='list'> <p className=' cursor-pointer'>info@broadwhite.com</p></li>
                            </div>
                            <div className='flex gap-5 mb-2' data-aos="fade-up">
                                <div>
                                    <img src={mapIcon} alt="" />
                                </div>
                                <p className='w-[300px] text-justify pb-2 cursor-pointer text-[#8f8f8f]'>Broadwhite FZCO, Building A2, Unit 101, Dubai Silicon Oasis, DDP, International Freezone Authority Dubai, UAE</p>
                            </div>
                        </div>
                        {/* form */}
                        <div className='message_form p-3 w-full'>
                            <form action="https://formspree.io/f/xbjvrwva" method='POST'>
                                <div className='user-email-text flex gap-10 mb-10'>
                                    <TextField name='username' type='text' autoComplete='off' required className='w-full' id="standard-basic" label="Name" variant="standard" />
                                    <TextField name='Email' type='email' autoComplete='off' required className='w-full' id="standard-basic" label="Email" variant="standard" />
                                </div>
                                <TextField
                                    name='Message' autoComplete='off' required
                                    id="standard-multiline-static"
                                    className='w-full'
                                    label="Message"
                                    multiline
                                    rows={4}
                                    variant="standard"
                                />
                                <button type='submit' className='uppercase py-2 delay-400 ease-in hover:bg-[#fff] hover:text-[#8f8f8f] transition  px-4 border-[#8f8f8f] border-[1px] mt-5'>send message</button>
                            </form>
                        </div>
                    </div>
                </div>
                {/* map */}
                <div className='mapContainer w-[100%]'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14466.899204088439!2d67.0414705863207!3d24.975476084799883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb340efaea7a9e5%3A0xd0c1cab5d614d76e!2sSector%2011-B%20Sector%2011%20B%20North%20Karachi%20Twp%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1688297655316!5m2!1sen!2s" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default index
