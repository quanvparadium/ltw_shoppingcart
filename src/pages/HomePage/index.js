import { useEffect, useState } from "react"
import { Product } from "../../components/Product"
// import { products } from "../../data"
// import { blog } from "../../data"
import banner from '../../assets/imgs/banner.png'
import banner2 from '../../assets/imgs/banner2.png'
import { getArticles } from '../../api/article'
import './style.css'
import { getDrinks } from "../../api"
import { getUserByName } from '../../api/user'
import { BlogContainer } from "../../components/Blog"

export const HomePage = () => {
    const [drinks, setDrinks] = useState([]);
    const [news, setNews] = useState([]);

    useEffect(() => {
        Promise.resolve(getUserByName()).then(data => {
            //console.log(data);
        });;
        Promise.resolve(getDrinks()).then(data => {
            //console.log(data);
            setDrinks(data);
        });
        Promise.resolve(getArticles()).then(data => {
            //console.log(data)
            setNews(data)
        });
    }, []);


    return (
        <div className="home-container">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={banner} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="10000">
                        <img src={banner2} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container row holic">
                <span><a href="/shop">Tea Holic</a></span>

                {
                    drinks.filter(item => item.type === 'tea').map((item, index) => (index <= 3) ? (
                        <div key={index} className="col-sm-12 col-md-6 col-lg-4 col-xl-3 center">
                            <Product product={item} />
                        </div>
                    ) : "")
                }
            </div>
            <div className="container row holic">
                <span><a href="/shop">Coffee Holic</a></span>

                {
                    drinks.filter(item => item.type === 'coffee').map((item, index) => (index <= 3) ? (
                        <div key={index} className="col-sm-12 col-md-6 col-lg-4 col-xl-3 center">
                            <Product product={item} />
                        </div>
                    ) : "")
                }
            </div>
            <div className="container holic row blog">
                <span><a href="/blog">Blog</a></span>
                {
                    news.slice(0, 3).map((item, index) => (
                        <div key={index} className="col-sm-12 col-md-6 col-lg-4 center">
                            <BlogContainer blog={item} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}