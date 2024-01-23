import axios from "axios"
import Carousel from 'react-bootstrap/Carousel';
import React, {useState, useEffect} from 'react'

import mainImage from "../../assets/image/01.png"
import Product from '../Product/Product';
import Button from '../UI/Button/Button';
import "./Home.css"

const array = [
    {
        title: "Phone",
        price: 123,
        image: "https://asiastore.kg/image/cache/catalog/iphone/iphone15/15pro/bluetitanium/iphone_15_pro_max_blue_titanium_pdp_image_position-1__ww-en-450x450.jpg",
        id: 1,
    },
    {
        title: "Phone",
        price: 123,
        image: "https://asiastore.kg/image/cache/catalog/iphone/iphone15/15pro/bluetitanium/iphone_15_pro_max_blue_titanium_pdp_image_position-1__ww-en-450x450.jpg",
        id: 2,
    },
]

const API = "http://178.128.162.248:8070/api/v1/advertisement/ads/"

function Home() {
    const [product, setProduct] = useState([])

    useEffect(() => {
       const getProduct = async () => {
            const res = await axios.get(API)    
            // console.log(res)   
            
            if(res.status === 200) {
                setProduct(res.data.results)
            }
       } 

       getProduct()
    }, [])

    console.log(product)

  return (
    <div>
        <section className='home container'>
            <div className='home-sidebar'>
                <ul>
                    <li>Woman’s Fashion</li>
                    <li>Men’s Fashion</li>
                    <li>Electronics</li>
                    <li>Home & Lifestyle</li>
                    <li>Medicine</li>
                    <li>Sports & Outdoor</li>
                    <li>Baby’s & Toys</li>
                    <li>Groceries & Pets</li>
                    <li>Health & Beauty</li>
                </ul>
            </div>
            <div className='home-carousel'>
            <Carousel>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="First slide" /> */}
                    <img src={mainImage} alt='main image' />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="Second slide" /> */}
                    <img src={mainImage} alt='main image' />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="Third slide" /> */}
                    <img src={mainImage} alt='main image' />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
        </section>
        <section className='home-product container'>
            <div className='products'>
                {
                    product.map((product) => (
                        <Product key={product.id} item={product} />
                    ))
                }
            </div>
            <div className="buttonbek">

            <Button title="View All Products" pd={48}/>
            </div>
        </section>
    </div>
  )
}

export default Home