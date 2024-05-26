import DashboardCard from "@/components/DashboardCard"

const DUMMY_STATS = [
    {
        title: "Total Employees",
        change: "+1,234",
        changePerentage: "+15% from last month",
        icon:'users'
    },
    {
        title: "Active Employees",
        change: "+1,100",
        changePerentage: "+12% from last month",
        icon:'users'
    },
    {
        title: "Disabled Employees",
        change: "+134",
        changePerentage: "+3% from last month",
        icon:'users'
    },
    {
        title: "New Hires",
        change: "+75",
        changePerentage: "+5% from last month",
        icon:'users'
    },
    {
        title: "Number of Departments",
        change: "+25",
        changePerentage: "+2% from last month",
        icon:'building'
    },
    {
        title: "Number of Managers",
        change: "+150",
        changePerentage: "+4% from last month",
        icon:'users'
    },
    {
        title: "Number of Rooms",
        change: "+50",
        changePerentage: "+3% from last month",
        icon:'building'
    },

]


const Dashboard =() => {
  return (
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {DUMMY_STATS.map(
                (stats,
                index
            )=> {
                return <DashboardCard stats={stats} key={index} />
            })}
          </div>
        </main>
  )
}

export default Dashboard



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
  )
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
  )
}