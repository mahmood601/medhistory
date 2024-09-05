import { useParams } from "@solidjs/router"
import SubSeasons from "~/components/ui/SubSeasons";

export default function Season() {
  const params = useParams()
  return (
    <SubSeasons params={params.season} />
  )

}
