import { skillData } from "@/constants/data/skills";
import SkillItem from "./SkillItem";

const SkillsCategory = ({ data, animationTime, reverseAnimation }) => {
    return (
        <div className="scroll" style={{ "--time": animationTime }}>
            {[...Array(2)].map((_, index) => (
                <div className={`scroll-content ${reverseAnimation ? 'reverse' : 'normal'} ${index == 0 ? 'animate-loop-1 loop-delay-1' : 'animate-loop-2 loop-delay-2'}`} key={index}>
                    {data.map((skill, skillIndex) => (
                        <SkillItem key={skillIndex} skill={skill} />
                    ))}
                </div>
            ))}
        </div>
    );
};

const Skills = () => {

    const Backend = skillData.filter((item) => item.category === 'backend');
    const Frontend = skillData.filter((item) => item.category === 'frontend');
    const Utilities = skillData.filter((item) => item.category === 'utility');

    return (
        <div className="section__skills">
            <SkillsCategory data={Backend} animationTime="120s" reverseAnimation={false} />
            <SkillsCategory data={Frontend} animationTime="120s" reverseAnimation={true} />
            <SkillsCategory data={Utilities} animationTime="120s" reverseAnimation={false} />
        </div>
    );
};

export default Skills;
