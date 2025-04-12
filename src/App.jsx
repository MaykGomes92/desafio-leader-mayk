import React from "react"
import FilterControls from "./components/FilterControls/FilterControls"
import { GlobalStorage } from "./Hook/GlobalContext"
import DataTable from "./components/DataTable/DataTable"
import SkeletonLoading from "./components/SkeletonLoading/SkeletonLoading"
function App() {
  const { allData, handleStoreId } = React.useContext(GlobalStorage)
  const [timeLoading, setTimeLoading] = React.useState(0)

  setTimeout(() => {
    setTimeLoading(1)
  }, 3000);
  if(timeLoading == 0){
    return (
      <SkeletonLoading />
    )
  }
  return (
    <div className="">
      <FilterControls />
      <div className="mt-10">
        <DataTable games={allData} stores={handleStoreId} />
      </div>
    </div>
  )
}

export default App
