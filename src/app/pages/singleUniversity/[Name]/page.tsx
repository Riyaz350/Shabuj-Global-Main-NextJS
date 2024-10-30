import SingleUniversity from '@/_components/shared/SingleUniversity/SingleUniversity';
import React from 'react';

const page = ({ params }:{params:{Name:string}}) => {
    return (
        <div>
            <SingleUniversity Name={params.Name}/>
        </div>
    );
};

export default page;