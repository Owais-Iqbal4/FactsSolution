import './About.css'
import VBS_pic from '../../images/vbs_pic.png'
import Software_pic1 from '../../images/software_pic1.png'
import Software_pic2 from '../../images/software_pic2.png'
import Software_pic3 from '../../images/software_pic3.png'
import Software_pic4 from '../../images/software_pic4.png'

function About() {
    return (
        <>
            <div className='mainContainer bg-[#1E1E1E] pb-[50px] pt-[120px] w-full flex justify-center'>

                <div className='About_container w-[75%] p-5'>
                    <h1 className='text-[25px] font-semibold mb-[10px]' data-aos="fade-up">“VBS” – Workflow</h1>
                    <br />
                    <img src={VBS_pic} alt="" data-aos="zoom-in" />
                    <br /><br />
                    <h1 className='text-[25px] font-semibold mb-[10px]' data-aos="fade-up">Cloud-based Accounting Software</h1>
                    <br />
                    <p className='pb-3' data-aos="fade-up">Our professionals are experts in the leading cloud-based accounting softwares and ERP used by most of the Enterprises across the Globe:</p>
                    <div className=' w-full flex gap-[20px] software-div' >
                        <div className='flex gap-[10px] w-[50%]'>
                            <img src={Software_pic1} alt="" data-aos="flip-up" className='w-[50%]' />
                            <img src={Software_pic2} alt="" data-aos="flip-up" className='w-[50%]' />
                        </div>
                        <div className='flex gap-[10px] w-[50%]'>
                            <img src={Software_pic3} alt="" data-aos="flip-up" className='w-[50%]' />
                            <img src={Software_pic4} alt="" data-aos="flip-up" className='w-[50%]' />
                        </div>
                    </div>
                    <br /><br />
                    <h1 className='text-[25px] font-semibold mb-[10px]' data-aos="fade-up">Why Outsource?</h1>
                    <p><b>Currently, Many</b>  Firms outsource their financial reporting, accounting and bookkeeping functions <span className='text-[lightblue]'>primarily for cost saving</span> . But today, it is not only about cutting cost but also about reaping the benefits of strategic outsourcing such as accessing skilled expertise, reducing overhead, flexible staffing, increasing efficiency, reducing turnaround time and eventually generating more profit and competitive advantages.</p>
                    <br /><br />
                    <h1 className='text-[25px] font-semibold mb-[10px]' data-aos="fade-up">Why Outsource the Financial Reporting, Planning, Accounting and Payroll Services?</h1>

                    
                    <p className='mb-[18px] text-[18px] leading-8' data-aos="fade-up">
                    Faster & Improved Business Decisions</p>
                            <ul >
                                <li className='service_list' data-aos="fade-up">Working with finance and accounting professional results in reliable and relevant financial and accounting information available at your disposal, which lead to better and faster business decisions.</li>
                                
                            </ul>
                            <p className='mb-[18px] text-[18px] leading-8' data-aos="fade-up">
                            Cost Efficiencies    </p>
                            <ul >
                                <li className='service_list' data-aos="fade-up">Outsourcing will allow you to save time on hiring as well as hiring costs, office space, save employee related expenses like residency, insurance, salary etc.</li>
                            </ul>
                            <p className='mb-[18px] text-[18px] leading-8' data-aos="fade-up">
                            Specialist staff supporting the Business   </p>
                            <ul >
                                <li className='service_list' data-aos="fade-up">Outsourcing gives you a great way to have full time expert on your team on a “Pay As You Go” basis rather having to pay for it fixed employment value.</li>
                            </ul>
                            <p className='mb-[18px] text-[18px] leading-8' data-aos="fade-up">
                            Scalability Options </p>
                            <ul >
                                <li className='service_list' data-aos="fade-up">Outsourcing your financial reporting, planning, analysis, bookkeeping and payroll allows you to focus more on your business development rather than auxiliary services. It provides more time to focus on marketing and operational aspects of the business.</li>
                            </ul>
                            <p className='mb-[18px] text-[18px] leading-8' data-aos="fade-up">
                            Its All under One Roof </p>
                            <ul >
                                <li className='service_list' data-aos="fade-up">We provide a full- service package, which means we can assist you in routine accounting and bookkeeping requirements to complex reporting as well as assist you in during audit and other regulatory filing process. This provides both operational and cost synergies.</li>
                            </ul>

                    <br /><br />
                    <h1 className='text-[25px] font-bold  mb-[25px]' data-aos="fade-up" >Let’s work together to build something great.
                    </h1>
                    <h1 className='text-[32px] font-semibold list border-b-[3px] border-[white] cursor-pointer mb-[18px] '>Contact Us</h1>

                </div>
            </div>

        </>
    )
}

export default About
