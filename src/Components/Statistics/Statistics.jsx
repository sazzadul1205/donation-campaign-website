import React, { useEffect, useState } from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell, Label } from 'recharts';
import { useLoaderData } from 'react-router-dom';
import { getStoredDonationInfo } from '../../Utility/localStorage';

const Statistics = () => {
    const [displayMyDonation, setDisplayMyDonation] = useState([]);
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
            setDisplayMyDonation(donationApplied);
        }
    }, [displayMyDonation]);

    const [displayDonation, setDisplayDonation] = useState([]);

    useEffect(() => {
        fetch('card.json')
            .then((res) => res.json())
            .then((data) => {
                setDisplayDonation(data);
            });
    }, []);

    let totalDisplayDonation = 0;
    for (const donation of displayDonation) {
        totalDisplayDonation += donation.price;
    }

    let totalDisplayMyDonation = 0;
    for (const donation of displayMyDonation) {
        totalDisplayMyDonation += donation.price;
    }

    const data = [
        { name: 'Total Donation', value: totalDisplayDonation },
        { name: 'My Donation Amount', value: totalDisplayMyDonation },
    ];

    const colors = ['#FF444A', '#00C49F'];

    return (
        <div>
            <div className='text-center'>
                <ResponsiveContainer width='100%' height={600}>
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey='value'
                            nameKey='name'
                            cx='50%'
                            cy='50%'
                            outerRadius={200}
                            fill='#8884d8'
                            label={(entry) => `${(entry.percent * 100).toFixed(2)}%`}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Pie>
                        <Label
                            value={`Total: ${totalDisplayDonation + totalDisplayMyDonation}`}
                            position='centerBottom'
                            fontSize={20}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className='flex justify-center'>
                <div className='flex items-center'>
                    <p className='font-normal text-lg'>Your Donation</p>
                    <p className='w-24 h-3 ml-2 bg-[#00C49F]'></p>
                </div>
                <div className='flex items-center ml-4'>
                    <p className='font-normal text-lg'>Total Donation</p>
                    <p className='w-24 h-3 ml-2 bg-[#FF444A]'></p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
