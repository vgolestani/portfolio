import SidebarContent from "./SidebarContent";
import {SidebarDrawer} from "../drawer";

const Sidebar = () => {
    return (
        <>
            <SidebarContent />

            <SidebarDrawer />
        </>

    );
};

export default Sidebar;

// <Tab
//     label={
//         <div>
//             <Typography variant="subtitle2" color="white">
//                 <HomeRounded
//                     sx={{ verticalAlign: "middle", mx: 2 }}
//                 />
//                 خانه
//             </Typography>
//         </div>
//     }
//     // icon={<HomeRounded />}
//     // iconPosition="start"
// />
