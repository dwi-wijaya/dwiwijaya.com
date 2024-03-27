import React from "react";
import Data from "./Data";
import SkillItem from "./SkillItem";

const SkillsCategory = ({ data, animationTime, reverseAnimation }) => {
    return (
        <div className="scroll" style={{ "--time": animationTime }}>
            {[...Array(2)].map((_, index) => (
                <div className={`${reverseAnimation ? 'reverse' : 'normal'}`} key={index}>
                    {data.map((skill, skillIndex) => (
                        <SkillItem key={skillIndex} skill={skill}  />
                    ))}
                </div>
            ))}
        </div>
    );
};

const Skills = () => {

    const Backend = Data.filter((item) => item.category === 'backend');
    const Frontend = Data.filter((item) => item.category === 'frontend');
    const Utilities = Data.filter((item) => item.category === 'utility');

    return (
        <div className="section__skills">
            <SkillsCategory data={Backend} animationTime="120s" reverseAnimation={false} />
            <SkillsCategory data={Frontend} animationTime="120s" reverseAnimation={true} />
            <SkillsCategory data={Utilities} animationTime="120s" reverseAnimation={false} />
        </div>
    );
};

export default Skills;
