import { Link } from "react-router-dom"
import gymImage from "../../public/GymHomePagePic.png"

export function Home() {
    return (
    <>
        <h1>Welcome To The Best Supplement Store</h1>
            <img src={gymImage} />
            <Link to="/Products">
                <button>
                    View All Products
                </button>     
            </Link>
            
    </>
    )
}