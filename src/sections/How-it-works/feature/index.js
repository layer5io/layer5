import React from "react";
import LogoList from "./logo-list";
import Howitworks from "./feature.style";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export default function Feature({
    title,
    description,
    logos,
    onInViewStatusChanged,
}) {
    const [ref, inView] = useInView({ threshold: 0.8 });
    const [inViewStatus, setInViewStatus] = useState(false);
    if (inView != inViewStatus) {
        setInViewStatus(inView);
        onInViewStatusChanged(inView);
    }

    return (
        <Howitworks>
            <div className='root' ref={ref}>
                <h4 className="g-type-display-4">{title}</h4>
                <p className="g-type-body">{description}</p>
                {logos ? <LogoList logos={logos} /> : null}
            </div>
        </Howitworks>

    );
}