import React from "react";

const SkillItem = ({ skill, index }) => {
    return (
        <span key={index}>
            <i dangerouslySetInnerHTML={{__html: skill.icon}} />
            {skill.label}
        </span>
    );
};

export default SkillItem;
