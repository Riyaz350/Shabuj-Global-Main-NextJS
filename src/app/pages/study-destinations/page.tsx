import Home_Destination from '@/_components/Home/Home_Destination/Home_Destination';
import React from 'react';

const page = () => {
    return (
        <div
            style={{
                background:
                    "linear-gradient(90deg, rgba(13,53,234,1) 30%, rgba(44,124,249,1) 50%, rgba(13,53,234,1) 70%)",
            }}
        >
            <Home_Destination />
        </div>
    );
};

export default page;