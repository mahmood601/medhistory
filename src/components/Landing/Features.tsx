import automation from "/images/Landing/automation-4p-svgrepo-com.svg";
import story from "/images/Landing/book-svgrepo-com.svg";
import theme from "/images/Landing/theme-store-svgrepo-com.svg";
import collaboration from "/images/Landing/collaboration-distributed.svg";
import ranking from "/images/Landing/ranking-svgrepo-com.svg";
import link from "/images/Landing/chain-for-links-svgrepo-com.svg";
import { createEffect, For, onMount } from "solid-js";
import AOS from 'aos'
import "aos/dist/aos.css";

const features = [
  {
    src: "/images/Landing/automation-4p-svgrepo-com.svg",
    alt: 'Automation',
    title: 'أسئلة مؤتمتة',
    description: 'مجموعة من الاختبارات المؤتمتة للتأكد من الفهم.',
  },
  {
    src: "/images/Landing/book-svgrepo-com.svg",
    alt: 'Story',
    title: 'قصص',
    description: 'قصص مبتكرة لتسهيل حفظ الفقرات.',
  },
  {
    src: "/images/Landing/theme-store-svgrepo-com.svg",
    alt: 'Theme',
    title: 'تغيير الثيم',
    description: 'بإمكانك بسهولة التبديل بين الوضع المضيء والمظلم.',
  },
  {
    src: "/images/Landing/collaboration-distributed.svg",
    alt: 'Collaboration',
    title: 'المساهمة',
    description: 'ساهم بإضافة قصتك الخاصة أو مساهمتك بعد الحصول على تصويت.',
  },
  {
    src: "/images/Landing/ranking-svgrepo-com.svg",
    alt: 'Ranking',
    title: 'الحصول على ترتيب',
    description: 'تنافس مع زملائك للحصول على المرتبة الأولى.',
  },
  {
    src: "/images/Landing/chain-for-links-svgrepo-com.svg",
    alt: 'Link',
    title: 'روابط التوسع',
    description: 'روابط خارجية لشرح الكلمات المبهمة أو فيديوهات توفر شرحاً للفكرة.',
  },
]

export default function Features() {
  onMount(() => {
    AOS.init()
  })
  return (
    <div id="features" class="flex items-end flex-col w-full my-10 px-4">
      <For each={features}>
        {
          (feature) => (
            <Feat title={feature.title} description={feature.description} imageSrc={feature.src} imageAlt={feature.alt} />
          )
        }
      </For>
    </div>
  )
}

function Feat(props: { title: string, description: string, imageSrc: string, imageAlt: string }) {
  createEffect(() => {
    AOS.init()
  })

  return (

    <div
      data-aos="fade-right"
      class="box flex relative overflow-hidden items-center justify-end py-5 px-5 w-full min-h-28"

    >
      <span
        data-aos="stretchHight"
        class="column bg-black h-full  flex w-1 absolute right-[26px]"></span>
      <span
        class="flex bg-black order-1 ml-4 justify-center items-center relative bg-black w-4 h-4 rounded-full"
      >
        <span class="flex bg-inherit z-10 animate-ping w-full h-full rounded-full"
        ></span>
      </span >
      <div class="boxes hover:border-solid border-[1px] hover:border-brown  flex flex-col items-end bg-gray-100 shadow-gray-300 shadow-md w-3/4 h-fit p-4 rounded-md">
        <img
          class="aspect-square feat-image p-2 size-12"
          src={props.imageSrc}
          alt={props.imageAlt}
          height={48}
          width={48}
        />
        <h2 class="my-3 font-extrabold text-xl">{props.title}</h2>
        <p dir="rtl" class="text-right">{props.description}</p>

      </div>
    </div >

  )
}
