import Events_Components from "@/_components/Events/Events_Components/Events_Components";
import UpcomingEvents_PastEvents from "@/_components/Events/UpcomingEvents_PastEvents/UpcomingEvents_PastEvents";

const page = () => {
    return (
        <div>
            <Events_Components/>
            <UpcomingEvents_PastEvents/>
        </div>
    );
};

export default page;