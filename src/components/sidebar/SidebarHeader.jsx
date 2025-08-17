import {useState} from "react";
import { Box, Typography} from "@mui/material";
import avatar from "../../assets/Avatar.jpg"
import {RandomReveal} from "react-random-reveal";
import {alphabetPersian} from "../../constants/alphabetPersian";
import ThemeActionButton from "../ThemeActionButton";
import {CustomAvatar} from "../common";
import SocialMediaIcons from "../SocialMediaIcons";

const SidebarHeader = () => {
    const [start, setStart] = useState(false);
    return (
        <>
            <ThemeActionButton/>
            <Box sx={{display: {xs: 'none', sm: 'none', md: 'block'}}}>

                <CustomAvatar avatar={avatar} size={200} fallback={"VG"}/>
            </Box>
            <Typography variant="h6" color="#F93C92">
                <Typography variant="caption" color="tomato">
                    {"{{"}
                </Typography>
                <RandomReveal isPlaying characters={"وحید گلستانی"} duration={4} characterSet={alphabetPersian}
                              onComplete={() => setStart(true)}/>
                <Typography variant="caption" color="tomato">
                    {"}}"}
                </Typography>
            </Typography>

            {start && (<Typography variant="caption" color="gray">

                <RandomReveal isPlaying characters={"توسعه دهنده فول استک"} duration={4}
                              characterSet={alphabetPersian}/>

            </Typography>)}

            <SocialMediaIcons />

        </>
    )
}

export default SidebarHeader