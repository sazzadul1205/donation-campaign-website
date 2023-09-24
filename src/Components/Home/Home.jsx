import React, { useEffect, useState } from 'react';
import DonationBox from '../DonationBox/DonationBox';


const Home = () => {

    const [card, setCard] = useState([])

    useEffect(() => {
        fetch('card.json')
            .then(res => res.json())
            .then(data => setCard(data));
    })

    const heroStyle = {
        backgroundImage: 'url("https://i.ibb.co/dJJvg79/background.png")',
        backgroundSize: 'full',
        backgroundPosition: 'center',
    };

    const overlayStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
    };

    return (
        <div>
            <div className="hero md:w-full h-[681px]" style={heroStyle}>
                <div className="hero-overlay" style={overlayStyle}></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-xl md:text-5xl font-bold">I Grow By Helping People In Need</h1>
                        <div className="flex flex-col md:flex-row ">
                            <input type="text" placeholder="Catagories" class="input input-bordered w-full max-w-xs" />
                            <button className="btn btn-accent bg-[#FF444A] hover:bg-red-600 text-base font-semibold">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24 md:mx-36 '>
                {
                    card.map(card => <DonationBox key={card.id} card={card}></DonationBox>)
                }

            </div>
        </div>
    );
};

export default Home;
