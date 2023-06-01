import React from 'react';
import SkillsList from "../components/SkillsList";

const ProjectPage = () => {

    const technology:string[] = ['React', 'Typescript', 'Redux', 'Redux-Toolkit', 'RTK Query']
    const library = ['react-select', 'tailwind', 'react-router-dom', 'MaterialUI', 'Axios']

    return (
        <div className={`container mx-auto px-4 lg:px-0 mt-6`}>
            <div className={`lg:text-3xl font-bold text-2xl underline`}>Информация об проекте</div>

            <SkillsList
                title={'Используемые технологии в проекте:'}
                skills={technology}
            />

            <SkillsList title={'Используемые библеотеки'} skills={library} />

            <div className={`text-xl mt-4 text-colors-gray-500`}>Вместо Redux-Saga в проекте я использовал redux-toolkit, так как с redux-saga я знаком не так хорошо как с redux-toolkit. Вместо react-bootstrap я использовал MaterialUI, так как раньше с react-bootstrap не работал. <span className={`font-bold`}> Все эти технологии не составит труда выучить. Но пока использовал другие, что бы показать умения в работе с альтернативными технологиями!</span></div>

            <div className={`mt-4 text-2xl text-custom_brown font-bold`}>Время затраченное на проект: <span className={`text-2xl font-bold text-custom_red`}>-</span></div>
        </div>
    );
};

export default ProjectPage;