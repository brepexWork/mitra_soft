import React, {FC} from 'react';

interface IProps {
    title: string
    skills: string[]
}

const SkillsList:FC<IProps> = ({title, skills}) => {
    return (
        <div className={`mt-7`}>
            <div className={`lg:text-2xl text-xl uppercase font-medium text-custom_brown`}>{title}</div>

            <div className={`flex flex-wrap mt-1`}>
                {skills.map((skill, index) =>
                    <div className={`px-3 py-1 bg-custom_red text-colors-white mr-2 text-md sm:text-xl rounded-xl mt-2`}>{skill}</div>
                )}
            </div>
        </div>
    );
};

export default SkillsList;