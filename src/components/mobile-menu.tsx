'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { IconClose, IconMenu } from './icons'

type NavLink = { readonly label: string; readonly href: string }

const MENU_ID = 'mobile-menu'
// Must match --breakpoint-desktop in globals.css.
const DESKTOP_QUERY = '(min-width: 64rem)'

/**
 * Hamburger button + slide-in menu for mobile and tablet.
 *
 * Built on a modal <dialog> (showModal): the browser puts it in the top
 * layer, makes the rest of the page inert and fires `cancel` on Escape.
 * On top of that this component:
 * - wraps Tab / Shift+Tab inside the panel (otherwise Tab can leave the
 *   dialog for the browser UI),
 * - closes on a click on the backdrop,
 * - locks page scrolling while open,
 * - returns focus to the hamburger button on close,
 * - closes itself when the viewport reaches the desktop layout, so no
 *   scroll lock or open state is left behind.
 */
export function MobileMenu({ links }: { links: readonly NavLink[] }) {
  const [open, setOpen] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const openMenu = useCallback(() => {
    const dialog = dialogRef.current
    if (!dialog || dialog.open) return
    dialog.showModal()
    setOpen(true)
  }, [])

  const closeMenu = useCallback(() => {
    dialogRef.current?.close()
  }, [])

  // Runs for every way the dialog closes: close button, Escape (cancel),
  // backdrop click, link click and the desktop breakpoint.
  const handleClose = useCallback(() => {
    setOpen(false)
    buttonRef.current?.focus()
  }, [])

  // Scroll lock follows the open state, so it is released however the
  // dialog was closed.
  useEffect(() => {
    if (!open) return
    const root = document.documentElement
    const previous = root.style.overflow
    root.style.overflow = 'hidden'
    return () => {
      root.style.overflow = previous
    }
  }, [open])

  useEffect(() => {
    const mql = window.matchMedia(DESKTOP_QUERY)
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) closeMenu()
    }
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [closeMenu])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key !== 'Tab') return
    const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    )
    if (!focusables || focusables.length === 0) return
    const first = focusables[0]
    const last = focusables[focusables.length - 1]
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  // The panel fills the whole <dialog> box, so a click whose target is the
  // dialog element itself landed on the ::backdrop.
  const handleClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) closeMenu()
  }

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls={MENU_ID}
        aria-haspopup="dialog"
        onClick={openMenu}
        // Negative margin keeps the 40×17 icon in its Figma position while
        // the padding gives a 64×41 touch target.
        className="-m-3 p-3 text-navy-950 hover:text-red-500 focus-visible:text-red-500 desktop:hidden"
      >
        <IconMenu className="block" />
      </button>

      <dialog
        ref={dialogRef}
        id={MENU_ID}
        aria-label="Menu"
        onClose={handleClose}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className="fixed inset-y-0 right-0 left-auto m-0 h-dvh max-h-none w-64 max-w-full overflow-y-auto border-0 bg-white p-0 backdrop:bg-navy-950/50 tablet:w-78 desktop:hidden"
      >
        <div className="flex min-h-full flex-col items-end gap-1100 pt-[27px] pr-[21px] pb-[27px] pl-[21px] tablet:pr-20 tablet:pl-[36px]">
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="text-navy-950 hover:text-red-500 focus-visible:text-red-500"
          >
            <IconClose className="block" />
          </button>
          <nav aria-label="Primary" className="w-full">
            <ul className="flex flex-col gap-300">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block text-[1.125rem] leading-6 text-navy-950 hover:text-red-500 focus-visible:text-red-500"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </dialog>
    </>
  )
}
