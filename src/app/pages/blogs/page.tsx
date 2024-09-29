import Blog_BlogInbox from "@/_components/Blog/Blog_BlogInbox/Blog_BlogInbox";
import Blogs_Cards from "@/_components/Blog/Blogs_Cards/Blogs_Cards";
import Blogs_Banner from "@/_components/Blog/Blogs_Component/Blogs_Banner";

const page = () => {
    return (
        <div className="poppins">
            <Blogs_Banner />
            <Blogs_Cards />
            <Blog_BlogInbox />
        </div>
    );
};

export default page;