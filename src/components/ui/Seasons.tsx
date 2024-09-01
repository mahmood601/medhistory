import { A } from "@solidjs/router"
import { For } from "solid-js"

const seasonsProps = [
  { id: 1, seasonNum: "الأول", seasonName: "تاريخ العصور الوسطى", subSeasonNum: 8 },
  { id: 2, seasonNum: "الثاني", seasonName: "تاريخ العصور الوسطى", subSeasonNum: 9 },
  { id: 3, seasonNum: "الثالث", seasonName: "تاريخ العصور الوسطى", subSeasonNum: 5 },
  { id: 4, seasonNum: "الرابع", seasonName: "تاريخ العصور الوسطى", subSeasonNum: 13 },
  { id: 5, seasonNum: "الخامس", seasonName: "تاريخ العصور الوسطى", subSeasonNum: 5 }
]

export default function Seasons() {
  return (
    <div class="season flex justify-center w-screen mt-20 h-2/5">
      <div class="w-full h-full px-4 overflow-y-scroll">
        <For each={seasonsProps}>
          {
            (prop) => (
              <A href={`/app/${prop.id}-tests`} >
                <Season seasonNum={prop.seasonNum} subSeasonNum={prop.subSeasonNum} seasonName={prop.seasonName} completedSSNum={2} />
              </A>
            )
          }
        </For>
      </div>
    </div >
  )
}

function Season(props: { tailwindBgColor?: string, seasonNum: string, seasonName: string, subSeasonNum: number, completedSSNum: number }) {
  return (
    <div class="mb-5 border-[2px] dark:bg-[#222] dark:shadow-none dark:text-white dark:border-[#333] dark:hover:border-dark-hover dark:shadow-[#333] border-gray-200 hover:border-gray-400 transition-colors duration-400 shadow-md shadow-gray-400 py-2 pl-2 pr-4  w-full h-24 rounded-md flex justify-between flex-row-reverse">
      <div class="h-full flex-1 flex flex-col justify-around">
        <p class="text-right w-full font-bold text-lg">الفصل {props.seasonNum}</p>
        <p class="text-right w-full">{props.seasonName}</p>
      </div>
      <div class="mr-2 h-full w-20 flex justify-center items-center">
        <div
          style={{
            "background": `conic-gradient(#693800 ${props.completedSSNum / props.subSeasonNum}turn, #eee 0deg)`
          }}
          class="w-20 h-20 rounded-full flex justify-center items-center">
          <div class="progress bg-white dark:bg-black rounded-full flex justify-center items-center">
            <span class="block diagonal-fractions text-2xl font-bold">2/{props.subSeasonNum}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

