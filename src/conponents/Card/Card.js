import React from 'react';

const Card = props => {
    const { name, img, description } = props.card;

    return (
        <div className="col">
            <div className="card">
                <img src={img} className="card-img-top" height="200px" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;