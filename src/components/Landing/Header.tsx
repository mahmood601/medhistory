import { createSignal, onMount, Setter } from 'solid-js'
import './Landing.css'

declare module "solid-js" {
  namespace JSX {
    interface CustomEvents {
      click: MouseEvent
    }
  }
}

export default function Header() {
  const [open, setOpen] = createSignal(false)
  let ulRef!: HTMLUListElement;

  return (

    <header
      class="flex z-30 sticky top-0 px-4 py-3 justify-between items-center bg-opacity-95 bg-white"
    >
      <img
        class="aspect-square mt-1"
        loading="eager"
        src="/images/Landing/Logo.jpg"
        alt="Logo"
        height={50}
        width={50}
      />
      <nav>
        <ul id="burger-menu"
          ref={ulRef}
          class={`${open() ? 'open' : ''} h-5 flex flex-col justify-between items-end`}
          on:click={() => setOpen(!open())}
        >
          <li class="burger"></li>
          <li class="burger"></li>
          <li class="burger"></li>
          <Links ulRef={ulRef} setOpen={setOpen} />
        </ul>
      </nav>
    </header >

  )
}

function Links(props: { ulRef: HTMLUListElement, setOpen: Setter<boolean> }) {
  onMount(() => {
    document.addEventListener('click', (e: MouseEvent) => {
      if (!props.ulRef.contains(e.target as Node)) {
        props.setOpen(false)
      }
    })
  })

  return (
    <li
      class="links absolute right-4 shadow-gray-400 shadow-md bg-white rounded-md p-4 w-44 transition-all duration-200 flex flex-col"
    >
      <a href="#features">الميزات</a>
      <a href="#about">من نحن</a>
      <a href="#contact">معلومات التواصل</a>

    </li>
  )
}
