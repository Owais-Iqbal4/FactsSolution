import './Services.css'
import Slider from 'react-infinite-logo-slider'


import mapPic from '../../images/services_pic1.png'
import comp1 from '../../images/services_comp1.png'
import comp2 from '../../images/services_comp2.png'
import comp3 from '../../images/services_comp3.png'
import comp4 from '../../images/services_comp4.png'
import comp5 from '../../images/services_comp5.png'

function index() {


    return (
        <>
            <div className="mainContainer bg-[#1E1E1E] pb-[100px]">
                <div className='w-full pt-36' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h1 className='text-center text-[49px] font-bold mb-[50px]' data-aos="fade-up">Whom We Serve(d)? </h1>
                    <div className='p-5 w-[75%] map-div' data-aos="fade-up">
                        <h1 className='text-center text-[30px] p-3 font-semibold'>Our Geographical Footprints </h1>
                        <img src={mapPic} className='rounded-md w-full' />
                    </div>
                    {/* carousel */}
                    <div className='w-[75%] p-5 logo-slider-div'>

                        <Slider
                            width="250px"
                            duration={40}
                            pauseOnHover={true}
                            blurBorders={false}
                            blurBoderColor={'#fff'}
                        >
                            <Slider.Slide>
                                <div>
                                    <img src={comp1} alt="any" className='w-36 h-[100px] mb-[7px]' />

                                    <p className='bg-[grey] text-center'>Manufacturing</p>

                                </div>
                            </Slider.Slide>
                            <Slider.Slide>
                                <div>
                                    <img src={comp2} alt="any" className='w-36 h-[100px] mb-[7px]' />

                                    <p className='bg-[grey] text-center'>Retail Outlets</p>

                                </div>
                            </Slider.Slide>
                            <Slider.Slide>
                                <div>
                                    <img src={comp3} alt="any" className='w-36 h-[100px] mb-[7px]' />

                                    <p className='bg-[grey] text-center'>Investment Vehicles</p>

                                </div>                        </Slider.Slide>
                            <Slider.Slide>
                                <div>
                                    <img src={comp4} alt="any" className='w-36 h-[100px] mb-[7px]' />

                                    <p className='bg-[grey] text-center'>Tech Companies</p>

                                </div>                        </Slider.Slide>
                            <Slider.Slide>
                                <div>
                                    <img src={comp5} alt="any" className='w-36 h-[100px] mb-[7px]' />

                                    <p className='bg-[grey] text-center'>Warehousing</p>

                                </div>                        </Slider.Slide>

                        </Slider>
                    </div>

                    <div className='w-[75%] p-5 client-approach-div'>
                        <p className='text-justify' data-aos="fade-up">A solid accounting practice offers fundamental financial information for guiding business owners in their strategic decision making, which sets the foundation for a strong and healthy business model in a rapidly changing entrepreneurial eco-system. Though, it’s easy to see accounting as just an additional expense but there are numerous benefits a strong accounting practice can bring and actually help nurture your business. A few benefits of a good accounting function are numerated below:</p>
                        <br />
                        <br />
                        <ul >
                            <li className='service_list' data-aos="fade-up">Maintenance of Business Records.</li>
                            <li className='service_list' data-aos="fade-up">Strategic planning, budgeting and forecasting.</li>
                            <li className='service_list' data-aos="fade-up">Preparation of Financial Statements.</li>
                            <li className='service_list' data-aos="fade-up">Comparison of Financial and Operating results and its Monitoring.</li>
                            <li className='service_list' data-aos="fade-up">Decision Making such as Investments, Operational and Financial.</li>
                            <li className='service_list' data-aos="fade-up">Prevention & Detection of Frauds.</li>
                            <li className='service_list' data-aos="fade-up">Finances and Liquidity Management.</li>
                            <li className='service_list' data-aos="fade-up">Helps in Tax Matters.</li>
                            <li className='service_list' data-aos="fade-up">Feasibility studies & Company Valuation.</li>
                            <li className='service_list' data-aos="fade-up">Development & Review of Internal Controls.</li>
                        </ul>
                        <br />
                        <br />
                        <h1 className='text-[25px] font-semibold  mb-[10px]' data-aos="fade-up">Our Attention to the Client</h1>
                        <p className='text-[18px] leading-8  text-[#8f8f8f] ' data-aos="fade-up">
                            As we consider our Client a very important client to us, we will make sure your company receives all the attention you deserve from the professionals you require. We strongly believe that our cooperation will help to add value to the organization.</p>
                        <br />
                        <h1 className='text-[25px] font-semibold  mb-[10px]' data-aos="fade-up">Our Client Service Focus</h1>
                        <p className='text-[18px] leading-8 text-[#8f8f8f] ' data-aos="fade-up">
                            Our team understands that there is a significant range of assistance we can provide to our clients. We believe clear communication is the key in this; we involve our clients throughout the engagement period, conduct joint meetings, provide with regular updates and make sure that our fee arrangements are transparent.</p>
                        <br />
                        <h1 className='text-[25px] font-semibold  mb-[10px]' data-aos="fade-up">Our Philosophy</h1>
                        <p className='text-[18px] leading-8 text-[#8f8f8f] ' data-aos="fade-up">
                            We know that most companies place a high priority on the right people fit in their relationships with external service providers, as they work along your people on a daily basis. Shared company values are often the cornerstone to this. We believe that Our philosophy of a client- oriented approach, family culture, thought leadership and professionalism would helps us to create a professional, pleasant and constructive relationship with our client.</p>
                        <br />

                        <h1 className='text-[25px] font-semibold  mb-[10px]' data-aos="fade-up">Our fresh perspective, innovative ideas and added value</h1>
                        <p className='text-[18px] leading-8  text-[#8f8f8f] ' data-aos="fade-up">
                            We are client focused, with a hands-on approach by a team that take the time to understand your business, transactions, culture and processes. Our team bring a fresh approach and fresh insights.</p>
                        <br />
                        <p className='text-center' data-aos="fade-up">
                            <em>
                                " Our overall goal is to provide our clients with the highest possible level of service through experienced professionals in the most efficient and effective manner. "
                            </em>
                        </p>
                    </div>

                    {/* section 1 */}
                    <div className='section1 p-5 w-[75%] flex gap-16'>
                        <div className="basis-1/2 section1_imgUrl">
                            {/* <img className='h-auto' src="https://images.unsplash.com/photo-1553034545-32d4cd2168f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80" alt="" /> */}
                        </div>
                        <div className='section1_list basis-1/2'>
                            {/* <h1 className='mb-[18px] text-[30px] font-bold' data-aos="fade-up">Project Management
                            </h1> */}
                            <p className='mb-[18px] text-[18px] leading-8' data-aos="fade-up">
                                Bookkeeping Services    </p>
                            <ul >
                                <li className='service_list' data-aos="fade-up">Data Entry and General Ledger Maintenance.</li>
                                <li className='service_list' data-aos="fade-up">Accounting Reconciliations.</li>
                                <li className='service_list' data-aos="fade-up">Accounts payable (bills and payments).</li>
                                <li className='service_list' data-aos="fade-up">Accounts receivables management.</li>
                                <li className='service_list' data-aos="fade-up">Bank Reconciliations.</li>
                            </ul>

                            <p className='mb-[18px] text-[18px] leading-8' data-aos="fade-up">
                                Assurance Shared Services</p>
                            <ul >
                                <li className='service_list' data-aos="fade-up">Provision of Shared Assurance Team serving your portfolio of clients.</li>
                                <li className='service_list' data-aos="fade-up">Preparation of audit working papers in compliance with International Auditing Standards (ISA).</li>
                                <li className='service_list' data-aos="fade-up">Control evaluations and performance of substantive procedures.</li>

                            </ul>

                            <p className='mb-[18px] text-[18px] leading-8' data-aos="fade-up">
                                Management & Financial Reporting</p>
                            <ul >
                                <li className='service_list' data-aos="fade-up">Regulatory Reporting.</li>
                                <li className='service_list' data-aos="fade-up">Consolidated Financial statements.</li>
                                <li className='service_list' data-aos="fade-up">Periodic Management Reporting.</li>
                                <li className='service_list' data-aos="fade-up">Financial Statement Preparation & Analysis.</li>
                                <li className='service_list' data-aos="fade-up">Budgeting , forecasting and analysis.</li>

                            </ul>

                            <p className='mb-[18px] text-[18px] leading-8' data-aos="fade-up">

                                Accounting Advisory Services</p>
                            <ul >
                                <li className='service_list' data-aos="fade-up">Project Finance Advisory.</li>
                                <li className='service_list' data-aos="fade-up">Helping clients in every stage of the Acquisition, Disposal and Merger process.</li>
                                <li className='service_list' data-aos="fade-up">Establish Budgetary Control for clients as a system of coordinating costs.</li>
                                <li className='service_list' data-aos="fade-up">Providing	Solutions	on	complex	accounting transactions.</li>
                                <li className='service_list' data-aos="fade-up">Budgeting , forecasting and analysis.</li>

                            </ul>

                            <p className='mb-[18px] text-[18px] leading-8' data-aos="fade-up">

                                Payroll</p>
                            <ul >
                                <li className='service_list' data-aos="fade-up">Maintaining Employee Records.</li>
                                <li className='service_list' data-aos="fade-up">Calculation	of	monthly	payroll	& provisions.</li>
                                <li className='service_list' data-aos="fade-up">Maintaining Payroll Register.</li>
                            </ul>
                        </div>
                    </div>
                    {/* section 2 */}

                    <h1 className='bottom-heading w-[75%] p-5 text-[30px]' data-aos="fade-up">Let’s work together to build something great.
                    </h1>
                    <div className='bottom-heading w-[75%] px-5 pb-3 text-[30px]'>
                        <h1 className=' list border-b-[3px] cursor-pointer border-[white]'> Contact Us</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
export default index
