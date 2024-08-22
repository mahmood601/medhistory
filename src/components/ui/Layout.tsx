import { JSX, onMount } from "solid-js";
import Header from "./Header";
import "./UI.css"
import { A, useNavigate } from "@solidjs/router";

export default function Layout(props: { seasonNum: any, children: JSX.Element }) {
  const navigate = useNavigate()
  onMount(() => {
    window.onpopstate = () => {
      navigate("/app/")
    }
  })

  return (
    <>
      <Header />
      <div class="topics z-0 w-full bg-white border-b-[1px] border-b-gray-300 dark:border-dark-hover dark:bg-black  sticky top-20 flex flex-row-reverse justify-evenly py-2">
        <A activeClass="active-tab" class="tab relative transition duration-100 rounded-md p-2 dark:text-white" href={`/app/${props.seasonNum}-tests`}>اختبارات</A>
        <A activeClass="active-tab" class="tab relative transition duration-100 rounded-md p-2 dark:text-white" href={`/app/${props.seasonNum}-stories`} > قصص</A >
        <A activeClass="active-tab" class="tab relative transition duration-100 rounded-md p-2 dark:text-white" href={`/app/${props.seasonNum}-videos`} > فيديوهات</A >
      </div >

      {props.children}
    </>
  )

}


