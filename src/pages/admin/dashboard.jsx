import DashboardCard from "@/components/DashboardCard";
import api from "@/services/api";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await api.get("/statistics");
        if (response.data) {
          setStats(response.data);
        }
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };
    fetchRooms();
  }, []);

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 md:gap-8">
          <DashboardCard
            stats={{
              title: "Total Employees",
              change: "+" + stats.totalUsers,
              icon: "users",
            }}
          />
          <DashboardCard
            stats={{
              title: "Active Employees",
              change: "+" + stats.nonDeletedUsers,
              icon: "users",
            }}
          />
          <DashboardCard
            stats={{
              title: "Disabled Employees",
              change: "+" + stats.deletedUsers,
              icon: "users",
            }}
          />
          <DashboardCard
            stats={{
              title: "Number of Departments",
              change: "+25",
              icon: "users",
            }}
          />
          <DashboardCard
            stats={{
              title: "Number of Rooms",
              change: "+" + stats.totalRooms,
              icon: "users",
            }}
          />
        </div>
      )}
    </main>
  );
};

export default Dashboard;

function BuildingIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
