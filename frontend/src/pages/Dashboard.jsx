import React, { useEffect } from "react";
import DashboardSidebar from "@/components/shared/DashboardSidebar";
import { useLocation } from "react-router-dom";
import { DashboardProfile } from "@/components/shared/DashboardProfile";
import { BottomNavBar } from "@/components/shared/BottomNavBar";

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");

    // console.log(tabFromUrl);

    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row w-full">
      {/* Sidebar */}
      <div className="hidden md:block">
        <DashboardSidebar />
      </div>

      <BottomNavBar />

      {/* profile */}
      <div>{tab === "profile" && <DashboardProfile />}</div>
    </div>
  );
};

export default Dashboard;
