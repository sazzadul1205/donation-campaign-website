import { Link } from 'react-router-dom';

const DonationCard = ({ donation }) => {
    const { id, picture, title, category, category_bg, card_bg, text_button_bg, description, price } = donation;

    const categoryStyle = {
        backgroundColor: category_bg,
        color: text_button_bg,
        padding: '4px 8px',
    };

    const cardStyle = {
        backgroundColor: card_bg,
    };
    const buttonBackground = {
        background: text_button_bg,
    };

    const textColorClass = { color: text_button_bg };

    return (
        <div>
            <div className='flex flex-col lg:flex-row' style={cardStyle}>
                    <img className='w-full lg:w-auto h-auto' src={picture} alt={title} />
                <div className='my-7 pl-5'>
                    <p className={`mr-auto p-2 text-sm font-medium w-16 mb-2`} style={categoryStyle}>{category}</p>
                    <h2 className={`text-2xl font-semibold mb-2`} style={textColorClass}>{title}</h2>
                    <p className='text-base font-semibold mb-3' style={textColorClass}>$ {price}</p>
                    <Link to={`/donationDetails/${id}`}>
                        <button className="btn btn-secondary border-none opacity-100 text-lg font-semibold" style={buttonBackground}>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;
