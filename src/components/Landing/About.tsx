
export default function About() {
  return (
    <div id="about" class="w-full px-15 text-center my-10">
      <h2 class="text-5xl font-extrabold text-gray-500 my-10">من نحن</h2>
      <div class="flex flex-wrap md:justify-around">
        <Person src="/landing/mahmood_ali.webp" alt="Mahmood Ali" name="محمود علي" description="شرح بسيط وموجز" />
        <Person src="/landing/mahmood_abd_alkader.webp" alt="Mahmood Abd Alkader" name="محمود عبد القادر" description="شرح بسيط وموجز" />
      </div>
    </div >
  )
}


function Person(props: { src: string, alt: string, name: string, description: string }) {
  return (
    <div class="w-full mb-10 md:w-1/2 flex flex-col items-center">
      <img
        class="size-16 rounded-lg bg-gray-200"
        src={props.src}
        height={50}
        width={50}
        alt={props.alt}
      />

      <h2 class="text-lg font-bold py-3">{props.name}</h2>
      <span class="font-bold">Pre <span class="text-brown">9</span></span>
      <p>{props.description}</p>
    </div>

  )
}
