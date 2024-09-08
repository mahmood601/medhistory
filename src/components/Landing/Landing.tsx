import { cache, createAsync, redirect } from "@solidjs/router";
import About from "./About";
import Features from "./Features";
import Footer from "./Footer";
import Header from "./Header";
import Intro from "./InroPage";
import { getLoggedInUser } from "~/lib/server/appwrite";


const user = cache(async () => {
  "use server"
  const isLoggedIn = await getLoggedInUser()

  if (isLoggedIn) {
    throw redirect("/app")
  }

}, "app")




export default function Landing() {
  createAsync(async () => await user(), { deferStream: true })
  return (
    <>
      <Header />
      <Intro />
      <Features />
      <About />
      <Footer />
    </>
  )
}
