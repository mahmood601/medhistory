import { getRequestHost, getRequestURL, HTTPEvent, setCookie } from "vinxi/http"
import { createAdminClient } from "~/lib/server/appwrite"

export async function GET(event: HTTPEvent) {
  "use server"
  const host = getRequestHost(event)
  const params = getRequestURL(event)
  const userId = params.searchParams.get("userId") as string;
  const secret = params.searchParams.get("secret") as string

  try {
    console.log(params);

    console.log("user id: ", userId);
    console.log("secret: ", secret);

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

  return Response.redirect(`http://localhost:3000/app`)
}
