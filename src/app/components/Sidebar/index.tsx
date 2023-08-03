import { Drawer, Hidden } from "@material-ui/core"
import SidebarContent from "./components/SidebarContent"

export const Sidebar = ({ isOpenSidebar, setIsOpenSidebar }) => {
  return (
    <>
      <Hidden mdUp>
        <Drawer
          anchor={"left"}
          open={isOpenSidebar}
          onClose={() => setIsOpenSidebar(false)}
        >
          <SidebarContent />
        </Drawer>
      </Hidden>
      <Hidden smDown>
        <SidebarContent />
      </Hidden>
    </>
  )
}
