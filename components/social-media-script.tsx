"use client"

import { useEffect } from "react"

export function SocialMediaScript() {
  useEffect(() => {
    // Check if Instagram script already exists to avoid duplicates
    if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
      // Instagram embed script
      const instagramScript = document.createElement("script")
      instagramScript.src = "//www.instagram.com/embed.js"
      instagramScript.async = true
      document.body.appendChild(instagramScript)
    } else if (window.instgrm) {
      // If Instagram script already exists, just trigger a reload
      window.instgrm.Embeds.process()
    }

    // Check if LinkedIn badge script already exists to avoid duplicates
    if (!document.querySelector('script[src="https://platform.linkedin.com/badges/js/profile.js"]')) {
      // LinkedIn badge script
      const linkedinScript = document.createElement("script")
      linkedinScript.src = "https://platform.linkedin.com/badges/js/profile.js"
      linkedinScript.async = true
      linkedinScript.defer = true
      linkedinScript.type = "text/javascript"
      document.body.appendChild(linkedinScript)
    }

    // No need to remove the scripts on cleanup as they're needed globally
    // and removing them can cause errors
  }, [])

  return null
}
