import React from "react";
import Image from "next/image";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
const Testimonial = () => {
  const slideLeft = () => {
    var slider = document.getElementById("testimonial-slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  const slideRight = () => {
    var slider = document.getElementById("testimonial-slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  const testimonials = [
    {
      photo: "/assets/images/avator1.png",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, natus!",
      name: "Mr. Sakshaat",
      date: "14th October, 2023",
    }
    
    ,
    {
      photo: "/assets/images/avator1.png",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, natus!",
      name: "Mr. Sakshaat",
      date: "14th October, 2023",
    }
    ,{
      photo: "/assets/images/avator1.png",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, natus!",
      name: "Mr. Sakshaat",
      date: "14th October, 2023",
    }
    ,{
      photo: "/assets/images/avator1.png",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, natus!",
      name: "Mr. Sakshaat",
      date: "14th October, 2023",
    }
    ,{
      photo: "/assets/images/avator1.png",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, natus!",
      name: "Mr. Sakshaat",
      date: "14th October, 2023",
    }
    ,
    {
      photo: "/assets/images/avator1.png",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, natus!",
      name: "Mr. Sakshaat",
      date: "14th October, 2023",
    },
    {
      photo: "/assets/images/avator1.png",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, natus!",
      name: "Mr. Sakshaat",
      date: "14th October, 2023",
    },
    {
      photo: "/assets/images/avator1.png",
      description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, natus!",
      name: "Mr. Sakshaat",
      date: "14th October, 2023",
    },
    {
      photo: "/assets/images/avator1.png",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, natus!",
      name: "Mr. Sakshaat",
      date: "14th October, 2023",
    },
    {
      photo: "/assets/images/avator1.png",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, natus!",
      name: "Mr. Sakshaat",
      date: "14th October, 2023",
    },
  ];

  return (
    <section className="w-full p-3 mt-10 bg-primary rounded-tl-[60px] lg:rounded-tl-[245px] rounded-tr-[60px] lg:rounded-tr-[243px]">

      <div className="flex items-center justify-center">
        <h2 className="text-secondary">WHAT OUR CUSTOMERS SAY</h2>
      </div>
      <div className="relative flex items-center justify-center bg-[#FEF9EC] rounded-tl-[60px] lg:rounded-tl-[245px] rounded-tr-[60px] lg:rounded-tr-[243px] p-20 mt-10">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100 text-background"
          onClick={slideLeft}
          size={40}
        />
        <div
          id="testimonial-slider"
          className="w-full h-full overflow-x-scroll overflow-hidden scroll whitespace-nowrap scroll-smooth scrollbar-hide">
          <div className="flex gap-28">
            {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center lg:w-[600px]  h-[300px]  p-5">
            <Image
              src={testimonial.photo}
              width={200}
              height={200}
              alt={testimonial.name}
              className="rounded-full"
            />
            <p className="text-xl lg:text-2xl text-background">{testimonial.name}</p>
            <p className="text-lg lg:text-xl text-background">{testimonial.date}</p>
            <p className="text-base	 text-center text-opacity-60	text-background whitespace-normal">
              {testimonial.description}
            </p>
          </div>
          
            ))}
          </div>

        </div>

        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100 text-background"
          onClick={slideRight}
          size={40}
        />
      </div>
    </section>
  );
};

export default Testimonial;
