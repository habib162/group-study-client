import React, { useEffect, useState } from 'react';
import { useLottie } from 'lottie-react';
import faqsImge from '../../assets/Lottie/faqs.json';
import { useLoaderData } from 'react-router-dom';

const FAQs = () => {
    const options = {
        animationData: faqsImge,
        loop: true,
    };
    const { View } = useLottie(options);
    const [loadedFaqs, setLoadedFaqs] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/faqs')
            .then(res => res.json())
            .then(data => {
                setLoadedFaqs(data)
                setLoading(false)
            })
    }, [])

    return (
        <div>
            <h1 className='py-10'>Frequently Asked Questions (FAQ)</h1>
            {
                loading && <div className="flex justify-center py-20">
                    <span className="loading loading-spinner text-success"></span>
                </div>
            }
            <div className="flex justify-evenly">
                <div className="grid grid-cols-1 md:grid-cols-4">
                    {
                        loadedFaqs && loadedFaqs.map((faqs, index) => (

                            <div key={index} className="collapse collapse-plus bg-base-200">
                                <input type="radio" name={`my-accordion-${index}`} checked="checked" />
                                <div className="collapse-title text-xl font-medium">
                                    {faqs.question}
                                </div>
                                <div className="collapse-content">
                                    <p>{faqs.answer}</p>
                                </div>
                            </div>

                        ))}
                </div>
                <div>{View}</div>
            </div>
        </div>
    );
};

export default FAQs;
