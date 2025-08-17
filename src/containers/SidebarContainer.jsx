import {grey} from "@mui/material/colors";
import {Grid} from "@mui/material";
import {useTheme} from "@mui/material/styles";

const SidebarContainer = ({children}) => {
    const theme = useTheme();
    return (
        <Grid
            size={{xs: 0, sm: 0, md: 3, lg: 2, xl: 2}}
            sx={{
                backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[400],
                height: "100vh",
                overflowY: "auto",
                overflowX: "hidden"
            }}
        >
            {children}
        </Grid>
    )
}

export default SidebarContainer