import Header from "./Header";
import Seasons from "./Seasons";
import ChartComponent from "./Chart";
import "./UI.css"


export default function UI() {

  return (
    <div class="h-screen dark:bg-black">
      <Header />
      <ChartComponent />
      <Seasons />
    </div>
  )
}
