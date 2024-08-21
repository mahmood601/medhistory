import { useParams } from "@solidjs/router"
import SubSeasons from "~/components/ui/SubSeasons";

export default function Season() {
  const params = useParams()
  console.log(params.season);



  return (
    <SubSeasons seasonNum={params.season[0]} />
  )

}
