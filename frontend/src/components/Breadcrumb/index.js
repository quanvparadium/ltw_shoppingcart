import './style.css'
import React from 'react'

export const Breadcrumb = (props) => {
    console.log(props.props.current)
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {
                    props.props.parent.map((item, index) => (
                        <li className="breadcrumb-item" key={index}><a href={item.link}>{item.name}</a></li>
                    ))
                }
                <li className="breadcrumb-item active" aria-current="page">{props.props.current}</li>
            </ol>
        </nav>
    )
}