import Signin from "../../components/ui/Login"
import { redirect } from '@solidjs/router';
import { createResource, Suspense } from "solid-js";
import { getLoggedInUser } from '~/lib/server/appwrite';





export default function LoginPage() {
  return (
    <Signin />
  )
}

