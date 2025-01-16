import React from 'react';
import Cover from '../../shares/Cover/Cover';
import ContactForm from './ContactForm';
import SectionTitle from '../SectionTitle/SectionTitle';

const Contact = () => {
    return (
        <div>
            <Cover img={'https://i.ibb.co.com/tX4Gbcp/Rectangle1.png'} title={'CONTACT US'} text={'WOULD YOU LIKE TO TRY A DISH'}></Cover>
            <SectionTitle subTitle={'---Send Us a Message---'} heading={'CONTACT FORM'}></SectionTitle>
            <ContactForm/>
        </div>
    );
};

export default Contact;