import SingleUniversity from '@/_components/shared/SingleUniversity/SingleUniversity';
import React from 'react';

const page = ({ params }: { params: { Name: string | null } }) => {
    return (
        <div>
            <SingleUniversity Name={params.Name}/>
        </div>
    );
};

export default page;