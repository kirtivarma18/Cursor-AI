'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type NavItem = {
  label: string
  href: string
  hasDropdown?: boolean
}

const navItems: NavItem[] = [
  { label: 'WORK', href: '/work' },
  { label: 'SERVICES', href: '/services', hasDropdown: true },
  { label: 'SOLUTIONS', href: '/solutions', hasDropdown: true },
  { label: 'ABOUT', href: '/about', hasDropdown: true },
  { label: 'RESOURCES', href: '/resources', hasDropdown: true },
]

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white py-4 px-6" role="navigation">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Systango Home">
          <Image
            src="/systango-logo.svg"
            alt="Systango Logo"
            width={120}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
              role="menuitem"
            >
              <Link
                href={item.href}
                className="text-gray-800 hover:text-gray-600 text-sm font-medium flex items-center"
                aria-expanded={item.hasDropdown ? activeDropdown === item.label : undefined}
              >
                {item.label}
                {item.hasDropdown && (
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </Link>
            </div>
          ))}
        </div>

        <Link
          href="/contact"
          className="bg-[#FF5533] text-white px-6 py-2 rounded hover:bg-[#FF6644] transition-colors duration-200"
          role="button"
          aria-label="Contact Us"
        >
          CONTACT US
        </Link>
      </div>
    </nav>
  )
}

export default Navbar 