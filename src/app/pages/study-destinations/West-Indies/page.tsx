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
import Doc1 from '@/_components/StudyDestinationComponents/West-Indies/SVG/Doc1';
import Doc2 from '@/_components/StudyDestinationComponents/West-Indies/SVG/Doc2';
import Doc3 from '@/_components/StudyDestinationComponents/West-Indies/SVG/Doc3';
import FAQWestIndies from '@/_components/StudyDestinationComponents/West-Indies/SVG/FAQ';
import React from 'react';
import Banner3 from '@/_components/StudyDestinationComponents/Shared/Banners/Banner3/Banner3';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Study in the West-Indies  ',
    description: 'Learn from the worlds best academics and study at prestigious West-Indies universities.',
  }
const page = () => {
    return (
        <div>
            <Banner3 country='West-Indies' />
            <Car country='West-Indies' description={`Learn from some of the ${`world's`} best academics and experts in some of ${`world’s`} most prestigious universities and benefit from their exceptional academic support. Study alongside some of the finest and brilliant minds and hone your skills using state-of-the-art technology. Avail placements, internships and volunteering positions that are your right fit through strong industry links of West-Indies universities and apply your knowledge and skills in a real-world professional environment. Graduate with skills and expertise that are in high demand around the world and get hired by your dream employers. `} bgColor='bg-[#890001]' />
            <QuickFacts country='West-Indies' />
            <Tabs country='West-Indies' />
            <AnimatedText country="West-Indies" />
            {/* <UniversityCards country='West-Indies'  /> */}
            <RequirementCard country={"West-Indies"} />
            <Exams country='West-Indies' />
            <GuidanceBanner />
            <University_Required_Docs country='West-Indies' doc1={Doc1} doc2={Doc2} doc3={Doc3} />
            <FAQ bgColor={"bg-[#1A1A1A]"} FAQimg={FAQWestIndies} country='West-Indies' />
            <Counselor country='West-Indies' bgColor='linear-gradient(264deg, rgba(137,0,1,1) 0%, rgba(96,0,1,1) 100%)' />

        </div>
    );
};

export default page;