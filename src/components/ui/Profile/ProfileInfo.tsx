import { JSX } from "solid-js"

export default function ProfileInfo() {
  return (
    <ul class="w-screen dark:bg-header dark:text-white">
      <Li Icon={NameSvg()} type="الاسم" value="Mahmood" />
      <Li Icon={EmailSvg()} type="الحساب" value="mahmoud678@gmail.com" />
      <Li Icon={PlaceSvg()} type="المحافظة" value="غير محدد" />
    </ul>
  )
}

function Li(props: { Icon: JSX.Element, type: string, value: string }) {
  return (
    <li class="py-2 flex justify-between items-center w-full h-20 border-b-[1px] border-gray-300 dark:border-dark-hover">
      <div class="flex-1">
        <div class="h-4 w-full flex items-center justify-end">{props.type}</div>
        <div class="h-8 w-full flex items-center justify-end font-bold text-lg">{props.value}</div>
      </div>
      <div class="flex justify-center items-center w-16 h-16">{props.Icon}</div>
    </li>
  )
}

function NameSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4" />
    </svg>
  )
}

function EmailSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8s8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47c.65.89 1.77 1.47 2.96 1.47c1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10m0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3" />
    </svg>
  )
}

function PlaceSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14c4.05-3.7 6-6.8 6-9.14M12 2c4.2 0 8 3.22 8 8.2c0 3.32-2.67 7.25-8 11.8c-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2" />
    </svg>
  )
}
