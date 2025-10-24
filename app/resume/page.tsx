"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, ArrowLeft, Download } from "lucide-react"

function useTheme() {
  // Start with a stable, SSR-safe default and detect real theme after mount
  const [dark, setDark] = React.useState<boolean>(false)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const hasClass = document.documentElement.classList.contains('dark')
    const initial = hasClass || prefersDark
    setDark(initial)
    document.documentElement.classList.toggle('dark', initial)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  React.useEffect(() => {
    if (!mounted) return
    document.documentElement.classList.toggle('dark', dark)
  }, [dark, mounted])

  return { dark, setDark, mounted }
}

export default function ResumePage() {
  const pdfPath = "/resume.pdf"
  const { dark, setDark, mounted } = useTheme()
  const [ready, setReady] = React.useState(false)

  // Ensure the PDF embed renders after hydration to avoid first-load blank in some browsers
  React.useEffect(() => {
    const id = window.setTimeout(() => setReady(true), 0)
    return () => window.clearTimeout(id)
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button asChild variant="ghost" size="sm">
              <a href="/" aria-label="Back to home" className="inline-flex items-center gap-1.5">
                <ArrowLeft className="h-4 w-4" /> Back
              </a>
            </Button>
            <h1 className="text-lg font-semibold">Resume</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setDark(!dark)} aria-label="Toggle theme">
              {mounted ? (dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />) : (
                <Sun className="h-5 w-5 opacity-60" aria-hidden />
              )}
            </Button>
            <Button asChild size="sm" variant="outline">
              <a href={pdfPath} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5">
                <Download className="h-4 w-4" /> Open in new tab
              </a>
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="rounded-lg border overflow-hidden bg-background">
          {ready ? (
            <embed src={pdfPath + "#view=FitH"} type="application/pdf" className="w-full h-[85vh]" />
          ) : (
            <div className="w-full h-[85vh] grid place-items-center text-sm text-muted-foreground">
              Loading viewer…
            </div>
          )}
          <div className="p-4 text-xs text-muted-foreground">
            If nothing appears, your browser may block inline PDFs. Use the button above to open it in a new tab.
          </div>
        </div>
      </div>
    </main>
  )
}
