import { Box, Grid } from "@mui/material";
import { info } from "@/info/info";
import ProjectBlock from "./ProjectBlock";

export default function Project({innerRef}){
    return(
        <Box
            id={'portfolio'}
            ref={innerRef}
        >
            <Grid
                container
                display={'flex'}
                justifyContent={'center'}
            >
                {
                    info.projects.map((project, index) => (
                        <Grid
                            xs={12}
                            md={6}
                            key={index}
                        >
                            <ProjectBlock image={project.image} live={project.live} source={project.source} title={project.title}/>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}