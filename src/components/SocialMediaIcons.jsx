import {Box,IconButton} from "@mui/material";
import {GitHub,Telegram,Instagram,Twitter} from "@mui/icons-material";

const SocialMediaIcons = () => {
  return (
      <Box component={"div"} sx={{m:"0 auto",textAlign:"center"}}>
          <IconButton aria-label="Github" >
              <a href={"https://github.com/vgolestani"} target={"_blank"} rel={"noopener noreferrer"}>
                  <GitHub sx={{color: "grey"}} />
              </a>
          </IconButton>
          <IconButton aria-label="Instagram" >
              <a href={""} target={"_blank"} rel={"noopener noreferrer"}>
                  <Instagram sx={{color: "grey"}} />
              </a>
          </IconButton>
          <IconButton aria-label="Telegram" >
              <a href={""} target={"_blank"} rel={"noopener noreferrer"}>
                  <Telegram sx={{color: "grey"}} />
              </a>
          </IconButton>
          <IconButton aria-label="Twitter" >
              <a href={""} target={"_blank"} rel={"noopener noreferrer"}>
                  <Twitter sx={{color: "grey"}} />
              </a>
          </IconButton>
      </Box>
  )
}

export default SocialMediaIcons;