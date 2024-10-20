import Banner from "@/_components/shared/About/Banner";
import FloatingCard from "@/_components/shared/About/FloatingCard";
import ParaGraph from "@/_components/shared/About/ParaGraph";
import Image from "next/image";
import React from "react";
const PartnersDescription = [
  {
    para: "Shabuj Global Education (SGE) partners with various universities and institutions around the world to help students pursue higher education, particularly in the UK. Some of their notable partnerships include universities within the Russell Group, which comprises prestigious institutions known for research excellence in the UK. SGE facilitates admissions for undergraduate to doctoral programs, working with local and international students to secure placements in these universities.",
  },
  {
    para: "Shabuj Global Education (SGE) offers various partnerships and programs to support international students. These include:",
  },
];

const PartnersProgram = [
  {
    title: "Study Programs",
    description:
      "SGE collaborates with a broad range of universities globally, providing services that help students gain admission to undergraduate, graduate, and postgraduate programs. They assist with university selection, course enrollment, and even transfers between institutions.",
  },
  {
    title: "Scholarships",
    description:
      "SGE runs scholarship programs to support financially disadvantaged students, ensuring they have access to the same educational opportunities as others. This initiative not only benefits the students but also contributes to the community by investing in education.",
  },
  {
    title: "Collaboration Agreements",
    description:
      "SGE forms partnerships with academic institutions to facilitate seamless educational pathways for students, including academic collaborations, exchange programs, and joint research opportunities.",
  },
];

const JoinDescription = [
  {
    para: "Become a channel partner with Shabuj Global Education and help students achieve their academic dreams. We provide training and support to empower you in guiding students through their higher education journey. Join us and make a difference in the lives of aspiring learners!",
  },
];

export default function page() {
  return (
    <div>
      {/* header */}
      <Banner
        title={"Know More About Our Partners"}
        description={PartnersDescription}
        style={"text-white"}
      />
      {/* parts & program */}
      <FloatingCard services={PartnersProgram} style={"grid-cols-3"} />
      {/* channel partner */}
      <div className=" container px- mx-auto py-14">
      <div className="grid grid-cols-2 gap-10 items-center justify-between mb-14">
            <div><h2 className="poppins-semibold text-[28px] text-[#00399F] mb-2 leading-[39.2px]">
              Join Our Team of Dedicated Channel Partner at SGE
            </h2>
            <ParaGraph
              description={JoinDescription}
              style={"text-gray-700 max-w-lg"}
            /></div>
             <Image
              width={100}
              height={100}
              className="w-full h-full rounded-2xl"
              src="https://cdn.dribbble.com/userupload/15670016/file/original-b55c1f7f77f25d94e59c8f9ff1f7a75c.png?resize=400x0https://www.google.com/url?sa=i&url=https%3A%2F%2Fdribbble.com%2Ftags%2Fregister-page&psig=AOvVaw3AkThoi6cbOiVRfZZNJ3zC&ust=1729503745159000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPC3gdnVnIkDFQAAAAAdAAAAABAJ"
              alt=""
            />
          </div>
      </div>
      <div className="pb-64"></div>
    </div>
  );
}
