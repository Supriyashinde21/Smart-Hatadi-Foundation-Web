"use client"

import type React from "react"

import { useEffect } from "react"

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll")

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animated")
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1 },
      )

      elements.forEach((element) => {
        observer.observe(element)
      })
    }

    // Parallax effect for hero sections
    const parallaxEffect = () => {
      const heroSections = document.querySelectorAll(".hero-section")

      window.addEventListener("scroll", () => {
        heroSections.forEach((section) => {
          const distance = window.scrollY
          const sectionBackground = section.querySelector(".parallax-bg")
          if (sectionBackground) {
            sectionBackground.style.transform = `translateY(${distance * 0.3}px)`
          }
        })
      })
    }

    // Initialize animations
    animateOnScroll()
    parallaxEffect()

    // Cleanup
    return () => {
      window.removeEventListener("scroll", () => {})
    }
  }, [])

  return <>{children}</>
}

