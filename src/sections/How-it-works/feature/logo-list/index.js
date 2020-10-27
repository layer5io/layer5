import React from "react";
import Howitworks from "./logo-list.style";

export default function LogoList({ logos }) {
    return (
        <Howitworks>
            <div className='root'>
                <div className='logos'>
                    {logos.map((logo, stableIdx) => (
                        <div
                            // eslint-disable-next-line react/no-array-index-key
                            key={stableIdx}
                        >
                            <img src={logo.url} alt={logo.alt} />
                        </div>
                    ))}
                </div>

                <p className='g-type-tag-label footerText'>
            Integrations coming soon
                </p>
            </div>
        </Howitworks>
    );
}