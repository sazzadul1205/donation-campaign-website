import React from 'react';
import { Link } from 'react-router-dom';

const DonationBox = ({ card }) => {
    const { id, picture, title, category, category_bg, card_bg, text_button_bg, description, price } = card;

    const categoryStyle = {
        backgroundColor: category_bg,
        color: text_button_bg
    };

    const cardStyle = {
        backgroundColor: card_bg,
    };

    const textColorClass = { color: text_button_bg };


    return (
        <Link to={`/donationDetails/${id}`}>
            <div className={`card mw-[350px] bg-base-100 shadow-xl`} style={cardStyle}>
                <figure><img className='w-full' src={picture} alt={title} /></figure>
                <div className="card-body">
                    <p className={`mr-auto p-2 opacity-80 text-sm font-medium`} style={categoryStyle}>{category}</p>
                    <h2 className={`card-title text-xl font-semibold`} style={textColorClass}>
                        {title}
                    </h2>
                </div>
            </div>
        </Link>
    );
};

export default DonationBox;
