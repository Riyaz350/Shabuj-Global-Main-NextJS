import Banner from "@/_components/shared/About/Banner";
import FloatingCard from "@/_components/shared/About/FloatingCard";
import HoverCard from "@/_components/shared/About/HoverCard";
import ParaGraph from "@/_components/shared/About/ParaGraph";
import IconCard from "@/_components/shared/About/IconCard";
import Image from "next/image";
import React from "react";
import { CiDiscount1 } from "react-icons/ci";
import {
  PiChalkboardTeacherThin,
  PiGlobeHemisphereEastThin,
  PiGraduationCapThin,
  PiPathThin,
  PiTrophy,
  PiUser,
} from "react-icons/pi";
import { TfiSupport } from "react-icons/tfi";
import { FaRegHandshake } from "react-icons/fa6";
import { GiBullseye } from "react-icons/gi";
import TimelineLayout from "@/_components/AboutUs/Who_we_are/TimelineLayout";
import { SiOpenjsfoundation } from "react-icons/si";
import { LiaUniversitySolid } from "react-icons/lia";
import { TbTransfer } from "react-icons/tb";

export default function page() {
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
  const HowDescription = [
    {
      para: "Channel partners are vital to Shabuj Global Education’s success. They connect with students, offer personalized guidance, and foster relationships with universities. Their local expertise enhances our services and expands our reach, helping students achieve their educational goals. Together, we make a lasting impact in the global education landscape.",
    },
  ];
  const CommittedDescription = [
    {
      para: "Become a part of Shabuj Global Education and contribute to our mission of empowering students. We are looking for dedicated professionals who are passionate about education and eager to make a difference. At SGE, you'll find a supportive environment that encourages growth, collaboration, and innovation. Join us and help shape the future of aspiring learners around the world!",
    },
  ];

  const benefits = [
    {
      title: "Discounted Tuition Fees",
      description:
        "SGE collaborates with several universities to offer scholarships and tuition fee discounts, making education more affordable for international students. This is especially helpful for students looking to study in the UK, where tuition costs can be high.",
      icon: <CiDiscount1 className="text-5xl text-[#00399F] font-thin" />,
    },
    {
      title: "Pathway Programs",
      description:
        "SGE provides access to pathway programs that help students who may not meet the direct entry requirements for certain degree programs. These pathway courses enable students to improve their qualifications and transition smoothly into full degree programs.",
      icon: <PiPathThin className="text-5xl text-[#00399F] font-thin" />,
    },
    {
      title: "Comprehensive Support",
      description:
        "SGE offers free career counselling, visa application assistance, and help with admission processing. This guidance covers the entire application process, from choosing the right university and course to finalising applications, making it easier for students to navigate their study abroad journey.",
      icon: <TfiSupport className="text-4xl text-[#00399F] font-thin" />,
    },
  ];
  const overview = [
    {
      title: "Mission Statement",
      description:
        "Shabuj Global Education is dedicated to providing world-class educational opportunities, empowering individuals to achieve their academic and professional goals through innovative learning solutions.",
      icon: <GiBullseye className="text-3xl text-[#00399F] font-thin" />,
    },
    {
      title: "Programs Offered",
      description:
        "Our Master’s in Business Administration (MBA) program equips students with cutting-edge management skills, focusing on leadership, global business trends, and strategic thinking. Key features include: ",
      features: [
        "Interactive online courses",
        "Global networking opportunities",
        "Industry-relevant case studies",
      ],
      icon: (
        <PiGraduationCapThin className="text-3xl text-[#00399F] font-thin" />
      ),
    },
    {
      title: "Learning Approach",
      description:
        "Shabuj Global Education adopts a flexible, learner-centred approach, utilising digital platforms and interactive resources to ensure a personalised learning experience. We support our students with expert faculty, real-world projects, and collaborative learning.",
      icon: (
        <PiChalkboardTeacherThin className="text-3xl text-[#00399F] font-thin" />
      ),
    },
    {
      title: "Global Reach",
      description:
        "With a global footprint spanning over 50 countries, Shabuj Global Education partners with leading institutions worldwide to offer accredited, globally recognized programs. Our alumni network continues to expand, empowering individuals across continents.",
      icon: (
        <PiGlobeHemisphereEastThin className="text-3xl text-[#00399F] font-thin" />
      ),
    },
    {
      title: "Student Support",
      description:
        "Our dedicated support team is here to assist you throughout your educational journey. From academic advising to career counselling, Shabuj Global Education ensures that every student receives personalised guidance to achieve their goals.",
      icon: <FaRegHandshake className="text-3xl text-[#00399F] font-thin" />,
    },
  ];

  const OrganizationHistory = [
    {
      para: "Shabuj Global Education (SGE) was established in 2010 as an education consultancy, primarily focused on facilitating university admissions in the UK for both local and international students. Over the years, it has grown into a prominent player in the education services sector, assisting students from South Asia and beyond to secure admissions in prestigious institutions worldwide.",
    },
    {
      para: "Key milestones in the organisation's history include:",
    },
  ];

  const milestones = [
    {
      title: "2010",
      description:
        " Foundation of Shabuj Global Education, with a focus on UK university admissions.",
      icon: <SiOpenjsfoundation className="h-5 w-5  text-white" />,
    },
    {
      title: "Expansion:",
      description:
        "Gradually extended its services to other countries and established multiple offices, including those in Bangladesh and the UK.",
      icon: <PiGlobeHemisphereEastThin className="h-5 w-5  text-white" />,
    },
    {
      title: "Student Support",
      description:
        "SGE has helped over 120,000 students with admissions, facilitating more than 30,000 enrollments globally.",
      icon: <PiUser className="h-5 w-5  text-white" />,
    },
  ];

  const GlobalEducationDescription = [
    {
      para: "Shabuj Global Education has been making significant strides in its efforts to support students seeking higher education abroad, particularly in the UK, Canada, the USA, and Australia. Over the years, it has formed partnerships with several prestigious universities, including some from the UK's Russell Group, to help students gain admission into a wide range of programs, from foundation levels to PhDs.",
    },
    {
      para: "In terms of services, Shabuj Global offers a comprehensive suite that includes academic counselling, assistance with university applications, and visa guidance. They also provide post-admission support, which includes help with university transfers and advice on scholarships. Recently, the organisation has enhanced its offerings by integrating career counselling services aimed at improving student placement outcomes post-graduation.",
    },
    {
      para: "On the placement front, Shabuj Global Education has facilitated over 30,000 enrollments globally, and their ongoing partnerships ensure that students not only secure university placements but also internships and career opportunities that align with their long-term goals.",
    },
  ];

  const development = [
    {
      title: "2010",
      description:
        "Foundation of Shabuj Global Education, marking the start of operations in international student placement.",
      icon: <SiOpenjsfoundation className="h-5 w-5 text-white" />,
    },
    {
      title: "2013",
      description:
        "Gained recognition through partnerships with UK universities, especially those awarded the TEF Gold Award.",
      icon: <PiTrophy className="h-5 w-5 text-white" />,
    },
    {
      title: "Present",
      description:
        "Assisted over 120,000 students with more than 30,000 successful university placements, hosting global education expos.",
      icon: <PiUser className="h-5 w-5 text-white" />,
    },
  ];

  const developementDescription2 = [
    {
      para: "Shabuj Global Education (SGE) is a UK-based educational consulting company founded in 2010. It provides services to help students, particularly from South Asia, secure admissions to universities worldwide, with a special focus on UK institutions.",
    },
    {
      para: "Key events in its development include:",
    },
  ];

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

      {/* overview */}
      <div className="bg-[#EFF6FF] py-12">
        <div className=" max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-20 justify-between items-center">
            {/* values */}
            <Image
              width={100}
              height={100}
              className="w-full h-3/4 rounded-2xl"
              src="https://i.ibb.co.com/MpS2X1Z/study-abroad-866965-6-removebg-preview.png"
              alt=""
            />
            <IconCard data={overview} />
          </div>
        </div>
      </div>

      {/* channel partner */}
      <div className=" max-w-6xl px- mx-auto py-14">
        <div className="grid grid-cols-2 gap-10 items-center justify-between mb-14">
          <div>
            <h2 className="poppins-semibold text-[28px] text-[#00399F] mb-2 leading-[39.2px]">
              Join Our Team of Dedicated Channel Partner at SGE
            </h2>
            <ParaGraph
              description={JoinDescription}
              style={"text-gray-700 max-w-lg"}
            />
          </div>
          <Image
            width={100}
            height={100}
            className="w-full h-full rounded-2xl"
            src="https://cdn.dribbble.com/userupload/15670016/file/original-b55c1f7f77f25d94e59c8f9ff1f7a75c.png?resize=400x0https://www.google.com/url?sa=i&url=https%3A%2F%2Fdribbble.com%2Ftags%2Fregister-page&psig=AOvVaw3AkThoi6cbOiVRfZZNJ3zC&ust=1729503745159000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPC3gdnVnIkDFQAAAAAdAAAAABAJ"
            alt=""
          />
        </div>
      </div>

      {/* how Success */}
      <div className="  py-14 bg-[#EFF6FF] ">
        <div className="grid grid-cols-2 gap-10 items-center justify-between max-w-6xl px-12 mx-auto">
          <Image
            width={100}
            height={100}
            className="w-full h-full rounded-2xl"
            src="https://cdn.dribbble.com/userupload/15670016/file/original-b55c1f7f77f25d94e59c8f9ff1f7a75c.png?resize=400x0https://www.google.com/url?sa=i&url=https%3A%2F%2Fdribbble.com%2Ftags%2Fregister-page&psig=AOvVaw3AkThoi6cbOiVRfZZNJ3zC&ust=1729503745159000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPC3gdnVnIkDFQAAAAAdAAAAABAJ"
            alt=""
          />
          <div>
            <h2 className="poppins-semibold text-[28px] text-[#00399F] mb-2 leading-[39.2px]">
              How Our Channel Partner Drive Our Success
            </h2>
            <ParaGraph
              description={HowDescription}
              style={"text-gray-700 max-w-lg"}
            />
          </div>
        </div>
      </div>

      {/* committed professionals */}
      <div className=" max-w-6xl mx-auto py-14">
        <div className="grid grid-cols-2 gap-10 items-center justify-between mb-14">
          <div>
            <h2 className="poppins-semibold text-[28px] text-[#00399F] mb-2 leading-[39.2px]">
              Join our team of committed professionals at SGE{" "}
            </h2>
            <ParaGraph
              description={CommittedDescription}
              style={"text-gray-700 max-w-lg"}
            />
          </div>
          <Image
            width={100}
            height={100}
            className="w-full h-full rounded-2xl"
            src="https://cdn.dribbble.com/userupload/15670016/file/original-b55c1f7f77f25d94e59c8f9ff1f7a75c.png?resize=400x0https://www.google.com/url?sa=i&url=https%3A%2F%2Fdribbble.com%2Ftags%2Fregister-page&psig=AOvVaw3AkThoi6cbOiVRfZZNJ3zC&ust=1729503745159000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPC3gdnVnIkDFQAAAAAdAAAAABAJ"
            alt=""
          />
        </div>
      </div>

      {/* benefits */}
      <div className="bg-[#EFF6FF] py-12">
        <div className=" max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-14 ">
            <h2 className="poppins-semibold text-[28px] mb-2 leading-[39.2px]">
              Benefits for Students
            </h2>

            <p className="text-gray-700 text-center max-w-2xl poppins-regular ">
              Shabuj Global Education (SGE) offers a range of benefits for
              students through its partnerships with over 150 universities,
              particularly in the UK and Ireland. These benefits include:
            </p>
          </div>
          <div>
            {/* values */}
            <HoverCard data={benefits} style={"grid-cols-3"} />
          </div>
        </div>
      </div>

      {/* timeline */}
      <div className=" max-w-6xl mx-auto py-14">
        <div className="grid grid-cols-2 gap-10 items-center justify-between mt-8 mb-14 ">
          <TimelineLayout timelineData={milestones} />

          <div>
            <h2 className="poppins-semibold text-[28px] text-[#00399F] mb-2 leading-[39.2px]">
              Our Timeline
            </h2>
            <ParaGraph
              description={OrganizationHistory}
              style={"text-gray-700 max-w-lg"}
            />
          </div>
        </div>
      </div>

      {/* support  */}
      <div className="  py-14 bg-[#EFF6FF] ">
        <div className="grid grid-cols-2 gap-10 items-center justify-between max-w-6xl px-12 mx-auto">
          <div>
            <h2 className="poppins-semibold text-[28px] text-[#00399F] mb-2 leading-[39.2px]">
              Global Education Support
            </h2>
            <ParaGraph
              description={GlobalEducationDescription}
              style={"text-gray-700 max-w-lg"}
            />
          </div>

          <Image
            width={100}
            height={100}
            className="w-full h-full rounded-2xl"
            src="https://i.ibb.co.com/HDj7Xdh/education-people-great-design-for-any-purposes-flat-design-vector-removebg-preview.png"
            alt=""
          />
        </div>
      </div>

      {/* development milestone */}
      <div className=" max-w-6xl mx-auto py-14">
        <div className="grid grid-cols-2 gap-10 items-center justify-between mt-8 mb-14 ">
          <div>
            <h2 className="poppins-semibold text-[28px] text-[#00399F] mb-2 leading-[39.2px]">
              Development of Shabuj Global Education{" "}
            </h2>
            <ParaGraph
              description={developementDescription2}
              style={"text-gray-700 max-w-lg"}
            />
          </div>
          <TimelineLayout timelineData={development} />
        </div>
      </div>

      <div className="pb-52"></div>
    </div>
  );
}
