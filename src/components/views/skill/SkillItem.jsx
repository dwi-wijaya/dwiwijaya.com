const SkillItem = ({ skill, index }) => {
    return (
        <div className="hover:ring-1 sm:hover:ring-1 ring-offset-2  ring-offset-background  ring-stroke hover:!border-slate-300 dark:hover:!border-slate-500 text-sm sm:text-lg inline-flex items-center justify-center  gap-2 m-1 sm:m-2 border border-stroke bg-container rounded-lg px-4 py-2 transition-3s" key={index}>
            <i dangerouslySetInnerHTML={{__html: skill.icon}} />
            {skill.name}
        </div>
    );
};

export default SkillItem;
