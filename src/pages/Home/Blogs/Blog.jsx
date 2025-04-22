

const Blog = ({ blog }) => {
    const { img, title, short_description } = blog;
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img className="w-full"
                        src={img}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{short_description}</p>
                    <div className="card-actions ">
                        <button className="btn bg-[#527A9A] text-white text-base w-full">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;