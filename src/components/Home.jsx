import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";
import { useGetAllProductsQuery } from "../features/productsApi";
import { useDispatch } from "react-redux";

const Home = () => {
    const { data, error, isLoading } = useGetAllProductsQuery();
    const dispatch = useDispatch();
    const navigate = useNavigate()


    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        navigate("/cart")
    }
    return (
        <div className="home_container">
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>An error occured..</p>
            ) : (
                <>
                    <h2>New Arrivals</h2>
                    <div className="products">
                        {data?.map((product) => (
                            <div key={product.id} className="product">
                                <div className="product_title">
                                    <h3>{product.title}</h3>
                                </div>
                                <div className="product_image">
                                    <img src={product.image} alt={product.title} />
                                </div>
                                <div className="details">
                                    <span className="price">${product.price}</span>
                                </div>
                                <button onClick={() => handleAddToCart(product)}> Add To Cart </button>
                            </div>
                        ))}
                    </div>
                </>
            )
            }

            <div className="footer">
                <span>H&M Cart dummy by Prankishor </span>
            </div>
        </div>
    )
}

export default Home
