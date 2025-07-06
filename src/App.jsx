
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
function App() {
 const [bookmarks,setBookmarks]=useState([]) 
 const [markread,setMarkread]=useState(0)

 const handleAddToBookMark=blog=>{
  const newBookmark=[...bookmarks,blog];
setBookmarks(newBookmark);
 }
 const handleMarkread=reading_time=>{
  const newmarkread=reading_time+markread;
  setMarkread(newmarkread);
 }
 return (
    <div className='max-w-screen-xl mx-auto'> 
<Header></Header>
<div className='md:flex'>
  <Blogs handleAddToBookMark={handleAddToBookMark} handleMarkread={handleMarkread}></Blogs>
  <Bookmarks bookmarks={bookmarks} markread={markread}></Bookmarks>
</div>

    </div>
  )
}

export default App
