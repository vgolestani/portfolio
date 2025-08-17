import {DevInfo, DevWorkCount, Skills} from "../components/pages";
import {Card, CardContent,  Grid} from "@mui/material";
import {CodeRounded, SelfImprovementRounded} from "@mui/icons-material";
import Avatar2 from "../assets/Avatar2.jpg"
import {Helmet} from "react-helmet-async";
import {CustomAvatar, CustomDivider} from "../components/common";


const About = ({helmetTitle}) => {
    return (
        <Card sx={{height: "100vh", backgroundColor: "whitesmoke", overflowY: "scroll"}}>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <Grid container sx={{mx: 3}}>
                    <Grid size={{xs: 12, sm: 12, md: 4}}>
                        <CustomAvatar avatar={Avatar2} size={250} fallback={"VG"}/>
                    </Grid>
                    <Grid size={{xs: 12, sm: 12, md: 8}}>
                        <CustomDivider bColor={"primary.main"} cColor={"primary"} icon={<CodeRounded/>} align={"left"} text={"توسعه دهنده فول استک و مدرس برنامه نویسی"} />
                        <Grid container>
                            <Grid size={{xs: 12, sm: 8, md: 9}}>
                                <DevInfo/>
                            </Grid>
                            <Grid size={{xs: 4, sm: 4, md: 3}} sx={{display:{"xs":"none","sm":"none","md":"block"},mt:4}}>
                                <DevWorkCount/>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
                <Grid container>
                    <Grid sx={{width: "100%", mt: 1}}>
                        <CustomDivider bColor={"secondary.main"} cColor={"secondary"} icon={<SelfImprovementRounded/>} align={"center"} text={"مهارت های من"} />

                        <Skills/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default About