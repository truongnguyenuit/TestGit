import React from 'react'

const PostComponent = ({ title, description, img, user, time }) => {
  return (
    <div className="w-[430px] mx-6 my-2 flex flex-col items-center bg-white drop-shadow-md">
      <img className="w-full h-[280px] object-cover" src={img} alt="" />
        <h1 className="text-[24px] font-bold cursor-pointer">{title}</h1>
      
    </div>
  );
};

export default PostComponent