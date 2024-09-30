import SingleUniversity from '@/_components/shared/SingleUniversity/SingleUniversity';
import React from 'react';

const page = ({ params }: { params: { id: number } }) => {
    return (
        <div>
            <SingleUniversity id={params.id}/>
        </div>
    );
};

export default page;