import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import RatingForm from './RatingForm';

const AddReview = () => {
    return (
        <div>
            <SectionTitle heading={'GIVE A REVIEW...'} subTitle={'---Sharing is Caring!!!---'}></SectionTitle>
            <RatingForm></RatingForm>
        </div>
    );
};

export default AddReview;