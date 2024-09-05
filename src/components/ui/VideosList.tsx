export default function VideosList() {
  return (
    <div class="pt-5 dark:bg-black/90 flex flex-wrap justify-center gap-5">
      <Video />
      <Video />
      <Video />
      <Video />
    </div>
  )
}

function Video() {
  return (
    <video class="bg-gray-500 w-5/6 h-56 rounded-md" src="kfkf"></video>
  )
}
