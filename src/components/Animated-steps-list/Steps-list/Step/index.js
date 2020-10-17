import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { StepWrapper } from "./Step.style";

const Step =({ name, description, logos, onInViewStatusChanged }) => {
    const [ref, inView] = useInView({ threshold: 0.4 });
    const [inViewStatus, setInViewStatus] = useState(false);

    useEffect(() => {
        if (inView !== inViewStatus) {
            setInViewStatus(inView);
            onInViewStatusChanged(inView);
        }
    }, [inView, inViewStatus]);

    return (
        <StepWrapper ref={ref}>
            <h2>{name}</h2>
            <div className="description">{description}</div>
        </StepWrapper>
    );
};

export default Step;
