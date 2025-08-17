import {Box, Typography, Chip, Tooltip} from "@mui/material";
import {devWorkInfo} from "../../constants/details";
import CountUp from "react-countup";

const DevWorkCount = () => {
  return(
      <>
          {
              devWorkInfo.map((item, index) => (
                  <Box key={index} component="div" sx={{width:'100%',mb:1}}>
                      <Tooltip title={item.tooltipTitle} placement={"right"} arrow>
                          <Chip icon={item.icon} label={
                              <Typography variant={"body1"} color={"whitesmoke"} sx={{textAlign: "center"}}>
                                  <CountUp start={0} end={item.total} duration={2} />
                              </Typography>
                          } sx={{p:2, backgroundColor:item.color,width:'100%'}} />
                      </Tooltip>

                  </Box>
              ))
          }
      </>

  )
}

export default DevWorkCount;