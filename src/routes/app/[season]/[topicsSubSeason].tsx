import { useParams } from "@solidjs/router"
import { Dynamic } from "solid-js/web";
import Header from "~/components/ui/Header";
import StoriesList from "~/components/ui/SotriesList";
import TestsList from "~/components/ui/TestsList";
import VideosList from "~/components/ui/VideosList";
import "~/components/ui/UI.css"

export default function ToicsSubSeason() {
  const params = useParams()
  console.log(params.season, params.topicsSubSeason);

  const topic = params.season.split("-")[1]

  const topics: any = {
    videos: VideosList,
    stories: StoriesList,
    tests: TestsList,
  }

  return (
    <>
      <Header />
      <Dynamic component={topics[topic]} />
    </>
  )

}
