import { CardTitle, CardHeader, CardContent, Card } from "../app/ui/card"


const DashboardCard = ({stats}) => {
    return <Card className="w-76 h-36">
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium">{stats.title}</CardTitle>
      {
        stats.icon !== "building" ? <UsersIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />:
        <BuildingIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
      }
      
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{stats.change}</div>
      <p className="text-xs text-gray-500 dark:text-gray-400">{stats.changePercentage}</p>
    </CardContent>
  </Card>
}

export default DashboardCard


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