import Registration_Banner from "@/_components/Registration/Registration_Banner";
import Registration_Event_Time from "@/_components/Registration/Registration_Event_Time";
import Registration_Events from "@/_components/Registration/Registration_Events";

const page = () => {
    return (
        <div className="bg-[#FAFAFA]  poppins pb-10">
            <Registration_Banner />
            <div className="lg:flex md:flex max-w-screen-xl justify-between mx-auto lg:px-20 md:px-10 px-5 mt-20 space-y-10 lg:space-y-0 md:space-y-0">
                <div className="flex-1 lg:mr-10 md:mr-10 mb-20">
                    <Registration_Event_Time />
                </div>
                <div className="flex-1">
                    <Registration_Events />
                </div>
            </div>
        </div>
    );
};

export default page;