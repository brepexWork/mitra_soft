import React from 'react';
import SkillsList from "../components/SkillsList";

const AboutMePage = () => {

    const skills:string[] = ['HTML', 'CSS', 'SCSS', 'PHP', 'JavaScript', 'NodeJS', 'SQL', 'MVC']
    const technology:string[] = ['React', 'TypeScript', 'Redux', 'Redux-Toolkit', 'Express', 'JQuery', 'GIT']
    const libraries:string[] = ['react-select', 'react-hook-form', 'MaterialUI', 'Tailwind', 'Axios', 'react-date-range', 'react-router-dom', 'masonry', 'framer-motion']

    return (
        <div className={`container mx-auto px-4 lg:px-0 mt-8`}>
            <div className={`flex flex-col sm:flex-row items-center sm:items-start`}>
                <img
                    src="https://img.hhcdn.ru/photo/706239102.jpeg?t=1685687151&h=lpMkCFuwEGarR9DSOheJdw"
                    alt=""
                    className={`w-64`}
                />
                <div className={`ml-4`}>
                    <div className={`text-xl`}>Телефон: <a href="tel::+79059818973">+7 905 981-89-73</a></div>
                    <div className={`text-xl`}>Возраст: 21</div>
                    <div className={`text-xl`}>E-mail: <a href="mailto:brepex2@gmail.com">brepex2@gmail.com</a></div>
                    <div className={`text-xl`}>Город: Барнаул</div>
                </div>
            </div>

            <div>
                <div className={`text-2xl font-bold mt-4`}>Обо мне</div>

                <div className={`text-colors-gray-500 text-md sm:text-xl mt-2`}>
                    Я - Middle Front-end разработчик с более чем 4-летним опытом работы. В течение своей карьеры я успешно разработал множество проектов под Битрик24, а также работал над разработкой приложений и доработкой веб-сайтов на CMS Bitrix. Мой стек знаний включает React, TypeScript, SCSS, Tailwind, Redux, Redux-Toolkit, AsyncThunk, а также другие библиотеки, такие как MUI, react-hook-form, Axios и react-select. <br/> <br/> Помимо этого, у меня также есть опыт в разработке небольших API на Node.js с использованием Express и баз данных MySQL и Postgres. Я применял модульную архитектуру, включая контроллеры, модели и роутеры, и отлично владею работой с REST API. <br/> <br/>  Одним из моих сильных качеств является уверенное владение React/Redux-Toolkit, что позволяет мне разрабатывать SPA с использованием JS, TS и React. Кроме того, я имею глубокое понимание работы веб-сайтов, веб-серверов и JavaScript. Умею работать с git и имею опыт работы с препроцессором Sass.
                </div>
            </div>

            <SkillsList title={'Языки'} skills={skills} />
            <SkillsList title={'Технологии'} skills={technology} />
            <SkillsList title={'Библеотеки>'} skills={libraries} />
        </div>
    );
};

export default AboutMePage;