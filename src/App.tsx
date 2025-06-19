import Header from "./components/Header.tsx"
import ServiceCard from "./components/ServiceCard.tsx"
import SERVICES_DATA from "./data/SERVICES_DATA.ts"

const service = SERVICES_DATA[0]


function App() {



  return (
    <>
      <Header/>
            <ServiceCard
              key={service.id}
              service={service}
              isSelected={true}
              onToggle={()=>{}}
            />
    </>
  )
}

export default App
