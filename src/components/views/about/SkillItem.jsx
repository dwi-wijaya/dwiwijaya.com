const SkillItem = ({ skill, index }) => {
    return (
        <div className=" hover:ring-offset-2  ring-offset-background hover:ring-2 hover:ring-stroke hover:!border-slate-300 dark:hover:!border-slate-500 transition-3s inline-flex items-center justify-center text-lg gap-2 m-2 border border-stroke bg-container rounded-lg px-4 py-2 transition-3s" key={index}>
            <i dangerouslySetInnerHTML={{__html: skill.icon}} />
            {skill.name}
        </div>
    );
};

export default SkillItem;
