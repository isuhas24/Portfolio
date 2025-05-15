import { Box, Icon } from "@mui/material";
import IconLink from "./IconLink";

export default function ProjectBlock(props){
    const {image, live, source, title} = props;

    return(
        <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Box
                component={'img'}
                src={image.src}
                alt={'mockup'}
                width={'100%'}
            />
            <h1 style={{fontSize: '2rem'}}>{title}</h1>
            <Box
                display={'flex'}
                flexDirection={'column'}
                gap={'0.5rem'}
                alignItems={'center'}
                fontSize={'1.5rem'}
                py={'2rem'}
            >   
                <Box
                    p={1}
                    border={'1px solid black'}
                    borderRadius={'25px'}
                >
                    <IconLink link={live} title={'Live Demo'} icon={'fab fa-safari'}/>
                </Box>

                <Box
                    p={1}
                    border={'2px solid black'}
                    borderRadius={'25px'}
                >
                    <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
                </Box>
            </Box>
        </Box>
    )
}