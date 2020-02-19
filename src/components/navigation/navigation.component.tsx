import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

interface NavigatonLink {
  name: string
  href: string
  ariaLabel: string
}

const links: NavigatonLink[] = [
  {
    name: "home",
    href: "/",
    ariaLabel: "View homepage",
  },
  {
    name: "blog",
    href: "/blog",
    ariaLabel: "View blog page",
  },
  {
    name: "about",
    href: "/about",
    ariaLabel: "View about me page",
  },
  {
    name: "contact",
    href: "/contact",
    ariaLabel: "View contact me page",
  },
]

const Navigation: React.FC = () => {
  const { pathname } = useRouter()

  return (
    <nav>
      <ul>
        {links.map(({ href, name, ariaLabel }) => (
          <li key={name}>
            <Link href={href}>
              <a
                aria-label={ariaLabel}
                aria-current={pathname === href ? "page" : undefined}
              >
                {name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx global>{`
        nav {
          height: 65px;
          border-bottom: 1px solid black;
        }

        nav ul {
          display: flex;
          flex-flow: row wrap;
          height: 100%;
          justify-content: center;
          align-items: center;
        }

        nav ul li a {
          text-transform: uppercase;
          text-decoration: none;
          font-weight: bold;
          font-size: 2rem;
          padding: 0.8em;
        }
      `}</style>
    </nav>
  )
}

export default Navigation
