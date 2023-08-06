import React, { useEffect, useState } from 'react';
import './Body.css'
import Card from '../Card/Card';
import CardDetel from '../CardDetel/CardDetel';

const Body = ({handleButton,watchTime}) => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
        <div className='body mx-5 mt-5'>
            <div className=''>
               {
                data.map(singelData => <Card
                    singelData={singelData}
                    key={singelData.id}
                    handleButton={handleButton}
                    
                >
                </Card>)
               }
            </div>
            <div>
                <CardDetel watchTime={watchTime}></CardDetel>
            </div>
        </div>
    );
};

export default Body;