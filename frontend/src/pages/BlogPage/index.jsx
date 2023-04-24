import React, { useState } from "react";
import { Breadcrumb } from "../../components/Breadcrumb";
import './style.css'
import { useParams } from "react-router-dom";
// import { getBlogById } from "../../api/product";
import { useEffect } from "react";
// import { blog } from "../../data";
import { BlogContainer } from "../../components/Blog";
import { getArticles } from "../../api/article";

export const BlogPage = () => {

    const [art, setArt] = useState({});
    const [news, setNews] = useState([]);

    const match = useParams({ id: Number })

    useEffect(() => {
        Promise.resolve(getArticles()).then(data => {
            setNews(data)
        })
    }, [])

    useEffect(() => {
        if (news)
        {
            setArt(news[match.id]);
        }
        // if (response.code === 404)
        // {
        //     throw new Error(response.message);
        // }
        // setData(response.data);

    }, [match.id, news]);

    const breadcrumb = {
        parent: [
            {
                name: "Home",
                link: "/home"
            },
            {
                name: "Blog",
                link: "/blog"
            },
        ]
    }

    return (
        <div className="blogpage-container">
            <div className="blogpage-header"
                style={{ backgroundImage: `url(${art ? art.image : ""})` }}>
            </div>
            <div className="blogpage-wrapper">
                <Breadcrumb props={breadcrumb} />
                <h1>{art ? art.title : ""}</h1>
                <p>{art ? art.content : ""}</p>
                <img src={art ? art.image : ""} alt="art-img" />
            </div>

            <div className="container holic row blog">
                <span>Nội dung liên quan</span>
                {
                    news.map((item, index) => index <= 3 ? (
                        <div key={index} className="col-sm-12 col-md-6 col-lg-4 center">
                            <BlogContainer blog={item} />
                        </div>
                    ) : "")
                }
            </div>
        </div >
    )
}