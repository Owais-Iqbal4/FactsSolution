import { useEffect, useState } from 'react';
import Slider from 'react-infinite-logo-slider'
import './LogoSlider.css'

import comp1 from '../../images/services_comp1.png'
import comp2 from '../../images/services_comp2.png'
import comp3 from '../../images/services_comp3.png'
import comp4 from '../../images/services_comp4.png'
import comp5 from '../../images/services_comp5.png'

export default function LodoSlider() {
    
    return (
            
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
    );
}
