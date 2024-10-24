'use client'
import { useEffect, useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaRegCalendarDays } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";
import CountDown from "./CountDown";

const Events_Components = () => {
  const [active, setActive] = useState(1);

  const [width, setWidth] = useState<number>(1024);;
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <div className="font-poppins bg-[#FAFAFA]">
      <div className="text-center space-y-10 font-bold ">
        <div className="">
          <div
            style={{
              background: `url(https://i.ibb.co.com/x59tdP0/Blue-Background.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="mx-10 lg:mx-auto space-y-10 h-[400px] lg:h-[500px] flex flex-col pt-[100px]">
              <h1 className="text-4xl lg:text-5xl">Ongoing Event</h1>
              <h2 className="text-[#00399F] text-2xl lg:text-3xl">
                Multi-Destination Education Expo - Dhaka
              </h2>
            </div>
          </div>
          <div className="-mt-28 lg:-mt-48 max-w-5xl mx-auto border-b-2 px-10 border-[#CACACA] pb-20">
            {width < 768 ? (
              <Image width={100} height={100}
                className="mx-auto rounded-3xl mb-10 w-auto h-auto shadow-lg"
                src="https://i.ibb.co.com/7VL7y6Y/Dhaka-Event-1s-1.png"
                alt=""
              />
            ) : (
              <Image width={100} height={100}
                className="mx-auto rounded-3xl mb-10 w-auto h-auto shadow-lg"
                src="https://i.ibb.co.com/3r9gvm3/Dhaka-Expo-11-may-2024-Rectangle-1.png"
                alt=""
              />
            )}
            <div className="max-w-3xl mx-auto flex gap-2 flex-wrap sm:flex-nowrap">
              <Link
                href={"/comingSoon"}
                onMouseEnter={() => setActive(1)}
                className={`${
                  active == 1
                    ? "bg-[#2563EB] text-white"
                    : " bg-white text-[#2563EB]"
                } rounded-3xl h-10 w-full pt-2`}
              >
                Join Now
              </Link>
              <Link
                href={"/comingSoon"}
                onMouseEnter={() => setActive(2)}
                className={`${
                  active == 2
                    ? "bg-[#2563EB] text-white"
                    : " bg-white text-[#2563EB]"
                } rounded-3xl h-10 w-full flex items-center justify-center gap-2`}
              >
                <HiOutlineLocationMarker />
                Event Location
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="mx-5 border-2 border-[#FAFAFA]">
        <div className="max-w-5xl mx-auto text-center my-10 px-10 lg:px-0">
          <h1 className="text-4xl lg:text-5xl font-bold">Upcoming Events</h1>
          {/* counter */}
          <div className="">
            <CountDown   />
          </div>
          <div className="lg:grid grid-cols-2 flex flex-col gap-5 justify-center my-10 ">
            {/* first event */}
            {/* event card */}
            <div className="flex flex-col justify-between col-span-1 rounded-2xl text-start gap-4 shadow-2xl p-5 pt-0">
              <Image width={100} height={100} className="h-auto w-auto"
                src="https://i.ibb.co.com/LxPtXpG/CTG-Multi-Destination-Expo-18-May-Banner-2.png"
                alt=""
              />
              <h2 className="font-bold text-lg mt-5">
                International Education Fair - Chattogram
              </h2>
              <p>
                Attend Shabuj Global Education International Education Fair -
                Chattogram and apply for September 2024 and January 2024
                intakes.
              </p>
              <ul className="text-[#F25025]">
                <li className="flex items-center  gap-2 mb-1">
                  <HiOutlineLocationMarker />
                  The Peninsula Chittagong
                </li>
                <li className="flex gap-2 lg:items-center flex-col sm:flex-row justify-between flex-wrap">
                  <span className="flex md:flex-nowrap flex-wrap gap-2">
                    <span className="flex items-center gap-1">
                      <FaRegCalendarDays />
                      22nd July, 2024{" "}
                    </span>
                    <span className="flex items-center gap-1">
                      <GoDotFill />
                      10:00 am - 05:00 pm
                    </span>
                  </span>
                  <Link href={"/singleEvent"}>
                    <span className="px-4 font-inter rounded-2xl text-white bg-[#2563EB] p-2 font-light text-xs cursor-pointer">
                      Register Now
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            {/* other two */}
            <div className="col-span-1 flex flex-col justify-between gap-5">
              {/* event card */}
              <div className="flex flex-col lg:flex-row items-center justify-center rounded-2xl text-start space-y-2 shadow-2xl p-5 gap-3  ">
                <Image width={100} height={100}
                  className="lg:w-full h-auto w-2/3 "
                  src="https://i.ibb.co.com/Jty2B16/Sylhet-Expo-12-February-2024-1.png"
                  alt=""
                />
                <div className=" w-full !mt-0">
                  <h2 className="font-bold  ">
                    Multi-Destination Education Expo - Sylhet
                  </h2>
                  <p className="text-sm">
                    Attend our Multi-Destination Education Expo - Sylhet and
                    apply for September 2024 and January 2024 intakes.
                  </p>
                  <ul className="text-[#F25025]  space-y-1 text-xs">
                    <li className="flex items-center  gap-2">
                      <HiOutlineLocationMarker />
                      The Peninsula Chittagong
                    </li>
                    <li className="flex items-center justify-between lg:gap-2 gap-3  flex-wrap ">
                      <span>
                        <span className="flex gap-2">
                          <FaRegCalendarDays />
                          24 th July, 2024{" "}
                        </span>
                        <span className="flex gap-2">
                          <GoDotFill />
                          10:00 am - 05:00 pm
                        </span>
                      </span>{" "}
                      <Link href={"/singleEvent"}>
                        {" "}
                        <span className="font-inter rounded-2xl text-white bg-[#2563EB] p-2 font-light text-xs px-4 cursor-pointer">
                          Register Now
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* event card */}
              <div className="flex flex-col lg:flex-row items-center justify-center rounded-2xl text-start space-y-2 shadow-2xl p-5 gap-3  ">
                <Image width={100} height={100}
                  className="w-2/3  h-auto lg:w-full "
                  src="https://i.ibb.co.com/PxKhyBW/Dhaka-Event-ad-2-1.png"
                  alt=""
                />
                <div className=" w-full !mt-0">
                  <h2 className="font-bold  ">
                    Education Expo - UK, USA, Canada, Australia
                  </h2>
                  <p className="text-smsm">
                    Attend our Multi-Destination Education Expo - Sylhet and
                    apply for September 2024 and January 2024 intakes.
                  </p>
                  <ul className="text-[#F25025]  space-y-1 text-xs">
                    <li className="flex items-center  gap-2">
                      <HiOutlineLocationMarker />
                      The Peninsula Chittagong
                    </li>
                    <li className="flex items-center justify-between lg:gap-2 gap-3  flex-wrap ">
                      <span>
                        <span className="flex gap-2">
                          <FaRegCalendarDays />
                          26 th July, 2024{" "}
                        </span>
                        <span className="flex gap-2">
                          <GoDotFill />
                          10:00 am - 05:00 pm
                        </span>
                      </span>{" "}
                      <Link href={"/singleEvent"}>
                        {" "}
                        <span className="font-inter rounded-2xl text-white bg-[#2563EB] p-2 font-light text-xs px-4 cursor-pointer">
                          Register Now
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events_Components;
