"use client"

import { ChangeEvent, FormEvent, useMemo, useState } from "react"

const WORDS = [
  "JAVASCRIPT", "REACT", "NEXTJS", "PROGRAMACAO", "ALGORITMO", "FUNCAO", "COMPONENTE", "ESTADO", "PROPS", "HTML", "CSS", "MARKDOWN", "GITHUB", "VSCODE", "DESENVOLVEDOR", "MOBILE", "TABLET", "LAPTOP", "SOFTWARE", "HARDWARE", "LOGICA", "DEBUG", "TESTE", "DESAFIO", "APRENDIZADO", "BACKEND", "FRONTEND", "FULLSTACK", "DATABASE", "API",
]

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
const MAX_ERRORS = 6

const pickRandomWord = () => WORDS[Math.floor(Math.random() * WORDS.length)]

const normalizeLetter = (value: string) => value.trim().toUpperCase().slice(0, 1)

export default function ForcaPage() {
  const [word, setWord] = useState<string>(() => pickRandomWord())
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const [errors, setErrors] = useState<string[]>([])
  const [nextLetter, setNextLetter] = useState<string>("")

  const isGameOver = errors.length >= MAX_ERRORS
  const isWon = useMemo(
    () => word.split("").every((letter: string) => guessedLetters.includes(letter)),
    [word, guessedLetters],
  )
  const playing = !isGameOver && !isWon

  const displayedWord = useMemo(
    () =>
      word
        .split("")
        .map((letter: string) => (guessedLetters.includes(letter) ? letter : "_"))
        .join(" "),
    [word, guessedLetters],
  )

  const statusMessage = () => {
    if (isWon) return "🎉 Parabéns! Você ganhou!"
    if (isGameOver) return `☠️ Você perdeu! A palavra era: ${word}`
    return "Adivinhe a palavra antes do boneco ficar completo."
  }

  const usedLetters = [...new Set([...guessedLetters, ...errors])]

  const tryLetter = (raw: string) => {
    if (!playing) return
    const letter = normalizeLetter(raw)
    if (!letter.match(/^[A-Z]$/)) return
    if (usedLetters.includes(letter)) return

    if (word.includes(letter)) {
      setGuessedLetters((prev: string[]) => [...prev, letter])
    } else {
      setErrors((prev: string[]) => [...prev, letter])
    }
    setNextLetter("")
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    tryLetter(nextLetter)
  }

  const resetGame = () => {
    setWord(pickRandomWord())
    setGuessedLetters([])
    setErrors([])
    setNextLetter("")
  }

  return (
    <main className="forca-page container">
      <section className="forca-card">
        <h1>Jogo da Forca</h1>

        <p className="forca-status">{statusMessage()}</p>

        <div className="forca-wrapper">
          <div className="forca-drawing" aria-hidden="true">
            <div className="gallow" />
            <div className={`part head ${errors.length > 0 ? "visible" : ""}`} />
            <div className={`part body ${errors.length > 1 ? "visible" : ""}`} />
            <div className={`part left-arm ${errors.length > 2 ? "visible" : ""}`} />
            <div className={`part right-arm ${errors.length > 3 ? "visible" : ""}`} />
            <div className={`part left-leg ${errors.length > 4 ? "visible" : ""}`} />
            <div className={`part right-leg ${errors.length > 5 ? "visible" : ""}`} />
          </div>

          <div className="forca-gamepanel">
            <p className="forca-word">{displayedWord}</p>

            <p>Tentativas restantes: {MAX_ERRORS - errors.length}</p>

            <p className="forca-tried">
              Letras corretas: <strong>{guessedLetters.join(", ") || "nenhuma"}</strong>
            </p>
            <p className="forca-tried">
              Letras erradas: <strong>{errors.join(", ") || "nenhuma"}</strong>
            </p>

            <form onSubmit={handleSubmit} className="forca-form" aria-label="Enviar letra">
              <input
                maxLength={1}
                pattern="[A-Za-z]"
                disabled={!playing}
                value={nextLetter}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setNextLetter(e.target.value)}
                placeholder="Digite uma letra"
                className="forca-input"
                aria-label="Letra"
              />
            </form>

            <div className="keyboard" aria-label="Teclado virtual">
              {ALPHABET.map((letter) => {
                const used = usedLetters.includes(letter)
                return (
                  <button
                    key={letter}
                    className={`key ${used ? "used" : ""}`}
                    onClick={() => tryLetter(letter)}
                    disabled={used || !playing}
                    aria-label={`Letra ${letter}`}
                  >
                    {letter}
                  </button>
                )
              })}
            </div>

            <button type="button" onClick={resetGame} className="btn reset-btn">
              Reiniciar
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
