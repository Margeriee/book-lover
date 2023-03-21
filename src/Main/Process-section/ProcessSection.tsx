import React from 'react';
import './ProcessSection.css';
import ProcessStep from './ProcessStep';
import {ReactComponent as ProfileSVG} from '../../svg/profile.svg';
import {ReactComponent as HeartEmptyVG} from '../../svg/heartEmpty.svg';
import {ReactComponent as ListOlSVG} from '../../svg/listOl.svg';
import {ReactComponent as StarEmptySVG} from '../../svg/starEmpty.svg';
import {ReactComponent as BookSVG} from '../../svg/book.svg';

const ProcessSection = () => {

    return (
        <div className="processSection">
            <div className="processSection-container">
                <ProcessStep img={<ProfileSVG />} stepTitle={"Log in"} stepDescription={"Log in and get access to special features"}/>
                <ProcessStep img={<ListOlSVG />} stepTitle={"Plan"} stepDescription={`Create your "wish to read" list and prioritise books`}/>
                <ProcessStep img={<StarEmptySVG />} stepTitle={"Rate"} stepDescription={"Rate and comment books that you read"}/>
                <ProcessStep img={<HeartEmptyVG />} stepTitle={"Like"} stepDescription={"Mark your favourites books"}/>
                <ProcessStep img={<BookSVG />} stepTitle={"Organize"} stepDescription={"Create and share your own libraries"}/>
            </div>
        </div>
    );
}

export default ProcessSection;
