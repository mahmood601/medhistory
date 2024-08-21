import { createEffect, For, onCleanup, onMount, Setter } from "solid-js";
import { createSignal } from "solid-js";
import { Transition } from "solid-transition-group";
import AppName from "./AppName";
import SearchBox from "./SearchBox";

let links = [
  {
    name: 'الحساب',
    image: "account",
  },
  {
    name: 'وضع الإضاءة',
    image: "mode",
  },
  {
    name: 'الإعدادات',
    image: "settings",
  },
  {
    name: 'الترتيب الحالي',
    image: "ranking",
  },
  {
    name: 'الإشعارات',
    image: "notification",
  },
  {
    name: 'المدونة',
    image: "blog",
  },

]

declare module "solid-js" {
  namespace JSX {
    interface CustomEvents {
      click: MouseEvent
    }
  }
}

export default function Header() {
  const [open, setOpen] = createSignal(false)
  const [search, setSearch] = createSignal(false)
  let menuRef!: HTMLDivElement;

  return (
    <header class="z-10 sticky h-20 bg-white dark:bg-header  top-0 py-4 px-5 flex justify-between items-center shadow-gray-400 shadow-sm">
      <nav>
        <div
          class={`${open() ? 'open' : ''} relative`}
          ref={menuRef}
        >
          <div
            onClick={() => setOpen(!open())}
            class={`${open() ? ' justify-center open' : 'justify-around'} flex relative rounded-full px-1 py-3 w-10 h-10  flex-col items-center hover:bg-gray-200  dark:hover:bg-dark-hover`}

          >
            <span class="burger-slice"></span>
            <span class="burger-slice"></span>
            <span class="burger-slice"></span>
          </div>
          <Transition name="dropdown">
            {open() && <Links menuRef={menuRef} setOpen={setOpen} />}
          </Transition>
        </div>

      </nav>

      <AppName hide={search} />
      <SearchBox search={search} setSearch={setSearch} />
    </header >
  )
}

function Links(props: { menuRef: HTMLDivElement, setOpen: Setter<boolean> }) {

  const handleClick = (e: MouseEvent) => {
    if (!props.menuRef.contains(e.target as Node)) {
      props.setOpen(false)
    }
  }

  onMount(() => {
    document.addEventListener('click', handleClick)
  })

  onCleanup(() => {
    document.removeEventListener('click', handleClick)
  })

  return (
    <ul
      class="z-50 absolute border-2 border-gray-300 dark:border-dark-hover dark:bg-header left-1/2 top-full -translate-x-1/2 translate-y-6 bg-white rounded-md p-6 h-fit w-fit grid grid-cols-1 justify-items-center gap-4"
    >
      <For each={links}>
        {
          (link, index) => (
            <li class={`${index() === 1 && 'sun-link'} link relative hover:hovered`}>
              <div class="w-6 h-6 flex justify-center">
                {index() === 1 ? (<Shape />) : (< img class="dark:invert" src={`/app/${link.image}.svg`} alt={link.name} />)}
              </div>
              <p style={{ 'animation-delay': `${(index() + 1) * 0.5}s` }}
                class="hint hint-hovered dark:text-white dark:bg-header pointer-events-none opacity-0 transition-all will-change-auto duration-400 rtl p-[6px] rounded-r-full  absolute top-1/2 -translate-y-1/2 left-full bg-white w-max">{link.name}</p>
            </li>
          )
        }
      </For >
    </ul >
  )
}


function Shape() {
  const [isDark, setIsDark] = createSignal(false)

  createEffect(() => {
    if (isDark()) {
      localStorage.setItem('theme', 'dark')
    }
    if (!isDark()) {
      localStorage.removeItem('theme')
    }
    if (localStorage.getItem('theme') === 'dark') {
      setIsDark(true)
    }


  })

  return (
    <div
      on:click={() => {
        setIsDark(!isDark())
        localStorage.setItem('theme', 'dark')
      }}
      class={`${isDark() ? 'active border-dotted justify-center items-center ' : 'bg-black'} sun transition-all duration-300 rounded-full w-6 h-6 flex justify-end items-start`}>
      <span class={`${isDark() ? 'w-6 h-6 border-dotted border-4 border-white justify-center items-center bg-black' : 'w-4 h-4 bg-white'} flex justify-center items-center transition-all duration-300 rounded-full`}>
        <span class={`${isDark() ? 'w-3 h-3 bg-white' : 'w-0 h-0'} relative block transition-all duration-300 rounded-full`}></span>
      </span>
    </div >
  )
}


