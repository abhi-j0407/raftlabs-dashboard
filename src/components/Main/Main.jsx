import Hero from "./Hero"
import History from "./History"
import Stats from "./Stats"

const Main = () => {
  return (
    <div className=" flex-grow">
      <Hero />
      <Stats />
      <History />
    </div>
  )
}

export default Main