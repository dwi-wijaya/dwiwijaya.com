const SkillItem = ({ skill, index }) => {
    return (
        <span className="inline-flex items-center justify-center text-lg gap-2 mx-2 border border-stroke bg-container rounded-lg px-4 py-2 transition-3s" key={index}>
            <i dangerouslySetInnerHTML={{__html: skill.icon}} />
            {skill.label}
        </span>
    );
};

export default SkillItem;
