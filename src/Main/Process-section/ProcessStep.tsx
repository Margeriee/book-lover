import React from 'react';
import './ProcessSection.css';

type processStepType = {
    img: any, // ToDo: change for svg from source file
    stepTitle: string,
    stepDescription: string
}

const ProcessStep = (props: processStepType) => {
    const {img, stepTitle, stepDescription} = props;

    return (
        <div className="processStep">

        </div>
    );
}

export default ProcessStep;
