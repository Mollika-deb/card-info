import React, { useEffect, useState } from 'react';
import AllCards from './AllCards';

const Cards = () => {

    
    const [infos, setInfos] = useState([])

    // useEffect(()=>{
    //     fetch("data.json")
    //     .then(res => res.josn())
    //     .then(data => console.log(data))
    // },[])

    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => setInfos(data))

    }, [])

    const onDelete = (id) => {
        const updatedCards = infos.filter((card) => card.id !== id);
        setInfos(updatedCards);
      };


    return (
        <div className='grid lg:grid-cols-2'>
            {
                infos.map(info => <AllCards
                info = {info}
                key ={info.id}
                onDelete = {onDelete}
                ></AllCards>)
            }
        </div>
    );
};

export default Cards;