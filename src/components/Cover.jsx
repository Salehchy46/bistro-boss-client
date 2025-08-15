import React from 'react';

const Cover = ({ bgImage, coverHeading, coverSubHeading }) => {
    return (
        <div
            className="hero bg-fixed min-h-[500px] p-20 my-24"
            style={{
                backgroundImage:
                    `url(${bgImage})`,
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{coverHeading}</h1>
                    <p className="mb-5">
                        {coverSubHeading}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Cover;