import Header from "./components/Header"
import Timeline from "./components/Timeline"
// import FilterPanel from "./components/FilterPanel" // enable later if needed

function App() {
  return (
    <div className="flex flex-col h-screen font-sans">
      <Header />
      <div className="flex flex-1">
        <Timeline />
        {/* <FilterPanel /> */}
      </div>
    </div>
  )
}

export default App
