import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'

const LANGS = ['Python', 'C', 'JavaScript', 'HTML5', 'CSS']
const FRAMEWORKS = ['React', 'Next.js', 'React Native', 'Expo']

const ACADEMIC = [
  {
    institution: 'Faculdade / Universidade',
    course: 'Bacharelado em Ciência da Computação',
    period: '2023 – Presente',
    status: 'Em andamento',
    subjects: ['Algoritmos', 'POO', 'Banco de Dados', 'Redes', 'Eng. de Software'],
  },
  {
    institution: 'Ensino Médio',
    course: 'Ensino Médio Completo',
    period: '2020 – 2022',
    status: 'Concluído',
    subjects: ['Matemática', 'Física', 'Química'],
  },
]

const PROFESSIONAL = [
  {
    role: 'Desenvolvedor Freelancer',
    company: 'Projetos Próprios',
    period: '2023 – Presente',
    type: 'Freelance',
    skills: ['React', 'Next.js', 'React Native', 'TypeScript'],
  },
  {
    role: 'Estudante Pesquisador',
    company: 'Ciência da Computação',
    period: '2023 – Presente',
    type: 'Acadêmico',
    skills: ['Python', 'C', 'Algoritmos'],
  },
]

export default function HomeScreen() {
  return (
    <SafeAreaView style={s.safe}>
      <ScrollView contentContainerStyle={s.scroll} showsVerticalScrollIndicator={false}>
        <LinearGradient colors={['#4a3228', '#6c4e38', '#c17b5a']} style={s.hero}>
          <Image
            source={require('../../assets/minha-foto.png')}
            style={s.photo}
          />
          <Text style={s.name}>Tiago Marques de Oliveira</Text>
          <Text style={s.role}>Estudante de Ciência da Computação</Text>
          <View style={s.badgeRow}>
            <View style={s.heroBadge}>
              <Ionicons name="code-slash" size={12} color="#fff" />
              <Text style={s.heroBadgeText}>Dev Full-Stack</Text>
            </View>
            <View style={s.heroBadge}>
              <Ionicons name="phone-portrait" size={12} color="#fff" />
              <Text style={s.heroBadgeText}>Mobile Dev</Text>
            </View>
          </View>
        </LinearGradient>

        <View style={s.body}>
          {/* Sobre Mim */}
          <View style={s.card}>
            <View style={s.cardTitleRow}>
              <Ionicons name="person-circle-outline" size={20} color="#6c4e38" />
              <Text style={s.cardTitle}>Sobre Mim</Text>
            </View>
            <Text style={s.bio}>
              Olá! Sou Tiago, apaixonado por tecnologia e desenvolvimento de software.
              Gosto de criar projetos criativos e jogos, explorando o potencial das
              linguagens de programação para resolver problemas reais e aprender coisas novas.
            </Text>
          </View>

          {/* Linguagens */}
          <View style={s.card}>
            <View style={s.cardTitleRow}>
              <Ionicons name="terminal-outline" size={20} color="#6c4e38" />
              <Text style={s.cardTitle}>Linguagens</Text>
            </View>
            <View style={s.chips}>
              {LANGS.map((l) => (
                <View key={l} style={s.chip}>
                  <Text style={s.chipText}>{l}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Frameworks */}
          <View style={s.card}>
            <View style={s.cardTitleRow}>
              <Ionicons name="layers-outline" size={20} color="#6c4e38" />
              <Text style={s.cardTitle}>Frameworks & Ferramentas</Text>
            </View>
            <View style={s.chips}>
              {FRAMEWORKS.map((f) => (
                <View key={f} style={[s.chip, s.chipAlt]}>
                  <Text style={[s.chipText, s.chipTextAlt]}>{f}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Experiência Acadêmica */}
          <View style={s.sectionHeader}>
            <Ionicons name="school" size={18} color="#6c4e38" />
            <Text style={s.sectionTitle}>Experiência Acadêmica</Text>
          </View>
          {ACADEMIC.map((item, i) => (
            <View key={i} style={s.card}>
              <View style={s.itemHeader}>
                <View style={s.dot} />
                <View style={{ flex: 1 }}>
                  <Text style={s.itemTitle}>{item.course}</Text>
                  <Text style={s.itemSub}>{item.institution}</Text>
                  <View style={s.metaRow}>
                    <Ionicons name="calendar-outline" size={12} color="#8b6150" />
                    <Text style={s.period}>{item.period}</Text>
                    <View style={[s.statusBadge, item.status === 'Em andamento' ? s.badgeGreen : s.badgeGrey]}>
                      <Text style={[s.statusText, item.status === 'Em andamento' ? s.textGreen : s.textGrey]}>
                        {item.status}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={s.chips}>
                {item.subjects.map((sub) => (
                  <View key={sub} style={s.chip}>
                    <Text style={s.chipText}>{sub}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}

          {/* Experiência Profissional */}
          <View style={s.sectionHeader}>
            <Ionicons name="briefcase" size={18} color="#6c4e38" />
            <Text style={s.sectionTitle}>Experiência Profissional</Text>
          </View>
          {PROFESSIONAL.map((item, i) => (
            <View key={i} style={s.card}>
              <View style={s.itemHeader}>
                <View style={s.roleIcon}>
                  <Ionicons name="briefcase-outline" size={16} color="#6c4e38" />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={s.itemTitle}>{item.role}</Text>
                  <Text style={s.itemSub}>{item.company}</Text>
                  <View style={s.metaRow}>
                    <View style={s.typeBadge}>
                      <Text style={s.typeText}>{item.type}</Text>
                    </View>
                    <Ionicons name="calendar-outline" size={12} color="#8b6150" />
                    <Text style={s.period}>{item.period}</Text>
                  </View>
                </View>
              </View>
              <View style={s.chips}>
                {item.skills.map((sk) => (
                  <View key={sk} style={[s.chip, s.chipAlt]}>
                    <Text style={[s.chipText, s.chipTextAlt]}>{sk}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}

          {/* Contato */}
          <View style={s.card}>
            <View style={s.cardTitleRow}>
              <Ionicons name="mail-outline" size={20} color="#6c4e38" />
              <Text style={s.cardTitle}>Contato</Text>
            </View>
            <View style={s.contactRow}>
              <Ionicons name="logo-github" size={18} color="#6c4e38" />
              <Text style={s.contactText}>github.com/Tiago2025TOM</Text>
            </View>
            <View style={s.contactRow}>
              <Ionicons name="mail" size={18} color="#6c4e38" />
              <Text style={s.contactText}>andreguerra767@gmail.com</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fdf8f4' },
  scroll: { paddingBottom: 28 },
  hero: {
    alignItems: 'center',
    paddingTop: 44,
    paddingBottom: 36,
    paddingHorizontal: 24,
    gap: 8,
  },
  photo: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.9)',
    marginBottom: 8,
  },
  name: { fontSize: 22, fontWeight: 'bold', color: '#fff', textAlign: 'center' },
  role: { fontSize: 14, color: 'rgba(255,255,255,0.82)', textAlign: 'center' },
  badgeRow: { flexDirection: 'row', gap: 8, marginTop: 4 },
  heroBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(255,255,255,0.18)',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  heroBadgeText: { fontSize: 12, color: '#fff', fontWeight: '600' },
  body: { padding: 16, gap: 14 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 18,
    shadowColor: '#6c4e38',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 12 },
  cardTitle: { fontSize: 15, fontWeight: 'bold', color: '#6c4e38' },
  bio: { fontSize: 14, color: '#4a3a33', lineHeight: 22 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: {
    backgroundColor: '#f1e6dd',
    paddingHorizontal: 13,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#d4b5a0',
  },
  chipAlt: { backgroundColor: '#e8f0fe', borderColor: '#b3c7f4' },
  chipText: { fontSize: 13, color: '#6c4e38', fontWeight: '600' },
  chipTextAlt: { color: '#3a5ec9' },
  contactRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 8 },
  contactText: { fontSize: 13, color: '#4a3a33' },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 4,
    marginBottom: -4,
    paddingLeft: 2,
  },
  sectionTitle: { fontSize: 15, fontWeight: 'bold', color: '#6c4e38' },
  itemHeader: { flexDirection: 'row', gap: 10, marginBottom: 10 },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#6c4e38',
    marginTop: 4,
    flexShrink: 0,
  },
  roleIcon: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: '#f1e6dd',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  itemTitle: { fontSize: 14, fontWeight: 'bold', color: '#3a2a22', marginBottom: 2 },
  itemSub: { fontSize: 12, color: '#8b6150', marginBottom: 4 },
  metaRow: { flexDirection: 'row', alignItems: 'center', gap: 5, flexWrap: 'wrap' },
  period: { fontSize: 11, color: '#8b6150' },
  statusBadge: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8 },
  badgeGreen: { backgroundColor: '#d4edda' },
  badgeGrey: { backgroundColor: '#e2e3e5' },
  statusText: { fontSize: 10, fontWeight: '700' },
  textGreen: { color: '#155724' },
  textGrey: { color: '#383d41' },
  typeBadge: {
    backgroundColor: '#f1e6dd',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d4b5a0',
  },
  typeText: { fontSize: 10, color: '#6c4e38', fontWeight: '700' },
})
