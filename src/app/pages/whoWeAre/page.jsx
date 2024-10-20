import Image from "next/image";
import SubHeading from "../../../_components/AboutUs/Who_we_are/SubHeading";
import TimelineLayout from "../../../_components/AboutUs/Who_we_are/TimelineLayout";
import { GiDrippingStar, GiGraduateCap } from "react-icons/gi";
import {
  PiAirplaneTiltThin,
  PiEyeLight,
  PiGlobeStandLight,
  PiGlobeThin,
  PiHandshakeThin,
  PiLightbulbThin,
} from "react-icons/pi";
import { GoSync } from "react-icons/go";
import { BsCheck2Circle } from "react-icons/bs";
import { TfiBriefcase } from "react-icons/tfi";

export default function page() {
  const services = [
    {
      title: "Education Consultancy",
      description:
        "They guide students through the entire process of selecting universities, preparing applications, and ensuring their chosen courses match their academic and career goals. They also offer career counselling to help students choose the right path.",
    },
    {
      title: "Student Visa Processing",
      description:
        "Shabuj Global helps students navigate the often complicated visa application process, ensuring they submit all required documents and increasing their chances of visa approval.",
    },
    {
      title: "Scholarship Guidance",
      description:
        "They assist students in identifying and applying for scholarships, providing support to increase the chances of securing financial aid for their studies.",
    },
    {
      title: "Additional Support",
      description:
        "Beyond admissions and visa processing, Shabuj Global offers test preparation services, assistance with university transfers, and guidance for students transitioning to a new country.",
    },
  ];

  const values = [
    {
      title: "Student-Centred Approach",
      description:
        "Prioritising the individual needs and aspirations of each student, ensuring personalised support and guidance.",
      icon: <GiGraduateCap className="text-4xl text-[#00399F] font-thin" />,
    },
    {
      title: "Integrity and Transparency",
      description:
        "Providing clear and honest information about programs, universities, visa processes, and opportunities abroad.",
      icon: <PiEyeLight className="text-3xl text-[#00399F] font-thin" />,
    },
    {
      title: "Excellence in Service",
      description:
        "Striving to deliver top-notch counselling, training, and services to students, helping them achieve their academic and career goals.",
      icon: <GiDrippingStar className="text-3xl text-[#00399F] font-thin" />,
    },
    {
      title: "Cultural Sensitivity",
      description:
        "Respecting and understanding the cultural backgrounds of Bangladeshi students while helping them adapt to the academic and social environments of their chosen study destinations.",
      icon: <PiGlobeStandLight className="text-3xl text-[#00399F] font-thin" />,
    },
    {
      title: "Continuous Improvement",
      description:
        "Staying up-to-date with global education trends, university requirements, and immigration policies to provide the best support possible.",
      icon: <GoSync className="text-2xl text-[#00399F] font-thin" />,
    },
  ];

  const goals = [
    {
      title: "Empowering Bangladeshi Students",
      description:
        "Helping students realise their full potential by guiding them through the process of applying to international universities and achieving their academic goals.",
      icon: <PiLightbulbThin className="text-3xl text-[#00399F] font-thin" />,
    },
    {
      title: "Facilitating Global Exposure",
      description:
        "Providing students with opportunities to gain global exposure, which will not only enhance their academic knowledge but also broaden their cultural and professional perspectives.",
      icon: (
        <PiAirplaneTiltThin className="text-3xl text-[#00399F] font-thin" />
      ),
    },
    {
      title: "Support in Admission and Visa Process",
      description:
        "Offering end-to-end support, from helping students select suitable universities and courses to assisting with admission applications, visa processing, and post-arrival arrangements.",
      icon: <BsCheck2Circle className="text-2xl text-[#00399F] font-thin" />,
    },
    {
      title: "Enhancing Career Prospects",
      description:
        "Helping students pursue education that aligns with their career aspirations, ensuring they acquire the skills and qualifications that are highly valued in the global job market.",
      icon: <TfiBriefcase className="text-2xl text-[#00399F] font-thin" />,
    },
    {
      title: "Building Partnerships",
      description:
        "Collaborating with universities, colleges, and other educational institutions abroad to create a wide range of opportunities for students.",
      icon: <PiHandshakeThin className="text-3xl text-[#00399F] font-thin" />,
    },
    {
      title: "Promoting Higher Education Abroad",
      description:
        "Encouraging Bangladeshi students to explore international education and the benefits of studying in countries with world-class academic environments.",
      icon: <PiGlobeThin className="text-3xl text-[#00399F] font-thin" />,
    },
  ];

  return (
    <div className=" ">
      {/* header */}
      <div
        className="hero h-full "
        style={{
          backgroundImage:
            "url(https://pfecglobal.com.bd/wp-content/uploads/2023/08/How-Education-Consultants-Can-Help.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 bg-black "></div>
        <div className="hero-content text-neutral-content  flex justify-start w-full px-16">
          <div className="max-w-4xl ml-0 py-28 pb-20  text-start ">
            <div>
              <h1 className="mb-5 text-5xl font-bold">Know More About We</h1>
              <div className="flex-col gap-3 flex text-white">
                <p className="text-base">
                  Shabuj Global Education is an enlisted professional student
                  consultancy firm, approved by the British Council. It
                  specialises in academic counselling, course placement, and
                  internal student recruitment. It has been working with
                  universities from around the world to find the right UK course
                  placements since 2010. Shabuj Global helps its customers find
                  undergraduate, postgraduate, and foundation courses, and also
                  aids MBA and MSc students.
                </p>
                <p className=" text-base">
                  Shabuj Global Education was founded in 2010. It is a UK-based
                  consultancy that provides services to students, primarily from
                  Bangladesh, seeking to study abroad in countries like the UK,
                  Canada, the US, and Australia. The organisation has supported
                  over 145,000 students in their educational journeys, assisting
                  them in securing admissions to top universities worldwide.
                </p>
                <p className=" text-base">
                  Shabuj Global Education provides a variety of services to help
                  students pursue higher education abroad. Their core offerings
                  include:
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* service section */}
      <div className=" w-3/4 max-w-4xl mx-auto relative -top-12">
        <div className="bg-white p-8 rounded-lg shadow-xl grid grid-cols-2 gap-5">
          {services?.map((service, index) => (
            <div className="flex  items-start gap-3">
              <div className="italic text-[#00399F]  text-3xl font-bold">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </div>
              <div>
                <h2 className="mb-1 font-bold text-lg">{service?.title}</h2>
                <p className="text-sm">{service?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*What We Stand For */}
      <div className="bg-[#EFF6FF] py-12">
        <div className=" container mx-auto">
          <div className="flex flex-col items-center mb-14 ">
            <h2 className="poppins-semibold text-[28px] mb-2 leading-[39.2px]">
              What We Stand For
            </h2>
            <p className="text-gray-700 text-center max-w-lg">
              Shabuj Global Education is an organisation dedicated to assisting
              students, particularly from Bangladesh, in pursuing education
              abroad. Its values and goals likely focus on the following key
              aspects:
            </p>
          </div>
          <div className="grid grid-cols-3 gap-10 justify-between  mt-10">
            {/* values */}
            <div>
              <SubHeading label="Values" />
              <div className="flex-col gap-10 flex mt-10">
                {values?.map((value) => (
                  <div className="flex gap-5 ">
                    <div className="w-auto">
                      <div className="w-10 h-10 rounded-full bg-white relative">
                        <p className="absolute -top-1 -left-1">{value?.icon}</p>
                      </div>
                    </div>

                    <div className="">
                      <h2 className="mb-1 font-bold text-lg">{value?.title}</h2>
                      <p className="text-sm">{value?.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* center img */}
            <Image
              width={100}
              height={100}
              className="w-full h-full rounded-2xl"
              src="https://pfecglobal.com.bd/wp-content/uploads/2023/08/How-Education-Consultants-Can-Help.jpg"
              alt=""
            />

            {/* goals */}
            <div>
              <SubHeading label="Goals" />
              <div className="flex-col gap-10 flex mt-10">
                {goals?.map((goal) => (
                  <div className="flex gap-5 ">
                    <div className="w-auto">
                      <div className="w-10 h-10 rounded-full bg-white relative">
                        <p className="absolute -top-1 -left-1">{goal?.icon}</p>
                      </div>
                    </div>

                    <div className="">
                      <h2 className="mb-1 font-bold text-base">
                        {goal?.title}
                      </h2>
                      <p className="text-sm">{goal?.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Journey */}
      <div className=" container mx-auto py-14">
        <div className=" mb-14 ">
          <h2 className="poppins-semibold text-[28px] text-[#00399F] mb-2 leading-[39.2px]">
            Our Journey
          </h2>
          <div className="grid grid-cols-2 gap-10 items-center justify-between">
            <div className="flex flex-col gap-y-5 mt-9">
              <p className="text-gray-700 max-w-lg">
                Shabuj Global Education is dedicated to helping students from
                around the world access higher education, particularly in the
                UK. Its mission is to provide personalised support to students,
                guiding them through the process of selecting the right courses
                and universities based on their individual needs. The
                organisation aims to bridge the gap between students and
                educational institutions, facilitating over 145,000 successful
                admissions.
              </p>
              <p className="text-gray-700 max-w-lg">
                Their vision focuses on enabling students to achieve academic
                success by offering tailored advice, ensuring that the
                educational programs align with both personal goals and career
                aspirations. Shabuj Global Education is committed to empowering
                students to access quality education, regardless of their
                financial situation, and they actively promote scholarships to
                support.
              </p>{" "}
              <p className="text-gray-700 max-w-lg">
                Shabuj Global Education Key milestones include:
              </p>
            </div>
            <TimelineLayout />
          </div>
        </div>
      </div>
      <div className="pb-64"></div>
    </div>
  );
}
