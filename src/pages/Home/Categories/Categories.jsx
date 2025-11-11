import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import Category from "./Category";

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() =>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data => setCategories(data))
    } ,[])
    return (
        <div className='container mx-auto mb-12'>
            <div className='flex items-center justify-between mb-6'>
                <h1 className='text-2xl font-medium dark:text-black'>Category</h1>
                <p className="dark:text-[#333333]">See all</p>
            </div>
            <Marquee className="">
                {
                    categories.map((category) =><Category category={category}></Category>)
                }
            </Marquee>
            {/* <div className="mt-6 grid grid-cols-2 md:grid-cols-6 gap-6">
                <div className="card card-border border-[#092B4240] bg-[#527A9A] text-white">
                    <div className="card-body text-center">
                        <span className="text-5xl mx-auto"><PiChairLight /></span>
                        <h2 className="card-title mx-auto">Chair</h2>
                        <p>200 Item Available</p>
                    </div>
                </div>
                <div className="card card-border border-[#092B4240] bg-base-100 dark:bg-white">
                    <div className="card-body text-center">
                        <span className="text-5xl mx-auto text-[#092B42]"><MdOutlineChair /></span>
                        <h2 className="card-title mx-auto text-[#092B42]">Sofa</h2>
                        <p className="text-[#527A9A]">240 Item Available</p>
                    </div>
                </div>
                <div className="card card-border border-[#092B4240] bg-base-100 dark:bg-white">
                    <div className="card-body text-center">
                        <span className="text-5xl mx-auto text-[#092B42]"><MdOutlineTableBar/></span>
                        <h2 className="card-title mx-auto">Table</h2>
                        <p className="text-[#527A9A]">140 Item Available</p>
                    </div>
                </div>
                <div className="card card-border border-[#092B4240] bg-base-100 dark:bg-white">
                    <div className="card-body text-center">
                        <span className="text-5xl mx-auto text-[#092B42]"><MdBed /></span>
                        <h2 className="card-title mx-auto text-[#092B42]">Bed</h2>
                        <p className="text-[#527A9A]">300 Item Available</p>
                    </div>
                </div>
                <div className="card card-border border-[#092B4240] bg-base-100 dark:bg-white">
                    <div className="card-body text-center">
                        <span className="text-5xl mx-auto text-[#092B42]"><LuLamp /></span>
                        <h2 className="card-title mx-auto text-[#092B42]">Lamp</h2>
                        <p className="text-[#527A9A]">420 Item Available</p>
                    </div>
                </div>
                <div className="card card-border border-[#092B4240] bg-base-100 dark:bg-white">
                    <div className="card-body text-center">
                        <span className="text-5xl mx-auto text-[#092B42]"><PiDresser /></span>
                        <h2 className="card-title mx-auto text-[#092B42]">Cabinet</h2>
                        <p className="text-[#527A9A]">260 Item Available</p>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Categories;