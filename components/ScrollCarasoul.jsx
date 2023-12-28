// 'use client'; // For Next JS 13 app router


import React, {useState,useEffect} from 'react';
import {data} from  "../data/mockData"
import ScrollCarousel from 'scroll-carousel-react';


const ScrollCarouselComponent = () => {
    
    return (
        <div
            className='flex item-center justify-center'
        >
            <ScrollCarousel
                autoplay={true}
                autoplaySpeed={5}
                speed={5}
            >
            {data.map((item) => (
                <div key={item}
                    className='p-2 md:p-2 rounded max-w-[150px] md:max-w-[400px] h-fit'
                >
                    <div className="">
                        <img className="max-w-full w-fit max-h-[160px] md:max-h-[400px] rounded-lg" src={item.photo}/>
                        
                    </div>
                    <div className="w-full mt-2">
                        <div className='h-full flex flex-row items-center justify-between mx-2'>
                            <div>
                                <div className='text-black'>Lorem ipsum dolor sit</div>
                                <div className='text-black'>Rs. 250</div>
                            </div>
                            <div>
                                ❤️
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </ScrollCarousel>
        </div>
    );
};

export default ScrollCarouselComponent;