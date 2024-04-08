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

const Skills = ({skills}) => {

console.log(skills.length);
    if (skills && skills.length > 0) {
        const Backend = skills.filter((item) => item.type === 'backend');
        const Frontend = skills.filter((item) => item.type === 'frontend');
        const Utilities = skills.filter((item) => item.type === 'utility');
      console.log(Frontend);
        // Lakukan apa pun yang perlu Anda lakukan dengan hasil filter, misalnya menampilkan atau memprosesnya lebih lanjut.
        return (
            <div className="section__skills">
                <SkillsCategory data={Backend} animationTime="120s" reverseAnimation={false} />
                <SkillsCategory data={Frontend} animationTime="120s" reverseAnimation={true} />
                <SkillsCategory data={Utilities} animationTime="120s" reverseAnimation={false} />
            </div>
        );
    } else {
        return <></>
        console.error("Error: Skills data is not available or empty.");
    }
};

export default Skills;
