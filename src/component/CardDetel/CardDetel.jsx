import React, { useEffect, useState } from 'react';

const CardDetel = ({watchTime}) => {
    const [time,setTime] = useState(watchTime);
    useEffect(()=>{
        const getWatchTime = localStorage.getItem("watchTime")
        setTime(getWatchTime)
    },[watchTime])
    return (
        <div className='px-4 text-center sticky top-0 '>
            <div className='border-2 p-3 rounded-lg bg-teal-100 mb-6'>
                <p className='text-lg font-bold'>Spent time on read : {time}</p>
            </div>
            <div className='border-2 p-5 rounded font-bold bg-cyan-100'>
                <p>Bookmarked Blogs : 8</p>
            </div>
        </div>
    );
};

export default CardDetel;