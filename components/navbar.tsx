"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeTechDropdown, setActiveTechDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const techDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        techDropdownRef.current &&
        !techDropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null)
        setActiveTechDropdown(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
    setActiveDropdown(null)
    setActiveTechDropdown(false)
  }

  const handleDropdownToggle = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(name)
    }
    setActiveTechDropdown(false)
  }

  const handleTechDropdownToggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    setActiveTechDropdown(!activeTechDropdown)
  }

  const navLinks = [
    { name: "Resume", href: "/resume" },
    { name: "Projects", href: "/projects" },
    {
      name: "Services",
      href: "/services",
      dropdown: true,
      items: [
        {
          name: "Tech",
          href: "/services/tech",
          hasChildren: true,
          children: [
            { name: "Data Analytics", href: "/services/data-analytics" },
            { name: "Data Science", href: "/services/data-science" },
            { name: "Machine Learning", href: "/services/machine-learning" },
            { name: "AI", href: "/services/ai" },
          ],
        },
        { name: "Finance", href: "/services/finance" },
        { name: "Travel", href: "/services/travel" },
        { name: "Education", href: "/services/education" },
      ],
    },
    { name: "Book an Appointment", href: "/book", isButton: true },
  ]

  // Animation variants - simplified for minimalism
  const dropdownVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.15,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -5,
      transition: {
        duration: 0.1,
        ease: "easeIn",
      },
    },
  }

  const techDropdownVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.15,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      x: -5,
      transition: {
        duration: 0.1,
        ease: "easeIn",
      },
    },
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.15,
        ease: "easeIn",
      },
    },
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-white",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-heading text-xl text-neutral-800 tracking-tight">
            Pratik Shrestha
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="relative" ref={dropdownRef}>
                  <div className="flex items-center group">
                    <Link
                      href={link.href}
                      className={cn(
                        "text-sm font-light tracking-wide transition-all duration-200 hover:text-primary-600 mr-1 group-hover:text-primary-600",
                        pathname === link.href ? "text-primary-600 font-normal" : "text-neutral-600",
                      )}
                    >
                      {link.name}
                    </Link>
                    <button
                      onClick={() => handleDropdownToggle(link.name)}
                      className="p-1 rounded-md hover:bg-neutral-50 transition-all duration-200"
                      aria-label="Toggle dropdown"
                    >
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-200 text-neutral-400",
                          activeDropdown === link.name ? "rotate-180" : "",
                        )}
                      />
                    </button>
                  </div>

                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                        className="absolute top-full right-0 mt-1 w-48 bg-white rounded-md shadow-sm minimal-shadow z-20 overflow-hidden"
                      >
                        {link.items?.map((item, idx) =>
                          item.hasChildren ? (
                            <div key={item.name} className="relative" ref={techDropdownRef}>
                              <div className="flex items-center justify-between w-full">
                                <Link
                                  href={item.href}
                                  className="px-4 py-2 text-sm font-light text-neutral-600 hover:bg-neutral-50 hover:text-primary-600 transition-colors duration-200 block flex-grow"
                                  onClick={closeMenu}
                                >
                                  {item.name}
                                </Link>
                                <button
                                  onClick={handleTechDropdownToggle}
                                  className="px-2 py-2 text-sm text-neutral-400 hover:bg-neutral-50 hover:text-primary-600 transition-colors duration-200"
                                >
                                  <ChevronRight className="h-3.5 w-3.5" />
                                </button>
                              </div>

                              <AnimatePresence>
                                {activeTechDropdown && (
                                  <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={techDropdownVariants}
                                    className="absolute left-full top-0 w-48 bg-white rounded-md shadow-sm minimal-shadow"
                                  >
                                    {item.children?.map((child) => (
                                      <Link
                                        key={child.name}
                                        href={child.href}
                                        className="block px-4 py-2 text-sm font-light text-neutral-600 hover:bg-neutral-50 hover:text-primary-600 transition-colors duration-200"
                                        onClick={closeMenu}
                                      >
                                        {child.name}
                                      </Link>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          ) : (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block px-4 py-2 text-sm font-light text-neutral-600 hover:bg-neutral-50 hover:text-primary-600 transition-colors duration-200"
                              onClick={closeMenu}
                            >
                              {item.name}
                            </Link>
                          ),
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : link.isButton ? (
                <Link key={link.name} href={link.href}>
                  <Button className="bg-primary-500 hover:bg-primary-600 text-white font-light text-sm px-4 py-2 h-9 rounded-md shadow-none hover:shadow-sm transition-all duration-200 minimal-button tracking-wide">
                    {link.name}
                  </Button>
                </Link>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-light tracking-wide transition-all duration-200 hover:text-primary-600 relative",
                    pathname === link.href ? "text-primary-600 font-normal" : "text-neutral-600",
                  )}
                  onClick={closeMenu}
                >
                  {link.name}
                  {pathname === link.href && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-500 rounded-full"></span>
                  )}
                </Link>
              ),
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md transition-colors duration-200 hover:bg-neutral-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5 text-neutral-600" /> : <Menu className="h-5 w-5 text-neutral-600" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="md:hidden bg-white border-t border-neutral-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-3">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.name} className="space-y-2">
                    <div className="flex items-center justify-between w-full">
                      <Link
                        href={link.href}
                        className="text-sm font-light text-neutral-600 hover:text-primary-600 transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {link.name}
                      </Link>
                      <button
                        onClick={() => handleDropdownToggle(link.name)}
                        className="p-1 rounded-md hover:bg-neutral-50 transition-all duration-200"
                        aria-label="Toggle dropdown"
                      >
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform duration-300 text-neutral-400 ${
                            activeDropdown === link.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-4 space-y-2 overflow-hidden"
                        >
                          {link.items?.map((item) =>
                            item.hasChildren ? (
                              <div key={item.name} className="space-y-2">
                                <div className="flex items-center justify-between w-full">
                                  <Link
                                    href={item.href}
                                    className="text-sm font-light text-neutral-600 hover:text-primary-600 transition-colors duration-200"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    {item.name}
                                  </Link>
                                  <button
                                    onClick={handleTechDropdownToggle}
                                    className="p-1 rounded-md hover:bg-neutral-50 transition-all duration-200"
                                    aria-label="Toggle tech dropdown"
                                  >
                                    <ChevronRight
                                      className={`h-3.5 w-3.5 transition-transform duration-300 text-neutral-400 ${
                                        activeTechDropdown ? "rotate-90" : ""
                                      }`}
                                    />
                                  </button>
                                </div>

                                <AnimatePresence>
                                  {activeTechDropdown && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: "auto" }}
                                      exit={{ opacity: 0, height: 0 }}
                                      transition={{ duration: 0.2 }}
                                      className="pl-4 space-y-2 overflow-hidden"
                                    >
                                      {item.children?.map((child) => (
                                        <Link
                                          key={child.name}
                                          href={child.href}
                                          className="block text-sm font-light text-neutral-600 hover:text-primary-600 transition-colors duration-200 py-1"
                                          onClick={closeMenu}
                                        >
                                          {child.name}
                                        </Link>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            ) : (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="block text-sm font-light text-neutral-600 hover:text-primary-600 transition-colors duration-200 py-1"
                                onClick={closeMenu}
                              >
                                {item.name}
                              </Link>
                            ),
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "block text-sm font-light transition-colors duration-200 hover:text-primary-600",
                      pathname === link.href ? "text-primary-600 font-normal" : "text-neutral-600",
                      link.isButton
                        ? "bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded-md inline-block mt-2 shadow-none"
                        : "",
                    )}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
