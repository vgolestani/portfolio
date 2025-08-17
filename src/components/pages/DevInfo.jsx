import {Typography} from "@mui/material";
import {KeyboardArrowLeftRounded} from "@mui/icons-material";


const Info = ({children}) => {
  return (
      <Typography variant={"body1"} color={"black"} sx={{textAlign: "left",mt:2}}>
          <KeyboardArrowLeftRounded sx={{verticalAlign: "bottom", color: "primary.main" }}/>
          {children}
      </Typography>
  )
}

const DevInfo = () => {
  return(
      <>
          <Info>نام و نام خانوادگی: وحید گلستانی</Info>
          <Info>سن: 36</Info>
          <Info>شهر: زرند</Info>
          <Info>آدرس ایمیل: vahid.golestani01@gmail.com</Info>
          <Info> تلفن: 09139981801</Info>
      </>
  )

}
export default DevInfo;