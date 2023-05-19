import { useEffect, useState } from "react";
import Bookmark from "../Bookmark/Bookmark";
import ReadTime from "../Reading-Time/ReadTime";
import Blog from './blog/Blog'

// toastify import
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookmarks, setBookmark] = useState([]);
    const [readTime, setReadTime] = useState(0);
    useEffect(() => {
        fetch('fakedb.json').then(res => res.json()).then(data => { setBlogs(data)})
    }, [])

    const markReadhandeler = (RT) => {
        const newReadTime = readTime + RT
        setReadTime(newReadTime)
    }
    const BookmarkHandeler = bookmarkedBlog => {
        const exits = bookmarks.find(b => b.id === bookmarkedBlog.id)
        if (exits) {
            toast.warn("Blog Already Bookmarked");
        } else {
            toast.success("Blog Bookmarked", {
                theme: "colored",
            });
            const newBooked = [...bookmarks, bookmarkedBlog]
            setBookmark(newBooked)
        }
    }
    return (
        <>
            <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className=" rounded-xl  col-span-full md:col-span-2 lg:col-span-2 px-7 bg-indigo-100 py-8">
                    <div>
                        {
                            blogs.map(blog => <Blog key={blog.id} blog={blog} markReadhandeler={markReadhandeler} BookmarkHandeler={BookmarkHandeler} />)
                        }
                    </div>
                </div>

                <div className="rounded-xl h-80">
                    <div className="mb-5">
                        <ReadTime ReadTime={readTime} />
                    </div>
                    <div className="p-4 bg-gray-100 py-4 h-max rounded-xl">
                        <h2 className="text-2xl font-bold mb-6 border-b-2 pb-4 border-indigo-400"> Bookmarked Blogs : {bookmarks.length }</h2>
                        {
                            bookmarks.map(booked => <Bookmark booked={booked} key={booked.id} /> )
                        }
                        <ToastContainer />
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;