import React from 'react';

const NameCard = ({ data }) => {
  return (
    <div className='w-[250px] p-2 m-2 shadow-lg rounded-md flex cursor-pointer font-primary hover:scale-110 transition duration-300 ease-in-out hover:bg-green-100 overflow-hidden '>
      <div>
        <img className='rounded-full w-9 h-9' src={data?.img} alt='bio' />
      </div>
      <div className='pl-3'>
        <h2 className='font-primary font-bold text-[#515151] '>
          {data?.first_name}
        </h2>
        <h3 className='font-primary text-xs text-[#d4d4d4]'>{data?.email}</h3>
      </div>
    </div>
  );
};

export default NameCard;
