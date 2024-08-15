import { createSignal, For, onMount } from "solid-js";
import firstImage from "/images/Landing/IMG_20240228_213908_238.jpg";
import secondImage from "/images/Landing/IMG_20240228_213914_405.jpg";
import thirdImage from "/images/Landing/IMG_20240228_213920_203.jpg";
import fourthImage from "/images/Landing/IMG_20240228_213942_107.jpg";

const images = [
  {
    src: "/images/Landing/IMG_20240228_213908_238.jpg",
    alt: "first image"
  },
  {
    src: "/images/Landing/IMG_20240228_213914_405.jpg",
    alt: "second image"
  },
  {
    src: "/images/Landing/IMG_20240228_213920_203.jpg",
    alt: "third image"
  },
  {
    src: "/images/Landing/IMG_20240228_213942_107.jpg",
    alt: "fourth image"
  },

]


export default function Intro() {
  return (

    <div class="landing relative pt-[80px]  px-4 flex items-center flex-col bg-gray-100">
      <Text />
      <div
        class="w-full flex justify-around top-7 left-1/2 relative -translate-x-1/2 -translate-y-1/2"
      >
        <button type="button" class="btn bg-white outline-none">نسخة مدفوعة</button>
        <button type="button" class="btn bg-brown text-gray-100 outline-none"
        >نسخة مجانية</button
        >
      </div>
      <div
        class="w-full h-dvh mt-10 flex justify-center items-center overflow-hidden"
      >
        <Circle />
      </div>
    </div>

  )
}


function Text() {
  const text = "تعلم تاريخ الطب مع Medhistory."

  const [arText, setArText] = createSignal("")
  const [enText, setEnText] = createSignal("")



  let i = 0


  onMount(() => {
    const typing = setInterval(() => {
      if (i >= text.length) {
        clearInterval(typing)
      }
      if (i < 18) {
        setArText(arText() + text[i])
      }
      if (i < 30 && i > 18) {
        setEnText(enText() + text[i])
      }
      i++
    }, 100)
  })

  return (
    <div class="h-[180px] my-6 box-border">
      <p
        dir="rtl"
        id="landing-text"
        class="h-[180px] w-[185px] text-3xl font-sans font-bold text-center leading-loose"
      >
        {arText()}
        <span id="span" dir="ltr" class="text-brown inline-block">{enText()}</span>
        <span
          class="inline-flex h-6 w-[2px] bg-brown animate-[blink-caret_1s_step-end_infinite] mr-[2px]"
        ></span>
      </p>
    </div>

  )
}

function Circle() {
  return (
    <div
      class="historical-box border-brown border-4 border-solid  md:border-none grid grid-cols-2 grid-rows-2  gap-14 size-64 relative bottom-[-50%] md:bottom-0 md:size-72 shadow-gra rounded-full animate-[rotationOne_6s_infinite_linear]"
    >
      <For each={images}>
        {
          (image) => (
            <img
              class="historical-person md:absolute md:-translate-x-[70vw] rounded-md aspect-square relative animate-[rotationTwo_6s_infinite_linear]"
              src={image.src}
              alt={image.alt}
            />
          )
        }
      </For>
    </div>
  )
}
