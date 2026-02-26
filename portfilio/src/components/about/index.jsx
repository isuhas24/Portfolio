import { Box } from "@mui/material";
import Terminal from "./Terminal";
import { info } from "@/info/info";
import Style from './About.module.scss';

export default function About({innerRef}){
    const firstName = info.firstName.toLowerCase();

    function aboutMeText() {
        return <>
            <p className={Style.p}>
                <span
                    style={{ color: info.baseColor }}
                >
                    {firstName}{info.lastName.toLowerCase()} $
                </span> cat 
                about {firstName} 
            </p>
            <p className={Style.p}>
                <span
                    style={{color: info.baseColor}}
                >
                    about{firstName} <span className={Style.green}>(main)</span> $</span> {info.bio}
            </p>
        </>
    }   

    function skillsText() {
        const skillCategories = [
            { label: "Frontend", key: "frontend" },
            { label: "Backend", key: "backend" },
            { label: "Databases", key: "databases" },
            { label: "Data Engineering & BI", key: "dataEngineering" },
            { label: "Cloud", key: "cloud" },
            { label: "Tools", key: "tools" }
        ];

        return (
            <>
                <p className={Style.p}>
                    <span style={{ color: info.baseColor }}>
                        {firstName}{info.lastName.toLowerCase()} $
                    </span> cd skills
                </p>

                <p className={Style.p}>
                    <span style={{ color: info.baseColor }}>
                        skills <span className={Style.green}>(main)</span> $
                    </span> ls
                </p>

                {skillCategories.map((category, index) => (
                    info.skills[category.key] && (
                        <div key={index}>
                            <p
                                className={Style.p}
                                style={{ color: info.baseColor, marginTop: "1rem" }}
                            >
                                {category.label}
                            </p>

                            <ul className={Style.skills}>
                                {info.skills[category.key].map((skill, i) => (
                                    <li className={Style.li} key={i}>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                ))}
            </>
        );
    }

    function miscText() {
        return <>
            <p className={Style.p}><span>{firstName}{info.lastName.toLowerCase()} $</span> cd hobbies/interests</p>
            <p className={Style.p}><span style={{color: info.baseColor}}>hobbies/interests <span className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {
                    info.hobbies.map((hobby, index) => (
                        <li className={Style.li} key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                    ))
                }
            </ul>
        </>
    }

    return(
        <Box
            ref={innerRef}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            mt={'5rem'}
            id={'about'}
        >
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}