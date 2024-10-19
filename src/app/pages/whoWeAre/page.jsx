import Image from "next/image";

export default function page() {
  return (
    <div className=" ">
      {/* header */}
      <div
        className="px-5"
        style={{
          background: `url(https://i.ibb.co.com/vDyyQYN/Background.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="lg:grid max-w-5xl mx-auto grid-cols-2  relative items-center justify-center space-y-10 lg:space-y-0 py-10  ">
          <div>
            <p className="mb-[15px] border-l-4 text-base font-semibold pl-3 pt-1 text-black border-black">
              Welcome to Shabuj Global Education
            </p>
            <h1 className="pt-9 lg:pt-0 text-2xl md:text-4xl lg:text-5xl font-semibold flex justify-center text-center lg:text-start mt-4 ">
              Your trusted partner in studying abroad since 2010
            </h1>
          </div>
          <Image
            width={100}
            height={100}
            className="w-1/2 mx-auto"
            src="https://i.ibb.co.com/BP3WjmN/college-admission-amico-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
      {/*  */}
      <div className="p-10 pb-40"></div>
    </div>
  );
}
