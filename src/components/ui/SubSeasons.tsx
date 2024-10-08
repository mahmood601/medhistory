import { A } from "@solidjs/router";
import { For } from "solid-js";
import Layout from "~/components/ui/Layout";
import { seasonsByNums } from "~/lib/seasons";

export default function SubSeasons(props: { params: any }) {
  const seasonNum = props.params[0]
  const currentSeason = seasonsByNums[seasonNum - 1]
  return (
    <>
      <Layout seasonNum={seasonNum}>
        <div class="w-screen h-[calc(100vh-130px)] dark:bg-black flex justify-center items-center pt-3">
          <div class="flex flex-row-reverse py-10 items-center flex-wrap justify-center w-full h-full md:h-fit md:w-3/4  gap-5 overflow-y-scroll scroll-smooth">
            <For each={currentSeason}>
              {(season) => <SubSeason name={season.name} href={`/app/${props.params}/${season.value}`} />}
            </For>
          </div>
        </div>
      </Layout >
    </>
  )

}

function SubSeason(props: { name: string, href: string }) {
  return (
    <A href={props.href} class="text-right dark:text-white p-5 border-[1px] rounded-md dark:bg-[#222] dark:border-adrk-hover border-gray-400">
      <p class="font-bold w-full md:text-2xl lg:text-3xl text-nowrap text-xl">المبحث {props.name}</p>
    </A>
  )
}
