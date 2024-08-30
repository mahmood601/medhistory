import { createAdminClient } from "./appwrite";
import { OAuthProvider } from "node-appwrite";
import { action, redirect } from "@solidjs/router";

const origin = import.meta.env.DEV ? "http://localhost:3000" : import.meta.env.VITE_SITE_ORIGIN

export const loginWithGoogle = action(async () => {
  "use server"

  const { account } = await createAdminClient()
  try {
    const redirectURL = await account.createOAuth2Token(
      OAuthProvider.Google,
      `${origin}/api/googleOauthCallback`,
      `${origin}/login`,
      ["openid", "profile", "email"]
    )

    return redirect(`${redirectURL}`)
  } catch (error) {
    console.log(error)
  }
}, "signinGoogle")

export const loginWithGithub = action(async () => {
  "use server"
  const { account } = await createAdminClient()
  try {
    const redirectURL = await account.createOAuth2Token(
      OAuthProvider.Github,
      `${origin}/api/githubOauthCallback`,
      `${origin}/login`,
      ["user"]
    )

    console.log(redirectURL);


    return redirect(`${redirectURL}`)
  } catch (error) {
    console.log(error)
  }
}, "signinGithub")
