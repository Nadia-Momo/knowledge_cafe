import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,markread}) => {
    return (
<div className="md:w-1/3 ml-[20px]">
<div className="bg-purple-200 border-2 border-[#6047EC] pt-[18px] pb-[18px] w-[411px]  mt-[32px]">
<h1 className="font-bold text-[16px] text-[#6047EC] text-center">Spent time on read :{markread} </h1>
</div>
<div>
<div className="bg-gray-200  pt-[30px] mt-[24px] pl-[30px] h-[1200px]" >
<h1 className="text-[20px] font-bold">Bookmarked Blogs :{bookmarks.length} </h1>
  {
bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark} ></Bookmark>)
 }
 </div>
 </div>
 </div>
    );
};

export default Bookmarks;