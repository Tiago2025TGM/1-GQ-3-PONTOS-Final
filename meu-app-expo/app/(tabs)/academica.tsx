import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

const FORMATION = [
  {
    institution: 'Faculdade / Universidade',
    course: 'Bacharelado em Ciência da Computação',
    period: '2023 – Presente',
    status: 'Em andamento',
    description:
      'Curso que abrange fundamentos de algoritmos, estruturas de dados, sistemas operacionais, redes, engenharia de software, banco de dados e desenvolvimento de aplicações web e mobile.',
    subjects: [
      'Algoritmos e Estruturas de Dados',
      'Programação Orientada a Objetos',
      'Banco de Dados',
      'Redes de Computadores',
      'Sistemas Operacionais',
      'Engenharia de Software',
      'Desenvolvimento Web',
      'Desenvolvimento Mobile',
    ],
  },
  {
    institution: 'Escola de Ensino Médio',
    course: 'Ensino Médio Completo',
    period: '2020 – 2022',
    status: 'Concluído',
    description:
      'Formação básica com ênfase em ciências exatas, preparando a base matemática e lógica para o ingresso na graduação em Computação.',
    subjects: ['Matemática', 'Física', 'Química', 'Biologia'],
  },
]

const COURSES = [
  { name: 'Python para Iniciantes', platform: 'Curso Online', year: '2022', icon: 'logo-python' as const },
  { name: 'JavaScript e Web Development', platform: 'Curso Online', year: '2023', icon: 'logo-javascript' as const },
  { name: 'React e Next.js', platform: 'Curso Online', year: '2024', icon: 'logo-react' as const },
  { name: 'React Native e Expo', platform: 'Curso Online', year: '2025', icon: 'phone-portrait-outline' as const },
  { name: 'Algoritmos e Lógica de Programação', platform: 'Curso Online', year: '2022', icon: 'bulb-outline' as const },
  { name: 'Git e GitHub', platform: 'Curso Online', year: '2023', icon: 'git-branch-outline' as const },
]

export default function AcademicaScreen() {
  return (
    <SafeAreaView style={s.safe}>
      <ScrollView contentContainerStyle={s.content} showsVerticalScrollIndicator={false}>
        <LinearGradient colors={['#4a3228', '#6c4e38', '#8b6150']} style={s.hero}>
          <Ionicons name="school" size={52} color="#fff" />
          <Text style={s.heroTitle}>Experiência Acadêmica</Text>
          <Text style={s.heroSub}>Formação e cursos complementares</Text>
        </LinearGradient>

        <Text style={s.sectionTitle}>Formação Acadêmica</Text>

        {FORMATION.map((item, i) => (
          <View key={i} style={s.card}>
            <View style={s.cardTopRow}>
              <View style={s.timelineDot} />
              <View style={{ flex: 1 }}>
                <Text style={s.institution}>{item.institution}</Text>
                <Text style={s.course}>{item.course}</Text>
                <View style={s.metaRow}>
                  <Ionicons name="calendar-outline" size={13} color="#8b6150" />
                  <Text style={s.period}>{item.period}</Text>
                  <View style={[s.statusBadge, item.status === 'Em andamento' ? s.badgeActive : s.badgeDone]}>
                    <Text style={[s.statusText, item.status === 'Em andamento' ? s.textActive : s.textDone]}>
                      {item.status}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Text style={s.description}>{item.description}</Text>
            <Text style={s.subjectsLabel}>Disciplinas e Conteúdos:</Text>
            <View style={s.subjects}>
              {item.subjects.map((sub) => (
                <View key={sub} style={s.subjectTag}>
                  <Text style={s.subjectText}>{sub}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}

        <Text style={s.sectionTitle}>Cursos Complementares</Text>
        <View style={s.coursesCard}>
          {COURSES.map((c, i) => (
            <View key={i} style={[s.courseRow, i < COURSES.length - 1 && s.courseRowBorder]}>
              <View style={s.courseIcon}>
                <Ionicons name={c.icon} size={18} color="#6c4e38" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={s.courseName}>{c.name}</Text>
                <Text style={s.courseMeta}>{c.platform} · {c.year}</Text>
              </View>
              <Ionicons name="checkmark-circle" size={20} color="#28a745" />
            </View>
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
  cardTopRow: { flexDirection: 'row', gap: 12, marginBottom: 10 },
  timelineDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#6c4e38',
    marginTop: 3,
    flexShrink: 0,
  },
  institution: { fontSize: 12, color: '#8b6150', fontWeight: '600', marginBottom: 2 },
  course: { fontSize: 15, fontWeight: 'bold', color: '#3a2a22', marginBottom: 5 },
  metaRow: { flexDirection: 'row', alignItems: 'center', gap: 6, flexWrap: 'wrap' },
  period: { fontSize: 12, color: '#8b6150' },
  statusBadge: { paddingHorizontal: 9, paddingVertical: 2, borderRadius: 10 },
  badgeActive: { backgroundColor: '#d4edda' },
  badgeDone: { backgroundColor: '#e2e3e5' },
  statusText: { fontSize: 11, fontWeight: '700' },
  textActive: { color: '#155724' },
  textDone: { color: '#383d41' },
  description: { fontSize: 13, color: '#5a4a40', lineHeight: 20, marginBottom: 10 },
  subjectsLabel: { fontSize: 12, color: '#6c4e38', fontWeight: '700', marginBottom: 7 },
  subjects: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  subjectTag: {
    backgroundColor: '#f1e6dd',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#d4b5a0',
  },
  subjectText: { fontSize: 11, color: '#6c4e38', fontWeight: '600' },
  coursesCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 18,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#6c4e38',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  courseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    gap: 12,
  },
  courseRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#f1e6dd',
  },
  courseIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#f1e6dd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  courseName: { fontSize: 13, fontWeight: '600', color: '#3a2a22' },
  courseMeta: { fontSize: 11, color: '#8b6150', marginTop: 1 },
})
