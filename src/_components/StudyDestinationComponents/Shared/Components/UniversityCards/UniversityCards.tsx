import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TiLocation } from "react-icons/ti";
import universitiesData from '../../../../../assets/json/uk.json';

type University = {
  id: number;
  name: string;
  logo: string;
  location: string;
  info: string;
};

export default function UniversityCards({
  country,
  routeLabel,
}: {
  country: string;
  routeLabel: string;
}) {
  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null);

  const universities: University[] = universitiesData as University[];

  const handleCardClick = (university: University) => {
    setSelectedUniversity(university);
  };

  return (
    <div className="mx-auto p-4 bg-[#EFF6FF]" onMouseLeave={() => setSelectedUniversity(null)}>
      <h1 className="lg:text-[56px] text-[28px] font-bold py-28 text-center">
        Top Universities in The {country}
      </h1>
      <div className="flex max-w-screen-xl mx-auto">
        <div
          className={`flex flex-wrap justify-center gap-8 h-auto max-h-[700px] overflow-y-auto ${
            selectedUniversity ? "lg:w-[66%] md:w-[33%] w-[33%] overflow-x-hidden uk-scrollbar" : "w-full"
          }`}
        >
          {universities.map((university) => (
            <div
              key={university.id}
              className="p-4 bg-white rounded-lg cursor-pointer flex justify-center items-center"
              onMouseEnter={() => handleCardClick(university)}
            >
              <Image
                width={200}
                height={100} 
                src={university.logo}
                alt={university.name}
                className="w-[200px] h-auto object-contain mb-4 lg:px-4 md:px-4 px-0"
              />
            </div>
          ))}
        </div>

        <div className={`${selectedUniversity ? "lg:w-[34%] md:w-[66%] w-[66%]" : "hidden"}`}>
          {selectedUniversity && (
            <div className="p-4 bg-[EFF6FF] rounded-lg">
              <Image
                width={200} 
                height={100}
                src={selectedUniversity.logo}
                className="mx-auto h-auto md:w-[50%] w-auto mb-5"
                alt={selectedUniversity.name}
              />
              <h2 className="text-2xl font-bold mb-2">{selectedUniversity.name}</h2>
              <p className="text-justify">{selectedUniversity.info}</p>
              <p className="poppins-bold text-sm pt-5">One of {`${country}'s`} leading universities</p>
              <p className="flex items-center pt-5 pb-6 lg:text-sm text-[10px]">
                <TiLocation className="text-blue-500" /> Located in {selectedUniversity.location}
              </p>
              <Link href={`/${routeLabel}/${selectedUniversity.id}`}>
                <button className="btn mt-4 lg:px-28 px-16 py-2 bg-blue-500 text-white rounded-3xl">
                  Apply Now
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}