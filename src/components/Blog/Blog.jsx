import { IoBookmarkOutline } from "react-icons/io5";
const Blog = ({blog,handleAddToBookMark,handleMarkread}) => {
const {cover,title,author_img,author,posted_date,reading_time,hashtags}=blog;
return (
<div className="border-b-2 border-gray-500 mb-[40px] mt-[32px]">
  <img src={cover} alt="" className="rounded-[12px] w-full"/>
 <div className="flex gap-[24px] mt-[24px] mb-[16px]" >
 <img src={author_img} alt="" className="w-[60px] h-[60px]"/>
<div className="flex justify-between gap-[500px]">
    <div>
<h4 className="font-bold text-[24px]">{author}</h4>  
  <p className="font-semibold text-[16px] text-gray-400">{posted_date}</p>
</div>
<div className="flex mt-[20px] w-full">
<p>{reading_time} min read</p>
    <button  onClick={()=>handleAddToBookMark(blog)} className="ml-[20px] w-[15px] h-[18px] text-2xl"> <IoBookmarkOutline /></button>
</div>
</div>
</div>
    <h1 className="font-bold text-[40px] mb-[16px]">{title}</h1>
    {
hashtags.map(hashtag=><span className="text-gray-500 ml-[4px]"> {hashtag}</span>)
    }
    <button onClick={()=>handleMarkread(reading_time)} className="text-[#6047EC] border-b-2 border-[#6047EC] block mb-[33px] mt-[20px]">Mark as read</button>
        </div>       
    );
};

export default Blog;