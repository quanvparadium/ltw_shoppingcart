import { useEffect } from 'react'
import { formatStringDate } from '../../ultil'
import './style.css'

export const BlogContainer = ({ blog }) => {
    // useEffect(() => {
    //     console.log(blog.date)
    // })

    return (
        <a href={`/blog/${blog.article_id}`} className="link">
            <div className='blog-wrapper'>
                <div className='blog-wrapper__content'>
                    <div className='blog-background' style={{ backgroundImage: `url(${blog.image})` }}>
                    </div>
                    <h5 className='blog-title'>{blog.title}</h5>
                    <div className='blog-date'>
                        {formatStringDate(blog.date)}
                    </div>
                    <span className='blog-content'>
                        {blog.content}
                    </span>
                </div>
            </div>
        </a>
    )
}

export const BlogContainerGrid = ({ blog }) => {
    return (
        <a href={`/blog/${blog.article_id}`} className="link">
            <div className='blog-wrapper' >
                <div className='blog-wrapper__content blog-grid row'>
                    <div className='bloggrid-background col-12 col-md-5' style={{ backgroundImage: `url(${blog.image})` }}>
                    </div>
                    <div className='col-12 col-md-7'>
                        <h5 className='bloggid-title'>{blog.title}</h5>
                        <div className='blog-date'>
                            {formatStringDate(blog.date)}
                        </div>
                        <span className='bloggrid-content'>
                            {blog.content}
                        </span>
                    </div>
                </div>
            </div>
        </a>
    )
}