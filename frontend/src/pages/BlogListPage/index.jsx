import './style.css'
import React, { useState } from 'react'
import { Breadcrumb } from '../../components/Breadcrumb'
// import { blog } from '../../data'
import { BlogContainerGrid } from '../../components/Blog'
import { useEffect } from 'react'
import { getArticles } from '../../api/article'

export const BlogListPage = () => {
    const breadcrumb = {
        parent: [
            {
                name: "Trang chủ",
                link: "/home"
            }
        ],
        current: "Bài viết"
    }
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [])

    const [news, setNews] = useState([]);

    useEffect(() => {
        Promise.resolve(getArticles()).then(data => {
            console.log(data)
            setNews(data)
        });
    }, [])

    // console.log([...blog].filter(i => i.article_id === 0))
    return (
        <div className='bloglist-container container'>
            <Breadcrumb props={breadcrumb} />
            <div className='bloglist-tea'>
                <h4>Tea Holic</h4>
                <div className='row'>
                    <div className='col-12 col-lg-6 blg-img'
                        style={{ backgroundImage: `url(https://file.hstatic.net/1000075078/file/teaholic_3f320cac87814da0912f45ccfebd4e0e.jpg)`, borderRadius: 10 }}>
                    </div>
                    <div className='col-12 col-lg-6 row'>
                        {
                            news.map((item, index) => index < 3 ? (
                                <div key={index}>
                                    <BlogContainerGrid blog={item} />
                                </div>
                            ) : "")
                        }
                    </div>
                </div>
            </div>
            <div className='bloglist-tea'>
                <h4>Coffee Holic</h4>
                <div className='row'>

                    <div className='col-12 col-lg-6 row'>
                        {
                            news.map((item, index) => index >= 3 ? (
                                <div key={index}>
                                    <BlogContainerGrid blog={item} />
                                </div>
                            ) : "")
                        }
                    </div>
                    <div className='col-12 col-lg-6 blg-img'
                        style={{ backgroundImage: `url(https://file.hstatic.net/1000075078/file/blog_94b05e56224646bc86c6e72c73ac4258.jpg`, borderRadius: 10 }}>
                    </div>
                </div>
            </div>
        </div>
    )
}