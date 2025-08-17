import { Box, Divider} from "@mui/material";

import {SidebarHeader,SidebarFooter,SidebarTabs} from "./index";


const SidebarContent = () => {

  return(
      <Box
          // display={{ sm: "none" }}
          sx={{
              justifyContent: "center",
              textAlign: "center",
              mt: 2,
          }}
      >

          <SidebarHeader/>

          <Divider variant="middle" sx={{mt: 1}}/>

          <SidebarTabs />

          <Divider variant="middle" sx={{mt: 2}}/>

          <SidebarFooter/>
      </Box>
  )
}

export default SidebarContent