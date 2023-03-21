import React from 'react';
import './ProcessStep.css';

type processStepType = {
    img: React.ReactNode,
    stepTitle: string,
    stepDescription: string
}

const ProcessStep = (props: processStepType) => {
    const {img, stepTitle, stepDescription} = props;

    return (
        <div className="processStep">
            {img}
            <span>{stepTitle}</span>
            <p>{stepDescription}</p>
        </div>
    );
}

export default ProcessStep;
