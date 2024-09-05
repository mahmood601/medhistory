type StoryProps = {
  title: string,
  imgSrc: string,
  imgAlt: string,
  paragraph: string,
}

export default function StoriesList() {
  const paragraph = "هذه فقرة من فقرات كتاب التاربخ الطبي الذي يفصح عن جمال التاريخ وابداعاته التي اوصلت البشرية الى التطور في عصرنا الحالي"
  return (
    <div dir="rtl" class="p-3 dark:bg-black/90">
      <Story title="المسرحية الساذجة" imgSrc="" imgAlt="" paragraph={paragraph} />
      <Story title="المسرحية الساذجة" imgSrc="" imgAlt="" paragraph={paragraph} />
      <Story title="المسرحية الساذجة" imgSrc="" imgAlt="" paragraph={paragraph} />
    </div>
  )
}

function Story(props: StoryProps) {
  return (
    <div class="flex flex-col items-center">
      <h2 class="text-4xl font-bold mb-6 w-full dark:text-white">{props.title}</h2>
      <img class="w-24 h-24 bg-gray-400 rounded-md mb-6" src={props.imgSrc} alt={props.imgAlt} />
      <p class="text-xl mb-6 dark:text-white">{props.paragraph}</p>
      <hr class="w-full bg-gray-400 mb-6" />
    </div>
  )
}
