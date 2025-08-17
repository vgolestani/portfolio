import {Box, Chip, Divider, LinearProgress, Typography,Badge} from "@mui/material";
import {grey} from "@mui/material/colors";

const Skill = ({icon,color,name,value}) => {
    return (
        <>
            <Divider textAlign={"left"} sx={{"&::before, &::after": {borderColor: `${color}.main`}, mt:3,} }>
                <Chip
                    icon={
                        <Box component="img"
                             src={icon}
                             sx={{height: 30}}
                        />}
                    color={color}
                    label={name}
                    sx={{color: "#000", p: 2}}
                />
            </Divider>
            <Box sx={{display: "flex", alignItems: "center"}}>
                <Box sx={{width:"100%",mr:2,ml:2}}>
                    <LinearProgress variant="determinate" value={value} color={color} sx={{height:8,borderRadius:2}}></LinearProgress>
                </Box>
                <Box sx={{minWidth: 35, ml:1}}>

                    <Typography variant={"body1"} color={"blue"}>
                        <Badge variant={"standard"} color={color} badgeContent={
                            `${Math.round(value)}%`
                        } />
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default Skill