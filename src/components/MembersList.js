import React, { useEffect, useState } from 'react';
import NameCard from './NameCard';
import Header from './Header';
import { GET_MOCK_DATA } from '../utils/Helper';

const MembersList = () => {
  const [memberList, setMemberList] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  useEffect(() => {
    getMembers();
  }, []);

  async function getMembers() {
    const data = await fetch(GET_MOCK_DATA);
    const json = await data?.json();
    console.log(json);
    setMemberList(json);
    setFilteredMembers(json);
  }
  const filterNamesByRole = (role) => {
    return filteredMembers.filter((member) => member.role === role);
  };
  console.log('filter names: ', filteredMembers);
  return (
    <div>
      <Header memberList={memberList} setFilteredMembers={setFilteredMembers} />
      <h2 className='font-primary text-[#8b8ca5] text-2xl'>Administators</h2>
      <div className='flex flex-wrap'>
        {filterNamesByRole('admin').map((member, index) => {
          return <NameCard key={index} data={member} />;
        })}
      </div>
      <h2 className='font-primary text-[#8b8ca5] text-2xl'>Members</h2>
      <div className='flex flex-wrap'>
        {filterNamesByRole('member').map((member, index) => {
          return <NameCard key={index} data={member} />;
        })}
      </div>
    </div>
  );
};

export default MembersList;
