import React, { useEffect, useState } from 'react';
import { getStoredDonationInfo } from '../../Utility/localStorage';
import { useLoaderData } from 'react-router-dom';
import DonationCard from '../DonationCard/DonationCard';

const Donation = () => {
    const [displayDonation, setDisplayDonation] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const donations = useLoaderData();

    useEffect(() => {
        const storedDonationId = getStoredDonationInfo();
        if (donations.length > 0) {
            const donationApplied = [];
            for (const id of storedDonationId) {
                const donation = donations.find((donation) => donation.id === id);
                if (donation) {
                    donationApplied.push(donation);
                }
            }
            setDisplayDonation(donationApplied);
        }
    }, [donations]);

    // Function to handle "Show All" button click
    const handleShowAllClick = () => {
        setShowAll(true);
    };

    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:mx-36'>
                {displayDonation.slice(0, showAll ? displayDonation.length : 4).map((donation) => (
                    <DonationCard key={donation.id} donation={donation}></DonationCard>
                ))}
            </div>
            {!showAll && (
                <div className='text-center mt-14'>
                    <div className='flex justify-center'>
                        <button
                            className='btn btn-secondary bg-[#009444] border-none text-base font-semibold'
                            onClick={handleShowAllClick}
                        >Show All</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Donation;
