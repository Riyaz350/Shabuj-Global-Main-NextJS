import AnimatedText from '@/_components/StudyDestinationComponents/Shared/Components/AnimatedText/AnimatedText';
import Counselor from '@/_components/StudyDestinationComponents/Shared/Components/Counselor/Counselor';
import Exams from '@/_components/StudyDestinationComponents/Shared/Components/Exams/Exams';
import FAQ from '@/_components/StudyDestinationComponents/Shared/Components/FAQ/FAQ';
import QuickFacts from '@/_components/StudyDestinationComponents/Shared/Components/QuickFacts/QuickFacts';
import RequirementCard from '@/_components/StudyDestinationComponents/Shared/Components/RequirementCard/RequirementCard';
import Tabs from '@/_components/StudyDestinationComponents/Shared/Components/Tabs/Tabs';
import Car from '@/_components/StudyDestinationComponents/Shared/SecondBanners/Car/Car';
// import UniversityCards from '@/_components/StudyDestinationComponents/Shared/Components/UniversityCards/UniversityCards';
import University_Required_Docs from '@/_components/StudyDestinationComponents/Shared/Components/UniversityRequiredDocs/University_Required_Docs';
import GuidanceBanner from '@/_components/StudyDestinationComponents/Shared/Guidence/GuidenceBanner';
import Doc2 from '@/_components/StudyDestinationComponents/Georgia/SVG/Doc2';
import Doc3 from '@/_components/StudyDestinationComponents/Georgia/SVG/Doc3';
import FAQGeorgia from '@/_components/StudyDestinationComponents/Georgia/SVG/FAQ';
import React from 'react';
import Banner3 from '@/_components/StudyDestinationComponents/Shared/Banners/Banner3/Banner3';
import Doc1 from '@/_components/StudyDestinationComponents/Georgia/SVG/Doc1';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Study in the Georgia  ',
    description: 'Learn from the worlds best academics and study at prestigious Georgia universities.',
  }
const page = () => {
    return (
        <div>
            <Banner3 country='Georgia' />
            <Car country='Georgia' bgColor='bg-[#0873ba]' description={`Learn from some of the ${`world's`} best academics and experts in some of ${`world’s`} most prestigious universities and benefit from their exceptional academic support. Study alongside some of the finest and brilliant minds and hone your skills using state-of-the-art technology. Avail placements, internships and volunteering positions that are your right fit through strong industry links of Georgia universities and apply your knowledge and skills in a real-world professional environment. Graduate with skills and expertise that are in high demand around the world and get hired by your dream employers. `} />
            <QuickFacts country='Georgia' />
            <Tabs country='Georgia' />
            <AnimatedText country="Georgia" />
            {/* <UniversityCards country='Georgia'  /> */}
            <RequirementCard country={"Georgia"} />
            <Exams country='Georgia' />
            <GuidanceBanner />
            <University_Required_Docs country='Georgia' doc1={Doc1} doc2={Doc2} doc3={Doc3} />
            <FAQ bgColor={"bg-[#1A1A1A]"} FAQimg={FAQGeorgia} country='Georgia' />
            <Counselor country='Georgia' bgColor='linear-gradient(264deg, rgba(8,115,186,1) 0%, rgba(6,80,130,1) 100%)' />

        </div>
    );
};

export default page;