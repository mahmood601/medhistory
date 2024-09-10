import Header from "../Shared/Header";
import Image from "./Image";
import ProfileInfo from "./ProfileInfo";

export default function Profile() {
  return (
    <div class="w-screen min-h-screen dark:bg-black">
      <Header sectionName="الملف الشخصي" />
      <Image />
      <ProfileInfo />
    </div>
  )
}
