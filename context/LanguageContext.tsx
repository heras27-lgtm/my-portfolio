"use client"

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react"
import { Language, translations } from "@/i18n/translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (typeof translations)[Language]
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedLanguage = (localStorage.getItem("language") || "en") as Language
    setLanguageState(savedLanguage)
    setMounted(true)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const contextValue: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language]
  }

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    return {
      language: "en" as Language,
      setLanguage: () => {},
      t: translations.en
    }
  }
  return context
}
