'use client'
import { useState, useEffect } from "react";
import Banner1 from "./Single_University_Banner";
import data from '../../../assets/json/allUni.json'
import Single_Universty_Accordion from "./Single_Universty_Accordion";
import Single_University_Check from "./Single_University_Check";
import Single_University_Info from "./Single_University_Info";
import Single_University_Form from "./Single_University_Form";

interface University {
  id: number;
  name: string;
  logo:string
}

const SingleUniversity = ({id}:{id:number}) => {
  const [university, setUniversity] = useState<University | null>(null);

  useEffect(() => {
    // fetch("../../../src/assets/json/allUni.json")
    //   .then((response) => response.json())
    //   .then((data: University[]) => {
        const singleUniversity = data.find((uni) => uni.id == id);
        setUniversity(singleUniversity || null);
    //   })
    //   .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  if (!university) {
    return <div>Loading...</div>; 
  }
    return (
        <div className="mb-20 pb-20">
            <Banner1 university={university} />
            <div className="max-w-7xl mx-auto">
                <p className="text-center md:text-6xl text-4xl font-semibold md:mt-36 mt-28 md:mx-0 mx-5">
                    {university.name}
                </p>
                <div className="md:grid md:grid-cols-12 grid-cols-1 mt-8 md:mt-12 gap-10 px-5">
          <div className="lg:col-span-7 col-span-6">
            <Single_Universty_Accordion />
            <Single_University_Check />
          </div>
          <div className="lg:col-span-5 col-span-6">
            <Single_University_Info />
            <Single_University_Form />
          </div>
        </div>
            </div>
        </div>
    );
};

export default SingleUniversity;