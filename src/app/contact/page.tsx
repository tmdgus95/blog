import ContactForm from '@/components/ContactForm';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

export const metadata = {
    title: 'Contact Me',
    description: '나에게 메일 보내기',
};

export default function ContactPage() {
    const LINKS = [
        {
            icon: <AiFillGithub />,
            url: 'https://github.com/tmdgus95',
        },
    ];
    return (
        <section className='flex flex-col items-center'>
            <h2 className='text-3xl font-bold my-2'>Contact Me</h2>
            <p>8571053@naver.com</p>
            <ul className='my-2'>
                {LINKS.map((link, i) => (
                    <a
                        key={i}
                        href={link.url}
                        target='_blank'
                        rel='noreferrer'
                        className='text-5xl hover:text-yellow-400'
                    >
                        {link.icon}
                    </a>
                ))}
            </ul>
            <h2 className='text-3xl font-bold my-8'>Or Send me an email</h2>
            <ContactForm />
        </section>
    );
}
