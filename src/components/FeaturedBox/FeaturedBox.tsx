import axios from "axios"
import {  useEffect, useState } from "react"
import "./FeaturedBox.scss"
import { Link } from "react-router-dom"
import EbayBlue from "../../assets/div (2).png"
import { LiaArrowRightSolid } from "react-icons/lia"
import Featured from "../../assets/div (1).png"
import "swiper/css";
import "swiper/css/navigation";
import BestCare from '../../assets/div (3).png'

const Section = () => {
    const [products, setProducts] = useState<any>([])
    const [stuff, setStuff] = useState<any>([])
    useEffect(() => {
        axios("https://dummyjson.com/products/category/womens-bags")
            .then(response => setProducts(response.data.products))
            .catch(error => console.log(error))
    }, [])
    useEffect(() => {
        axios("https://dummyjson.com/products")
            .then(response => setStuff(response.data.products))
            .catch(error => console.log(error))
    }, [])
    console.log(products)
    return (
        <div className="middle-section">
            <div className="middle-section__wrapper">
                <div className="category">
                    {
                        products.map((product: any) => (
                            <Link to={`/category/${product.category}`} className="middle-section__card" key={product.id}>
                                <img src={product.images[0]} alt="" />
                                <h4>{product.title}</h4>
                                <h4>Price: ${product.price}</h4>
                            </Link>
                        ))
                    }
                </div>
                <div className="middle-section__header">
                    <p>Score these trending kicks</p>
                    <a href="#">See all <LiaArrowRightSolid /></a>
                </div>
            </div>
            <div className="featuree">
                <div className="feature">
                    <p>Featured</p>
                    <img src={EbayBlue} alt="" />
                    <h5>Deals made easy all year long.</h5>
                    <span>Free shipping. Best prices.</span>
                    <button>Get your thing <LiaArrowRightSolid /> </button>
                </div>
                <div>
                    <img src={Featured} alt="" />
                </div>
                <div>
                    <img src={BestCare} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Section