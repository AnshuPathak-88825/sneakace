import React from "react";
import Image from "next/image";
const Testimonial = () => {
  const testimonials = [
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
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <h3 className="text-secondary">WHAT OUR CUSTOMERS SAYS</h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={testimonial.photo}
                width={200}
                height={200}
                alt={testimonial.name}
                className="rounded-full"
              />
              <p className="text-xl lg:text-2xl text-background ">
                {testimonial.name}
              </p>
              <p className="text-xl lg:text-2xl text-background ">
                {testimonial.date}
              </p>
              <p className="text-lg text-center text-background lg:w-[300px]">
                {testimonial.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
