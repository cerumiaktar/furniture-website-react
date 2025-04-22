import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Blog from "./Blog";


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    const [datalength, setDatalength] = useState([4])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    } ,[])
    return (
        <div className="container mx-auto mb-12">
            <div className='flex items-center justify-between mb-6'>
                <h1 className='text-2xl font-medium'>Blogs</h1>
                <Link to='/blogs'><p>See all</p></Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {
                    blogs.slice(0, datalength).map(blog=><Blog blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;