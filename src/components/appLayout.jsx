import { SideBar } from "./sideBar"
import { MainContent } from "./mainContent"

export function AppLayout() {
    return (
      <div className="layout-global">
        <SideBar/ >
        <MainContent/ >
      </div>
    );
}