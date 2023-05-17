import React from 'react';
import img1 from '../../image/icons8-address-32.png';
import img2 from '../../image/icons8-email-30.png';
import img5 from '../../image/icons8-huawei-logo-32.png';
import img3 from '../../image/icons8-phone-32.png';
import img4 from '../../image/icons8-website-32.png';


const AllCards = ({info, onDelete}) => {

    

    if (!info) 
    return null;
    const {name, id,  username, email, address, phone, website, company} = info

    const handleDelete = ()=>{
        onDelete(id);
    }

    return (
        <div className=' bg-black text-white rounded-lg m-2 lg:m-3 lg:px-7 lg:py-5 '>
            <div className='text-center p-2 lg:mb-5'>
            <h1 className='text-3xl font-bold font-mono text-orange-400'>{name} </h1>
              <p className='justify-center  font-bold  mb-2'> User name: {username}</p>
             <span className="text-orange-400"> <hr  /></span>
            </div>
            <div className='lg:flex flex-row gap-16 p-5  items-center overflow-hidden'>
                <div>
                <div className='flex flex-row gap-3 items-center'>
                <img src={img2} alt="" />
                <p>{email}</p>
               
                </div>
               <div className='flex flex-row gap-3 items-center my-3'>
               <img src={img5} alt="" />
               <h1 className=''>{company.name}, {company.catchPhrase}</h1>
               </div>
                </div>
             
                
               
            <div>
                
              <div className='flex flex-row my-3 gap-3 items-center'>
                <img src={img3} alt="" />
              <p> {phone}</p>
              </div>
                <div className='flex flex-row gap-3 items-center'>
                    <img src={img1} alt="" />
                    <p>{address.street}, {address.suite}, {address.city}, {address.zipcode}</p>
                </div>
               <div className='flex flex-row my-3 gap-3 items-center'>
                <img src={img4} alt="" />
               <p>{website}</p>
               </div>
            </div>
            
        
        </div>
        <div className='flex justify-end lg:mt-4 p-3'>
        
            <button onClick={handleDelete} className=" btn btn-outline border-white text-orange-400 w-32 btn-sm ">Delete</button>
        </div>
        </div>
    );
};
 
export default AllCards;