import React from 'react';

const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
    return (
        <div className="w-[351px] bg-[#FFFFFF] mb-[7px] p-[15px] rounded-[8px] text-center mt-[4px] text-[18px] font-semibold">
      <h1>{title}</h1>      
        </div>
    );
};

export default Bookmark;