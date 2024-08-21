import { For } from "solid-js";
import Layout from "~/components/ui/Layout";
import { seasonsByNums } from "~/lib/seasons";

export default function SubSeasons(props: { seasonNum: any }) {

  const currentSeason = seasonsByNums[props.seasonNum - 1]

  return (
    <>
      <Layout seasonNum={props.seasonNum}>
        <div class="w-screen h-[calc(100vh-130px)] flex justify-center items-center mt-3">
          <div class="flex flex-row-reverse py-10 items-center flex-wrap justify-center w-full h-full md:h-fit md:w-3/4  gap-5 overflow-y-scroll scroll-smooth">
            <For each={currentSeason}>
              {(season) => <SubSeason name={season.name} />}
            </For>
          </div>
        </div>
      </Layout >
    </>
  )

}

function SubSeason(props: { name: string }) {
  return (
    <div class="text-right  p-5 border-[1px] rounded-md border-gray-400">
      <p class="font-bold w-full md:text-2xl lg:text-3xl text-nowrap text-xl">المبحث {props.name}</p>
    </div>
  )
}
