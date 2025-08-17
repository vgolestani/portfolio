import {Helmet} from "react-helmet-async";
import {Card, CardContent, Grid} from "@mui/material";
import {SettingsEthernetRounded, HomeRepairServiceRounded, SchoolRounded} from "@mui/icons-material";
import {useEffect, useState} from "react";
import {CustomDivider} from "../components/common";
import {DevEduTimeline, DevExpTimeline} from "../components/pages";


const Resume = ({helmetTitle}) => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        return () => {
            setLoading(false);
        }
    }, []);

    return (
        <Card
            sx={{
                height: "100vh",
                backgroundColor: "whitesmoke",
                overflowY: "scroll",
            }}
        >
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>

                <CustomDivider bColor={"error.main"} cColor={"error"} icon={<SettingsEthernetRounded/>} align={"center"}
                               text={"رزومه من"}/>

                <Grid container sx={{mt: 4}}>
                    <Grid size={{xs: 6}}>
                        <CustomDivider bColor={"warning.main"} cColor={"warning"} icon={<HomeRepairServiceRounded/>}
                                       align={"center"} text={"تجربیات"}/>
                        <DevExpTimeline loading={loading}/>

                    </Grid>

                    <Grid size={{xs: 6}}>
                        <CustomDivider bColor={"info.main"} cColor={"info"} icon={<SchoolRounded/>} align={"center"}
                                       text={"تحصیلات"}/>

                        <DevEduTimeline loading={loading}/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default Resume;
