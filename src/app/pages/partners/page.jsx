import React from "react";

export default function page() {
  return (
    <div>
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

      <div className="pb-64"></div>

    </div>
  );
}
