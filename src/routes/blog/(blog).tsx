import Header from "~/components/ui/Shared/Header";

export default function BlogRoute() {
  return (
    <>
      <Header sectionName="المدونة" />
      <div class="dark:bg-dark-hover bg-white w-screen h-[calc(100vh_-_68px)] flex justify-center items-center">
        <p dir="rtl" class="dark:text-white text-2xl text-brown w-1/2">عذراً هذه الصفحة لم يتم إنشاؤها بعد 😔</p>
      </div>
    </>
  )
}
