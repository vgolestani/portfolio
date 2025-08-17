import {useEffect, useState} from "react";
import MainLayout from "../Layouts/MainLayout";
import {Sidebar} from "../components/sidebar";
import PagesContainer from "./PagesContainer";
import {Page} from "../components/pages";
import {useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import {DrawerActionButton} from "../components/drawer";
import {Home, About, Resume, Courses, Comments,Contact} from "../pages"

function AppContainer() {
    const [pageNumber, setPageNumber] = useState(0)
    const [drawerOpen, setDrawerOpen] = useState(false)
    const theme = useTheme();
    const isMdUp=useMediaQuery(theme.breakpoints.up("md"));
    const preferDarkMode=useMediaQuery('(prefers-color-scheme: dark)');

    useEffect(() => {
        if (isMdUp) {
            setDrawerOpen(false)
        }
    }, [isMdUp]);

    const handlePageNumber = (event, newValue) => {
        setPageNumber(newValue)
    }


    const [mode, setMode] = useState()

    useEffect(() => {
        setMode(preferDarkMode ? "dark":"light")
    }, []);

    const handleThemeChange = () => {
        setMode(prevMode => prevMode==="light" ? "dark":"light")
    }

    return (
        <MainContext.Provider value={{pageNumber, handlePageNumber, drawerOpen, setDrawerOpen,handleThemeChange}}>
            <MainLayout mode={mode}>
                <SidebarContainer>
                    <Sidebar/>
                </SidebarContainer>
                <DrawerActionButton/>

                <PagesContainer>
                    <Page pageNumber={pageNumber} index={0}>
                        <Home helmetTitle={"وب سایت شخصی وحید گلستانی"}/>
                    </Page>
                    <Page pageNumber={pageNumber} index={1}>
                        <About helmetTitle={"وب سایت شخصی | درباره من"}/>
                    </Page>
                    <Page pageNumber={pageNumber} index={2}>
                        <Resume helmetTitle={"وب سایت شخصی | رزومه من"} />
                    </Page>
                    <Page pageNumber={pageNumber} index={3}>
                        <Courses helmetTitle={"وب سایت شخصی | دوره های من"} />
                    </Page>
                    <Page pageNumber={pageNumber} index={4}>
                        <Comments helmetTitle={"وب سایت شخصی | نظرات دانشجویان"} />
                    </Page>
                    <Page pageNumber={pageNumber} index={5}>
                        <Contact helmetTitle={"وب سایت شخصی | ارتباط با من"} />

                    </Page>
                </PagesContainer>
            </MainLayout>
        </MainContext.Provider>
    );
}

export default AppContainer;
