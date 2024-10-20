import Banner from "@/_components/shared/About/Banner";
import FloatingCard from "@/_components/shared/About/FloatingCard";
import React from "react";
const PartnersDescription = [
    {
      para: "Shabuj Global Education (SGE) partners with various universities and institutions around the world to help students pursue higher education, particularly in the UK. Some of their notable partnerships include universities within the Russell Group, which comprises prestigious institutions known for research excellence in the UK. SGE facilitates admissions for undergraduate to doctoral programs, working with local and international students to secure placements in these universities."
    },
    {
      para: "Shabuj Global Education (SGE) offers various partnerships and programs to support international students. These include:"
    }
  ];

  const PartnersProgram = [
    {
      title: "Study Programs",
      description:
        "SGE collaborates with a broad range of universities globally, providing services that help students gain admission to undergraduate, graduate, and postgraduate programs. They assist with university selection, course enrollment, and even transfers between institutions."
    },
    {
      title: "Scholarships",
      description:
        "SGE runs scholarship programs to support financially disadvantaged students, ensuring they have access to the same educational opportunities as others. This initiative not only benefits the students but also contributes to the community by investing in education."
    },
    {
      title: "Collaboration Agreements",
      description:
        "SGE forms partnerships with academic institutions to facilitate seamless educational pathways for students, including academic collaborations, exchange programs, and joint research opportunities."
    }
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
      <FloatingCard services={PartnersProgram} style={'grid-cols-3'}/>
      <div className="pb-64"></div>

    </div>
  );
}
