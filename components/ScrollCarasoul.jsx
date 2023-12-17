// 'use client'; // For Next JS 13 app router


import React, {useState} from 'react';
import ScrollCarousel from 'scroll-carousel-react';


const ScrollCarouselComponent = () => {
    const [isHovered, setIsHovered] = useState(true);

    const handleMouseEnter = () => {
        setIsHovered(false);
      };
      const handleMouseLeave = () => {
        setIsHovered(true);
      };
    

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className='flex item-center justify-center'
        >
            <ScrollCarousel
                autoplay={false}
                autoplaySpeed={5}
                speed={5}
                onReady={() => console.log('I am ready')}
            >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
                <div key={item}
                    className='bg-blue-300/20 border-2 border-blue-300/70 rounded h-[400px] w-[300px]'
                >
                    <div className="w-full h-[85%] border-2 border-red-600">
                        
                    </div>
                    <div className="w-full mt-2 h-[13%] border-2 border-red-600">
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