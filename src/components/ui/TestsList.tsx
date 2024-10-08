import { createSignal, For, onMount, Show } from "solid-js"
import party from "party-js"

type TestProps = {
  question: {
    id: number,
    content: string
  },
  answerId: number,
  options: string[]
}

const question: TestProps = {
  question: {
    id: 1,
    content: 'هذا محتوى السؤال:'
  },
  answerId: 1,
  options: [
    "الخيار 1",
    "الخيار 2",
    "الخيار 3",
    "الخيار 4",
  ]
}

const questions = [
  question,
  question,
  question,
  question,
  question,
]

export default function TestsList() {
  const [openTestMenu, setOepnTestMenu] = createSignal(false)
  let TestMenuRef!: HTMLUListElement

  const handleClick = (e: MouseEvent) => {
    if (!TestMenuRef.contains(e.target as Node)) {
      setOepnTestMenu(false)
    }
  }

  onMount(() => {
    document.addEventListener("click", handleClick)
  })

  return (
    <>
      <div class="bg-[#222] z-40 fixed h-16 w-full flex flex-row-reverse justify-between py-2 px-8 items-center">
        <ul
          ref={TestMenuRef}
          on:click={(e) => {
            e.stopPropagation()
            setOepnTestMenu(!openTestMenu())
          }}
          class="relative flex h-8 flex-col items-center justify-around">
          <li class="w-[5px] h-[5px] bg-white rounded-full"></li>
          <li class="w-[5px] h-[5px] bg-white rounded-full"></li>
          <li class="w-[5px] h-[5px] bg-white rounded-full"></li>
          <Show when={openTestMenu()}>
            <li class="absolute -right-4 top-full translate-y-6">
              <ul dir="rtl" class="bg-white dark:bg-[#444] dark:text-white text-right w-32 rounded-md">
                <li class="w-full p-2 border-b-2 border-b-gray-400">تعطيل المؤقت</li>
                <li class="w-full p-2 border-b-2 border-b-gray-400">تشغيل المؤقت</li>
                <li class="w-full p-2 border-b-2 border-b-gray-400">تصفير المؤقت</li>
                <li class="w-full p-2 ">تصفير الإجابات</li>
              </ul>
            </li>
          </Show>
        </ul>
        <p class="text-black dark:text-white font-bold">00:00</p>
        <p class="text-black diagonal-fractions dark:text-white font-bold text-2xl">0/20</p>
      </div>
      <div class="p-5 mt-16 flex flex-col items-center gap-5 dark:bg-black dark:text-white text-lg">
        <For each={questions}>
          {
            question => <Test question={question.question} options={question.options} answerId={question.answerId} />
          }
        </For>
      </div>
    </>
  )
}

let checkboxRef!: any;
let audio: HTMLMediaElement | any

function Test(props: TestProps) {
  const testIndex = 2; // remove it with api
  const [answer, setAnswer] = createSignal({ state: false, index: -1 })

  const beat = "/music/heartbeat.mp3"
  const beep = "/music/heartbeep.mp3"

  onMount(() => {
    audio = new Audio()
  })

  return (
    <div dir="rtl" class="bg-gray-300 dark:bg-[#222] p-5 w-full rounded-md">
      <div>
        <span>{props.question.id}.</span>
        <p class="inline-block pr-2 font-bold">{props.question.content}</p>
      </div>
      <ul>
        <For each={props.options}>
          {
            (option, index) => (
              <li
                onClick={(e) => {
                  e.stopPropagation()


                  audio.pause()

                  if (index() === testIndex) {
                    checkboxRef = e.currentTarget
                    party.confetti(checkboxRef as HTMLElement, {
                      count: party.variation.range(20, 25),
                      shapes: ["star", "roundedSquare"],
                      spread: 40
                    })
                    audio.src = beat

                  } else {
                    audio.src = beep
                  }
                  audio.play()

                  setAnswer({ state: true, index: index() })
                }}
                class={`${answer().state ? 'pointer-events-none' : ''} flex items-center w-fit`}>
                <Show when={index() !== answer().index}
                  fallback={
                    <Checkbox isAnswered={answer().state} correct={answer().index == testIndex} />
                  }
                >
                  <Checkbox isAnswered={answer().state} correct={"notChoosen"} />
                </Show>
                <p class="pr-2">{option}</p>
              </li>
            )
          }
        </For>
      </ul>
    </div >
  )
}


function Checkbox(props: { isAnswered: boolean, correct: boolean | "notChoosen" }) {
  return (
    <div
      onClick={() => {
      }}
      class={`${props.correct == "notChoosen" ? 'border-brown' : props.correct ? 'border-green-600' : 'border-red-600 '} relative flex items-center justify-center w-5 h-5 border-2  border-brown rounded-sm`}>
      <span class={`${props.isAnswered ? 'h-1/2' : 'h-0'} ${props.correct == "notChoosen" ? 'bg-brown' : props.correct ? 'bg-green-600' : 'bg-red-600'} h-0 bg-brown absolute transition-all  w-full bottom-0`}></span>
      {props.correct == "notChoosen" ? '' : props.correct ? <Check /> : <Cross />}
    </div>
  )
}

function Check() {
  return (
    <svg
      class="text-black dark:text-white z-40 "
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em" height="1.5em"
      viewBox="0 0 24 24">
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={4}
        d="M5 11.917L9.724 16.5L19 7.5"></path>
    </svg>
  )
}

function Cross() {
  return (
    <svg
      class="text-black dark:text-white z-40 "
      xmlns="http://www.w3.org/2000/svg"
      width="1em" height="1em"
      viewBox="0 0 15 15">
      <path
        fill="currentColor"
        d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27" />
    </svg>
  )
}
