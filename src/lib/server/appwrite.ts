import { cache, redirect } from "@solidjs/router";
import { Client, Account } from "node-appwrite";
import { getCookie, HTTPEvent } from "vinxi/http";

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT)
    .setKey(import.meta.env.VITE_APPWRITE_API_KEY)

  return {
    get account() {
      return new Account(client);
    },
  };
}

export async function createSessionClient() {
  "use server";

  const client = new Client()
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT)

  const session = getCookie("medhistory") !== undefined ? getCookie('medhistory') : null; // Also this as SESSION_COOKIE


  if (!session) {
    throw new Error("No user session")
  }

  client.setSession(session);
  console.log(client);

  return {
    get account() {
      return new Account(client);
    },
  };
}

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error) {
    return null;
  }
}

export const user = cache(async (dir: string) => {
  "use server"
  const isLoggedIn = await getLoggedInUser()


  if (isLoggedIn) {
    throw redirect(dir)
  }

}, "user login")
