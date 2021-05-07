import React from 'react'
// import { Link } from "react-router-dom"

function CardItem(props) {
    return (
        <>
            <li className="cards__item">
            <a className="cards__item__link"  target="_blank" rel="noopener noreferrer" href={props.href}> 
                {/* <Link className="cards__item__link" to={{pathname:props.pathname}} target="_blank"> */}
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <img src={props.src} alt="Project_Image"
                            className="cards__item__img" />
                    </figure>

                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{props.text}</h5>
                    </div>
                    </a>
                {/* </Link> */}
            </li>
        </>
    )
}

export default CardItem
