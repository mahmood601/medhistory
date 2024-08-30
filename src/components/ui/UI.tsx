import Header from "./Header";
import Seasons from "./Seasons";
import ChartComponent from "./Chart";
import "./UI.css"
import { cache, createAsync, redirect } from "@solidjs/router";
import { getLoggedInUser } from "~/lib/server/appwrite";


const user = cache(async () => {
  "use server"
  const isLoggedIn = await getLoggedInUser()

  if (!isLoggedIn) {
    throw redirect("/login")
  }

}, "user login")



export default function UI() {
  createAsync(async () => user())

  return (
    <div class="h-screen dark:bg-black">
      <Header />
      <ChartComponent />
      <Seasons />
    </div>
  )
}
