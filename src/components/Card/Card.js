import React from 'react'
import './Card.css';
import Price from '../Price';

const Card = ({ hotel }) => {
    const { name, photo, city, description, country, price } = hotel;
    return (
        <div className="column is-one-quarter-desktop is-half-tablet is-full-mobile">
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={
                            photo.charAt(0) !== '.' ? photo : 'https://via.placeholder.com/150'
                        } alt="Placeholder" />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left"></div>
                        <div className="media-content">
                            <p className="title is-4">{name}</p>
                            <p className="subtitle is-6">{city}</p>
                            <p className="subtitle is-6">{country}</p>
                        </div>
                    </div>
                    <div className="content">
                        <p>{description}</p>
                        <div className="Priceicons"><Price price={price} /></div>
                        <a href="#kk" className="button is-light">
                            RESERVAR
                        </a>

                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
