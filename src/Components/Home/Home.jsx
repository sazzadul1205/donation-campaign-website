import React, { useEffect, useState } from 'react';
import DonationBox from '../DonationBox/DonationBox';

const Home = () => {
    const [cards, setCards] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        fetch('card.json')
            .then((res) => res.json())
            .then((data) => {
                setCards(data);
                setSearchResult(data);
            });
    }, []);

    const heroStyle = {
        backgroundImage: 'url("https://i.ibb.co/dJJvg79/background.png")',
        backgroundSize: 'full',
        backgroundPosition: 'center',
    };


    const handleSearchClick = () => {
        const filteredCards = cards.filter((card) =>
            card.category.includes(searchText)
        );
        setSearchResult(filteredCards);
    };

    return (
        <div>
            <div className="hero md:w-full h-[700px]" style={heroStyle}>
                <div className="hero-overlay bg-white opacity-95"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-xl md:text-5xl font-bold">
                            I Grow By Helping People In Need
                        </h1>
                        <div className="flex flex-col md:flex-row">
                            <input
                                type="text"
                                placeholder="Categories"
                                className="input input-bordered w-full max-w-xs"
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                            <button
                                className="btn btn-accent bg-[#FF444A] hover:bg-red-600 text-base font-semibold"
                                onClick={handleSearchClick}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24 md:mx-20 lg:mx-36">
                {searchResult.map((card) => (
                    <DonationBox key={card.id} card={card}></DonationBox>
                ))}
            </div>
        </div>
    );
};

export default Home;
