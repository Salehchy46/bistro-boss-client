import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({ bgImage, coverHeading, coverSubHeading }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={bgImage}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div
                className="hero bg-fixed min-h-[600px] p-28"
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl uppercase font-bold">{coverHeading}</h1>
                        <p className="mb-5">
                            {coverSubHeading}
                        </p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;