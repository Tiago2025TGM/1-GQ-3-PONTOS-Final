import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

type IoniconName = React.ComponentProps<typeof Ionicons>['name']

interface Project {
  name: string
  description: string
  techs: string[]
  icon: IoniconName
  color: string
  highlight?: boolean
  year: string
}

const PROJECTS: Project[] = [
  {
    name: 'Portfólio Mobile (Expo)',
    description:
      'Este próprio aplicativo! Portfolio em React Native com Expo, navegação por Expo Router com 6 telas completas e jogo da Forca nativo.',
    techs: ['React Native', 'Expo', 'Expo Router', 'TypeScript', 'SVG'],
    icon: 'phone-portrait',
    color: '#6c4e38',
    highlight: true,
    year: '2025',
  },
  {
    name: 'Portfólio Web (Next.js)',
    description:
      'Site pessoal desenvolvido com React e Next.js apresentando perfil, habilidades e jogo da Forca integrado na versão web.',
    techs: ['React', 'Next.js', 'TypeScript', 'CSS Modules'],
    icon: 'globe',
    color: '#61dafb',
    highlight: true,
    year: '2024',
  },
  {
    name: 'Jogo da Forca',
    description:
      'Implementação do clássico jogo da Forca com palavras do universo da programação. Disponível nas versões web e mobile com teclado virtual.',
    techs: ['React', 'React Native', 'JavaScript', 'CSS'],
    icon: 'game-controller',
    color: '#ff9f43',
    year: '2024',
  },
  {
    name: 'Algoritmos em Python',
    description:
      'Coleção de algoritmos e estruturas de dados implementados em Python, cobrindo ordenação (bubble, merge, quick), busca binária e listas ligadas.',
    techs: ['Python', 'Algoritmos', 'Estruturas de Dados'],
    icon: 'code-slash',
    color: '#3776ab',
    year: '2023',
  },
  {
    name: 'Projetos em C',
    description:
      'Implementações de algoritmos e manipulação de memória em C, incluindo ponteiros, alocação dinâmica e programação de baixo nível.',
    techs: ['C', 'Algoritmos', 'Ponteiros', 'Memória'],
    icon: 'terminal',
    color: '#5c6bc0',
    year: '2023',
  },
]

export default function ProjetosScreen() {
  const highlighted = PROJECTS.filter((p) => p.highlight)
  const others = PROJECTS.filter((p) => !p.highlight)

  return (
    <SafeAreaView style={s.safe}>
      <ScrollView contentContainerStyle={s.content} showsVerticalScrollIndicator={false}>
        <LinearGradient colors={['#4a3228', '#6c4e38', '#8b6150']} style={s.hero}>
          <Ionicons name="code-slash" size={52} color="#fff" />
          <Text style={s.heroTitle}>Projetos</Text>
          <Text style={s.heroSub}>{PROJECTS.length} projetos desenvolvidos</Text>
        </LinearGradient>

        <Text style={s.sectionTitle}>Em Destaque</Text>
        {highlighted.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}

        <Text style={s.sectionTitle}>Outros Projetos</Text>
        {others.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

function ProjectCard({ project: p }: { project: Project }) {
  return (
    <View style={[s.card, p.highlight && s.cardHighlight]}>
      {p.highlight && (
        <View style={s.featuredBadge}>
          <Ionicons name="star" size={10} color="#fff" />
          <Text style={s.featuredText}>Destaque</Text>
        </View>
      )}
      <View style={s.cardTop}>
        <View style={[s.iconBox, { backgroundColor: p.color + '22' }]}>
          <Ionicons name={p.icon} size={28} color={p.color} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={s.projectName} numberOfLines={2}>{p.name}</Text>
          <View style={s.yearRow}>
            <Ionicons name="calendar-outline" size={12} color="#8b6150" />
            <Text style={s.year}>{p.year}</Text>
          </View>
        </View>
      </View>
      <Text style={s.description}>{p.description}</Text>
      <View style={s.techRow}>
        {p.techs.map((t) => (
          <View key={t} style={s.techBadge}>
            <Text style={s.techText}>{t}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fdf8f4' },
  content: { paddingBottom: 32 },
  hero: { alignItems: 'center', paddingVertical: 36, paddingHorizontal: 24, gap: 8 },
  heroTitle: { fontSize: 22, fontWeight: 'bold', color: '#fff' },
  heroSub: { fontSize: 13, color: 'rgba(255,255,255,0.82)' },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#6c4e38',
    marginLeft: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginBottom: 14,
    borderRadius: 18,
    padding: 16,
    elevation: 3,
    shadowColor: '#6c4e38',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    position: 'relative',
    overflow: 'hidden',
  },
  cardHighlight: {
    borderWidth: 1.5,
    borderColor: '#c17b5a',
  },
  featuredBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#c17b5a',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderBottomLeftRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  featuredText: { fontSize: 11, color: '#fff', fontWeight: 'bold' },
  cardTop: { flexDirection: 'row', alignItems: 'flex-start', gap: 12, marginBottom: 10, paddingRight: 72 },
  iconBox: {
    width: 52,
    height: 52,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  projectName: { fontSize: 15, fontWeight: 'bold', color: '#3a2a22', marginBottom: 4 },
  yearRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  year: { fontSize: 12, color: '#8b6150' },
  description: { fontSize: 13, color: '#5a4a40', lineHeight: 20, marginBottom: 12 },
  techRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  techBadge: {
    backgroundColor: '#f1e6dd',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#d4b5a0',
  },
  techText: { fontSize: 11, color: '#6c4e38', fontWeight: '600' },
})
