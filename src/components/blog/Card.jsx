import React from 'react'

const Card = (props) => {
    return (
        <div className="blog__card">
            <div className="blog__thumb">
                <a aria-label={props.title} href=""><img src={props.thumb} alt="" className="blog__img" /></a>
            </div>
            <div className="blog__details">
                <h3 className="blog__title">{props.title}</h3>
                <div className="blog__meta">
                    <span>{ props.date } &nbsp; • &nbsp; {props.author } </span>
                </div>
            </div>
        </div>
    )
}

export default Card