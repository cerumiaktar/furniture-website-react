import { useEffect, useState } from "react";
import AllBlog from "./AllBlog";


const AllBlogs = () => {
    const [allBlogs, setAllBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setAllBlogs(data))
    }, [])
    return (
        <div>
            <div
                className="hero h-[400px]"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co.com/b5wRN8Qx/image-3.png)",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Blogs</h1>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 container mx-auto mt-12 mb-12">
                {
                    allBlogs.map(allBlog => <AllBlog allBlog={allBlog}></AllBlog>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;