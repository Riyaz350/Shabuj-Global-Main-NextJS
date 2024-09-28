import Banner from "@/_components/Home/Banner/Banner";
import "./globals.css";
import Home_Events from "@/_components/Home/Home_Events/Home_Events";
import Home_Tab from "@/_components/Home/Home_Tab/Home_Tab";
import Home_Counter from "@/_components/Home/Home_Counter/Home_Counter";
import Home_Ticker from "@/_components/Home/Home_Ticker/Home_Ticker";
import Home_Testimonial from "@/_components/Home/Home_Testimonial/Home_Testimonial";
import Home_Connection from "@/_components/Home/Home_Connection/Home_Connection";
import Home_Destination from "@/_components/Home/Home_Destination/Home_Destination";
import Home_UniversityList from "@/_components/Home/Home_UniversityList/Home_Universitylist";
import ImageGallery from "@/_components/Home/Home_ImageGallery/ImageGallery";
import Home_Contact from "@/_components/Home/Home_Contact/Home_Contact";


export default function Home() {
  return (
    <div className=" font-poppins">
      <Banner/>
      <Home_Events/>
      <Home_Tab/>
      <Home_Counter/>
      <Home_Ticker/>
      <Home_Testimonial/>
      <Home_Connection/>
      <Home_Destination/>
      <Home_UniversityList/>
      <ImageGallery/>
      <Home_Contact/>
    </div>
  );
}
