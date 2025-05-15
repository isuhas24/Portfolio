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
                about{firstName} 
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
        return <>
            <p className={Style.p}><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools</p>
            <p className={Style.p}><span style={{color: info.baseColor}}>skills/tools <span className={Style.green}>(main)</span> $</span> ls</p>
            <p className={Style.p} style={{color: info.baseColor}}> Proficient With</p>
            <ul
                className={Style.skills}
            >
                {info.skills.proficientWith.map((proficiency, index) => <li className={Style.li} key={index}>{proficiency}</li>)}
            </ul>
            <p className={Style.p} style={{color: info.baseColor}}> Exposed To</p>
            <ul
                className={Style.skills}
            >
                {info.skills.exposedTo.map((skill, index) => <li className={Style.li} key={index}>{skill}</li>)}
            </ul>
        </>
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