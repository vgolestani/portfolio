import {createTheme} from "@mui/material/styles";

export const lightTheme = createTheme({
    direction: "rtl",
    palette:{
      mode:"light",
        primary:{
          main: "#64dcfa"
        },
        secondary:{
          main:"#a36ef5"
        }
    },
    typography: {
        fontFamily: 'tanha,Vazir, Roboto',
    },
})

export const darkTheme = createTheme({
    direction: "rtl",
    palette:{
      mode:"dark",
        primary:{
          main: "#64dcfa"
        },
        secondary:{
          main:"#a36ef5"
        }
    },
    typography: {
        fontFamily: 'tanha,Vazir, Roboto',
    },
})
