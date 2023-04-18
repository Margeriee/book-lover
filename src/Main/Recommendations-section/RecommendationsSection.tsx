import React from 'react';
import BookCard from '../../dsl/BookCard';
import './RecommendationsSection.css';

const RecommendationsSection = () => {

    return (
        <div className="recommendationsSection">
            <div className="reccomendationSection-container">
                <BookCard />
            </div>
        </div>
    );
}

export default RecommendationsSection;
