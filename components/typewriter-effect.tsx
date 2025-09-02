"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypewriterEffectProps {
  words: string[]
  delay?: number
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
}

export function TypewriterEffect({
  words,
  delay = 1000,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1500,
}: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isBlinking, setIsBlinking] = useState(true)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    // Initial delay before starting
    if (currentText === "" && !isDeleting) {
      timeout = setTimeout(() => {
        setIsBlinking(false)
        typeNextCharacter()
      }, delay)
      return () => clearTimeout(timeout)
    }

    function typeNextCharacter() {
      const currentWord = words[currentWordIndex]

      if (!isDeleting) {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.substring(0, currentText.length + 1))
          timeout = setTimeout(typeNextCharacter, typingSpeed)
        } else {
          // Finished typing, pause before deleting
          setIsBlinking(true)
          timeout = setTimeout(() => {
            setIsBlinking(false)
            setIsDeleting(true)
            typeNextCharacter()
          }, pauseTime)
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1))
          timeout = setTimeout(typeNextCharacter, deletingSpeed)
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
          setIsBlinking(true)
          timeout = setTimeout(() => {
            setIsBlinking(false)
            typeNextCharacter()
          }, 500)
        }
      }
    }

    if (!isBlinking) {
      timeout = setTimeout(typeNextCharacter, isDeleting ? deletingSpeed : typingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, isBlinking, words, delay, typingSpeed, deletingSpeed, pauseTime])

  return (
    <h2 className="text-2xl md:text-3xl font-medium font-heading">
      <span className="text-gray-300">I'm a </span>
      <span className="text-cyan-400">
        {currentText}
        <motion.span
          animate={{ opacity: isBlinking ? 0 : 1 }}
          transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="inline-block w-[3px] h-[1.2em] bg-purple-500 ml-1 align-middle"
        />
      </span>
    </h2>
  )
}
