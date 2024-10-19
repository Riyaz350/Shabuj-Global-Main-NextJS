"use client";
import Image from "next/image";

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
              <h1 className="mb-5 text-5xl font-bold">Know About We</h1>
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
      <div className=" w-3/4 mx-auto relative -top-12">
        <div className="bg-white p-8 rounded-lg shadow-xl grid grid-cols-2 gap-5">
          {services?.map((service, index) => (
            <div className="flex justify-between items-start gap-3">
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
      <div className="pb-64"></div>
    </div>
  );
}
