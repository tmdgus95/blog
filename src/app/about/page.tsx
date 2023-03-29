import Hero from '@/components/Hero';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'About Me',
    description: '소개 페이지',
};

export default function AboutPage() {
    const TITLE_CLASS = 'text-2xl font-bold text-gray-800 my-2';
    return (
        <>
            <Hero />
            <section className='bg-gray-100 shadow-lg p-8 m-8 text-center'>
                <h2 className={TITLE_CLASS}>Who Am I?</h2>
                <p>
                    개발을 사랑하는 프론트엔드 개발자
                    <br />
                    사람과 열정은 담는 웹앱을 만들고 있음
                </p>
                <h2 className={TITLE_CLASS}>Education</h2>
                <p>그린 컴퓨터 아트학원 (-now)</p>
                <h2 className={TITLE_CLASS}>Skills</h2>
                <p>
                    React, TypeScript
                    <br />
                    Git, VS Code
                </p>
            </section>
        </>
    );
}
