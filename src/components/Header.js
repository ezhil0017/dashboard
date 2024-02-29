import React, { useState } from 'react';

const Header = ({ memberList, setFilteredMembers }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    console.log(searchQuery);
    console.log('Header comp', memberList);
    const filteredMembers = memberList.filter((member) =>
      member.first_name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredMembers(filteredMembers);
  };
  return (
    <div className='bg-[#88a7fb] h-14'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl text-white font-primary'>Team</h1>
        <div className=''>
          <input
            className='p-2 px-5 border border-gray-400 rounded-full w-60'
            type='text'
            placeholder='🔍 search'
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
