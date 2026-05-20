import { useState, useMemo } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import Svg, { Line, Circle } from 'react-native-svg'

const WORDS = [
  'JAVASCRIPT', 'REACT', 'EXPO', 'PROGRAMACAO', 'ALGORITMO',
  'FUNCAO', 'COMPONENTE', 'ESTADO', 'PROPS', 'HTML',
  'CSS', 'GITHUB', 'TYPESCRIPT', 'MOBILE', 'SOFTWARE',
  'LOGICA', 'DEBUG', 'DESAFIO', 'BACKEND', 'FRONTEND',
  'FULLSTACK', 'DATABASE', 'API', 'PYTHON', 'NEXTJS',
  'VARIAVEL', 'LOOP', 'CONDICIONAL', 'CLASSE', 'OBJETO',
]

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const MAX_ERRORS = 6

const pickRandom = () => WORDS[Math.floor(Math.random() * WORDS.length)]

function GallowsSvg({ errors }: { errors: number }) {
  const c = '#3a2921'
  const sw = 5
  return (
    <Svg width={150} height={185} viewBox="0 0 150 185">
      {/* Base */}
      <Line x1="10" y1="178" x2="95" y2="178" stroke={c} strokeWidth={sw} strokeLinecap="round" />
      {/* Vertical post */}
      <Line x1="38" y1="178" x2="38" y2="10" stroke={c} strokeWidth={sw} strokeLinecap="round" />
      {/* Horizontal beam */}
      <Line x1="38" y1="10" x2="112" y2="10" stroke={c} strokeWidth={sw} strokeLinecap="round" />
      {/* Rope */}
      <Line x1="112" y1="10" x2="112" y2="33" stroke={c} strokeWidth={sw} strokeLinecap="round" />
      {/* Head */}
      {errors >= 1 && <Circle cx="112" cy="48" r="15" stroke={c} strokeWidth={sw} fill="none" />}
      {/* Body */}
      {errors >= 2 && (
        <Line x1="112" y1="63" x2="112" y2="115" stroke={c} strokeWidth={sw} strokeLinecap="round" />
      )}
      {/* Left arm */}
      {errors >= 3 && (
        <Line x1="112" y1="77" x2="87" y2="103" stroke={c} strokeWidth={sw} strokeLinecap="round" />
      )}
      {/* Right arm */}
      {errors >= 4 && (
        <Line x1="112" y1="77" x2="137" y2="103" stroke={c} strokeWidth={sw} strokeLinecap="round" />
      )}
      {/* Left leg */}
      {errors >= 5 && (
        <Line x1="112" y1="115" x2="87" y2="148" stroke={c} strokeWidth={sw} strokeLinecap="round" />
      )}
      {/* Right leg */}
      {errors >= 6 && (
        <Line x1="112" y1="115" x2="137" y2="148" stroke={c} strokeWidth={sw} strokeLinecap="round" />
      )}
    </Svg>
  )
}

export default function JogoScreen() {
  const [word, setWord] = useState<string>(pickRandom)
  const [guessed, setGuessed] = useState<string[]>([])
  const [errors, setErrors] = useState<string[]>([])

  const isOver = errors.length >= MAX_ERRORS
  const isWon = useMemo(
    () => word.split('').every((l) => guessed.includes(l)),
    [word, guessed],
  )
  const playing = !isOver && !isWon

  const displayWord = useMemo(
    () => word.split('').map((l) => (guessed.includes(l) ? l : '_')).join('  '),
    [word, guessed],
  )

  const used = useMemo(() => [...new Set([...guessed, ...errors])], [guessed, errors])

  const tryLetter = (letter: string) => {
    if (!playing || used.includes(letter)) return
    if (word.includes(letter)) {
      setGuessed((prev) => [...prev, letter])
    } else {
      setErrors((prev) => [...prev, letter])
    }
  }

  const reset = () => {
    setWord(pickRandom())
    setGuessed([])
    setErrors([])
  }

  const statusColor = isWon ? '#1a6b2a' : isOver ? '#b22222' : '#6c4e38'
  const statusText = isWon
    ? '🎉 Parabéns! Você venceu!'
    : isOver
    ? `☠️ Perdeu! Era: ${word}`
    : `Adivinhe a palavra!`

  return (
    <SafeAreaView style={s.safe}>
      <ScrollView contentContainerStyle={s.content} showsVerticalScrollIndicator={false}>
        {/* Header row */}
        <View style={s.topBar}>
          <Text style={s.title}>Jogo da Forca</Text>
          <View style={s.livesRow}>
            {Array.from({ length: MAX_ERRORS }).map((_, i) => (
              <View
                key={i}
                style={[s.liveDot, i < errors.length ? s.liveDotDead : s.liveDotAlive]}
              />
            ))}
          </View>
        </View>

        {/* Status */}
        <Text style={[s.status, { color: statusColor }]}>{statusText}</Text>

        {/* Game area: gallows + word */}
        <View style={s.gameCard}>
          <GallowsSvg errors={errors.length} />
          <View style={s.wordSection}>
            <Text
              style={s.wordDisplay}
              adjustsFontSizeToFit
              numberOfLines={1}
            >
              {displayWord}
            </Text>
            <Text style={s.remaining}>
              {MAX_ERRORS - errors.length} tentativa{MAX_ERRORS - errors.length !== 1 ? 's' : ''} restante{MAX_ERRORS - errors.length !== 1 ? 's' : ''}
            </Text>
            {guessed.length > 0 && (
              <Text style={s.guessedLabel}>
                Certas:{' '}
                <Text style={s.guessedLetters}>{guessed.join(', ')}</Text>
              </Text>
            )}
          </View>
        </View>

        {/* Wrong letters */}
        {errors.length > 0 && (
          <View style={s.wrongBox}>
            <Text style={s.wrongLabel}>Letras erradas:</Text>
            <View style={s.wrongRow}>
              {errors.map((e) => (
                <View key={e} style={s.wrongBadge}>
                  <Text style={s.wrongLetter}>{e}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Virtual keyboard */}
        <View style={s.keyboard}>
          {ALPHABET.map((letter) => {
            const isUsed = used.includes(letter)
            const isCorrect = guessed.includes(letter)
            const isWrong = errors.includes(letter)
            return (
              <TouchableOpacity
                key={letter}
                style={[
                  s.key,
                  isCorrect && s.keyCorrect,
                  isWrong && s.keyWrong,
                  (isUsed || !playing) && s.keyDisabled,
                ]}
                onPress={() => tryLetter(letter)}
                disabled={isUsed || !playing}
                activeOpacity={0.6}
              >
                <Text style={[s.keyText, isCorrect && s.keyTextCorrect, isWrong && s.keyTextWrong]}>
                  {letter}
                </Text>
              </TouchableOpacity>
            )
          })}
        </View>

        {/* Reset button */}
        <TouchableOpacity style={s.resetBtn} onPress={reset} activeOpacity={0.8}>
          <Ionicons name="refresh-outline" size={20} color="#fff" />
          <Text style={s.resetText}>Nova Partida</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fdf8f4' },
  content: { padding: 16, paddingBottom: 32 },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  title: { fontSize: 20, fontWeight: 'bold', color: '#3a2a22' },
  livesRow: { flexDirection: 'row', gap: 5 },
  liveDot: { width: 13, height: 13, borderRadius: 7 },
  liveDotAlive: { backgroundColor: '#d4edda', borderWidth: 1.5, borderColor: '#a8d5b5' },
  liveDotDead: { backgroundColor: '#b22222' },
  status: { fontSize: 15, fontWeight: 'bold', textAlign: 'center', marginBottom: 12 },
  gameCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 12,
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#6c4e38',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  wordSection: { flex: 1, paddingLeft: 8 },
  wordDisplay: {
    fontSize: 22,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#3a2a22',
    letterSpacing: 2,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  remaining: { fontSize: 13, color: '#6c4e38', fontWeight: '600', marginBottom: 5 },
  guessedLabel: { fontSize: 12, color: '#5a4a40' },
  guessedLetters: { color: '#1a6b2a', fontWeight: 'bold' },
  wrongBox: {
    backgroundColor: '#fff4f4',
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#f5c6cb',
  },
  wrongLabel: { fontSize: 12, color: '#b22222', fontWeight: '700', marginBottom: 6 },
  wrongRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 5 },
  wrongBadge: {
    backgroundColor: '#fde8e8',
    width: 30,
    height: 30,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#f5c6cb',
  },
  wrongLetter: { fontSize: 13, color: '#b22222', fontWeight: 'bold' },
  keyboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 5,
    marginBottom: 16,
  },
  key: {
    width: 34,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#f1e6dd',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#d4b5a0',
  },
  keyCorrect: { backgroundColor: '#d4edda', borderColor: '#a8d5b5' },
  keyWrong: { backgroundColor: '#fde8e8', borderColor: '#f5c6cb' },
  keyDisabled: { opacity: 0.4 },
  keyText: { fontSize: 13, fontWeight: 'bold', color: '#3b2b22' },
  keyTextCorrect: { color: '#1a6b2a' },
  keyTextWrong: { color: '#b22222' },
  resetBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6c4e38',
    borderRadius: 14,
    paddingVertical: 15,
    gap: 8,
    elevation: 2,
    shadowColor: '#6c4e38',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  resetText: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
})
