import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Card = ({ singelData, handleButton }) => {
    // console.log(handleButton)
    return (
        <div>
            <div>
                <img className='w-full rounded-lg' src={singelData.image} alt="" />
            </div>
            <div className='my-10'>
                <div className='flex justify-between items-center'>
                    <div className=' flex gap-3 items-center'>
                        <img className='w-14 h-14 rounded-full' src="/src/DSC_0251.jpg" alt="" />
                        <div>
                            <p>{singelData.name}</p>
                            <p>{singelData.realace_date}</p>
                        </div>
                    </div>
                    <span className='flex gap-2 items-center'>
                        <p>{singelData.red} min read</p>
                        <span onClick={()=>handleButton(singelData.red)}><FontAwesomeIcon icon={faBookmark} /></span>
                    </span>

                </div>
                <div>
                    <h3 className='text-4xl font-bold mt-2'>{singelData.descaption}</h3>
                </div>
            </div>
        </div>
    );
};

export default Card;