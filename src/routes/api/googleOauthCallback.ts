import { getRequestURL, HTTPEvent, setCookie } from "vinxi/http"
import { createAdminClient } from "~/lib/server/appwrite"

export async function GET(event: HTTPEvent) {
  "use server"
  const url = getRequestURL(event)
  const userId = url.searchParams.get("userId") as string;
  const secret = url.searchParams.get("secret") as string

  try {

    const { account } = await createAdminClient()
    const session = await account.createSession(userId, secret)

    setCookie("medhistory", session.secret, {
      path: '/',
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    })
  }
  catch (e) {
    console.log("error", e);
  }

  return Response.redirect(`${url.origin}/app`)
}
