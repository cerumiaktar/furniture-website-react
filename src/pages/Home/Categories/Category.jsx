

const Category = ({ category }) => {
    const { id, img, title, quantity } = category;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-2xl pt-4 mx-6 border border-[#9fc3e0]">
                <figure>
                    <img
                        src={img}
                        alt="Shoes" />
                </figure>
                <div className="card-body text-center">
                    <h2 className="card-title mx-auto">{title}</h2>
                    <p>{quantity}</p>
                </div>
            </div>
        </div>
    );
};

export default Category;