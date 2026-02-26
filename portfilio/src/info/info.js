import self from '../img/self.png';
import p1 from '../img/p1.png';
import p2 from '../img/p2.png';
import p3 from '../img/p3.png';

// These colors will be used to style name on the homepage, the background of the picture, and some other accents throughout the site.
export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Suhas",
    lastName: "Indrigi",
    initials: "si",
    position: "a Front-end Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '🌎',
            text: 'based in the India'
        },
        {
            emoji: "💼",
            text: "Software Engineer 1 at Cygeniq India"
        },
        {
            emoji: "📧",
            text: "suhaspoo24@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/isuhas24",
            icon: "fab fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/suhas-indrigi-2ba411223/",
            icon: "fab fa-linkedin",
            label: 'linkedin'
        }
    ],
    bio: "Hello! I'm Suhas. I'm a Software Engineer 1 @ Cygneiq. I studied CompSci at Dr. Ambedkar Institute of Technology, I turn clean code into smooth experiences and pixels into purpose, and now I spend my days crafting sleek, fast, and user-focused interfaces. I obsess over the little details so users don’t have to — and I love building the web to feel as good as it looks.",
    skills: {
        frontend: [
            "HTML5",
            "CSS3",
            "SCSS",
            "JavaScript (ES6+)",
            "TypeScript",
            "ReactJS",
            "NextJS",
            "Chakra UI",
            "Material UI",
            "Styled Components",
            "React Query"
        ],
        backend: [
            "NodeJS",
            "NextJS API Routes",
            "REST APIs"
        ],
        databases: [
            "MongoDB",
            "PostgreSQL",
            "ArangoDB"
        ],
        dataEngineering: [
            "Apache NiFi",
            "ETL Pipelines",
            "Data Modeling",
            "Power BI",
            "Embedded Analytics"
        ],
        cloud: [
            "AWS Core Services"
        ],
        tools: [
            "Git",
            "Figma",
            "Keycloak",
            "Contentful CMS",
            "Contentstack CMS"
        ]
    },
    hobbies: [
        {
            label: 'advocating for sustainability & climate action',
            emoji: '🌍'
        },
        {
            label: 'growing and nurturing plants',
            emoji: '🪴'
        },
        {
            label: 'fitness & strength training',
            emoji: '🏋️‍♂️'
        },
        {
            label: 'jogging to clear the mind',
            emoji: '🏃‍♂️'
        },
        {
            label: 'playing badminton',
            emoji: '🏸'
        }
    ],
    projects: [
        {
            title: "AgriAid",
            live: "https://agri-aid-1001001.vercel.app/", 
            source: "https://github.com/MR-514/AgriAid.git", 
            image: p1
        },
        {
            title: "MyCarbon2",
            live: "https://cloud-computing-mini-project.s3.ap-south-1.amazonaws.com/mini_project/index.html",
            source: "https://github.com/isuhas24/CarbonFootprintAnalysisSystem",
            image: p2
        },
        {
            title: "Multi-Modal Content Writing Tool",
            live: "https://api-wiz-multi-modal-content-writing-tool.vercel.app/",
            source: "https://github.com/isuhas24/APIWiz-Multi-modal-Content-Writing-Tool",
            image: p3
        },
    ]
}