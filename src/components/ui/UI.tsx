import Header from "./Header";
import Seasons from "./Seasons";
import ChartComponent from "./Chart";
import "./UI.css"
import { createEffect, createSignal, onMount } from "solid-js";

export default function UI() {

  return (
    <div class={`dark:bg-black h-screen`}>
      < Header />
      <ChartComponent />
      <Seasons />
    </div >
  )
}
