import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

const EXPERIENCES = [
  {
    role: 'Desenvolvedor Freelancer',
    company: 'Projetos Próprios',
    period: '2023 – Presente',
    type: 'Freelance',
    description:
      'Desenvolvimento de aplicações web e mobile para projetos pessoais e acadêmicos, aplicando tecnologias modernas como React, Next.js e React Native com Expo.',
    achievements: [
      'Portfólio web com Next.js e TypeScript',
      'App mobile com React Native e Expo Router',
      'Jogo da Forca integrado nas duas plataformas',
    ],
    skills: ['React', 'Next.js', 'React Native', 'Expo', 'TypeScript'],
  },
  {
    role: 'Estudante Pesquisador',
    company: 'Ciência da Computação',
    period: '2023 – Presente',
    type: 'Acadêmico',
    description:
      'Desenvolvimento de projetos acadêmicos envolvendo algoritmos, estruturas de dados e programação em diversas linguagens como Python e C.',
    achievements: [
      'Implementação de algoritmos de ordenação em C',
      'Scripts de automação em Python',
      'Projetos de estruturas de dados avançadas',
    ],
    skills: ['Python', 'C', 'Algoritmos', 'Estruturas de Dados'],
  },
]

const SKILLS = [
  { name: 'JavaScript / TypeScript', pct: 80, color: '#f0c040' },
  { name: 'React / React Native', pct: 75, color: '#61dafb' },
  { name: 'HTML5 / CSS3', pct: 85, color: '#e44d26' },
  { name: 'Python', pct: 70, color: '#3776ab' },
  { name: 'C', pct: 60, color: '#5c6bc0' },
  { name: 'Next.js / Expo', pct: 72, color: '#6c4e38' },
  { name: 'Git / GitHub', pct: 68, color: '#f1502f' },
]

function SkillBar({ name, pct, color }: { name: string; pct: number; color: string }) {
  return (
    <View style={sb.row}>
      <View style={sb.header}>
        <Text style={sb.name}>{name}</Text>
        <Text style={sb.pct}>{pct}%</Text>
      </View>
      <View style={sb.track}>
        <View style={[sb.fill, { width: `${pct}%` as any, backgroundColor: color }]} />
      </View>
    </View>
  )
}

const sb = StyleSheet.create({
  row: { marginBottom: 14 },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 },
  name: { fontSize: 13, color: '#3a2a22', fontWeight: '600' },
  pct: { fontSize: 12, color: '#8b6150' },
  track: { height: 8, backgroundColor: '#f1e6dd', borderRadius: 4, overflow: 'hidden' },
  fill: { height: '100%', borderRadius: 4 },
})

export default function ProfissionalScreen() {
  return (
    <SafeAreaView style={s.safe}>
      <ScrollView contentContainerStyle={s.content} showsVerticalScrollIndicator={false}>
        <LinearGradient colors={['#4a3228', '#6c4e38', '#8b6150']} style={s.hero}>
          <Ionicons name="briefcase" size={52} color="#fff" />
          <Text style={s.heroTitle}>Experiência Profissional</Text>
          <Text style={s.heroSub}>Projetos e habilidades desenvolvidas</Text>
        </LinearGradient>

        <Text style={s.sectionTitle}>Experiências</Text>

        {EXPERIENCES.map((exp, i) => (
          <View key={i} style={s.card}>
            <View style={s.cardHeader}>
              <View style={s.roleIcon}>
                <Ionicons name="briefcase-outline" size={22} color="#6c4e38" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={s.role}>{exp.role}</Text>
                <Text style={s.company}>{exp.company}</Text>
                <View style={s.metaRow}>
                  <View style={s.typeBadge}>
                    <Text style={s.typeText}>{exp.type}</Text>
                  </View>
                  <Ionicons name="calendar-outline" size={12} color="#8b6150" />
                  <Text style={s.period}>{exp.period}</Text>
                </View>
              </View>
            </View>
            <Text style={s.description}>{exp.description}</Text>
            <Text style={s.achievLabel}>Conquistas:</Text>
            {exp.achievements.map((a, j) => (
              <View key={j} style={s.achievRow}>
                <Ionicons name="checkmark-circle" size={15} color="#6c4e38" />
                <Text style={s.achievText}>{a}</Text>
              </View>
            ))}
            <View style={s.tags}>
              {exp.skills.map((sk) => (
                <View key={sk} style={s.tag}>
                  <Text style={s.tagText}>{sk}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}

        <Text style={s.sectionTitle}>Habilidades Técnicas</Text>
        <View style={s.skillsCard}>
          {SKILLS.map((sk) => (
            <SkillBar key={sk.name} name={sk.name} pct={sk.pct} color={sk.color} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
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
  },
  cardHeader: { flexDirection: 'row', gap: 12, marginBottom: 10 },
  roleIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#f1e6dd',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  role: { fontSize: 15, fontWeight: 'bold', color: '#3a2a22', marginBottom: 2 },
  company: { fontSize: 13, color: '#8b6150', marginBottom: 5 },
  metaRow: { flexDirection: 'row', alignItems: 'center', gap: 6, flexWrap: 'wrap' },
  typeBadge: {
    backgroundColor: '#f1e6dd',
    paddingHorizontal: 9,
    paddingVertical: 2,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d4b5a0',
  },
  typeText: { fontSize: 11, color: '#6c4e38', fontWeight: '700' },
  period: { fontSize: 12, color: '#8b6150' },
  description: { fontSize: 13, color: '#5a4a40', lineHeight: 20, marginBottom: 10 },
  achievLabel: { fontSize: 12, color: '#6c4e38', fontWeight: '700', marginBottom: 6 },
  achievRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 7, marginBottom: 5 },
  achievText: { fontSize: 13, color: '#4a3a33', flex: 1, lineHeight: 18 },
  tags: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginTop: 10 },
  tag: {
    backgroundColor: '#f1e6dd',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#d4b5a0',
  },
  tagText: { fontSize: 11, color: '#6c4e38', fontWeight: '600' },
  skillsCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 18,
    padding: 18,
    elevation: 3,
    shadowColor: '#6c4e38',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
})
