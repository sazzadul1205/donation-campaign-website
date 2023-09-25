import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { saveJobApplication } from '../../../../../Milestone-8/Module-47/react-carear-hub/src/Utility/LocalStorage';

const DonationDetails = () => {
    const card = useLoaderData();

    const buttonBackground = {
        background: card.text_button_bg
    }

    return (
        <div className='md:mx-36'>
            <div className='relative card mw-[350px]'>
                <figure>
                    <img className='w-[100%] h-auto' src={card.picture} alt={card.title} />
                </figure>
                <div className='md:absolute bottom-0 left-0 w-[100%] py-9 pl-9 md:bg-black md:opacity-80'>
                    <button 
                    onClick={saveJobApplication()}
                    className="btn btn-secondary border-none opacity-100 text-xl font-semibold" 
                    style={buttonBackground}
                    >Donate $ {card.price}</button>
                </div>
            </div>
            <div className='my-14 '>
                <h1 className='text-[#0B0B0B] font-bold text-5xl'>{card.title}</h1>
                <p className='mt-6 font-normal text-base'>{card.description}</p>
            </div>
        </div>
    );
};

export default DonationDetails;
