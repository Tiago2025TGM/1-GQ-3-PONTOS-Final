import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

type IoniconName = React.ComponentProps<typeof Ionicons>['name']

interface Module {
  name: string
  version: string
  icon: IoniconName
  description: string
  color: string
}

const MODULES: Module[] = [
  {
    name: 'React Native',
    version: '0.74.5',
    icon: 'logo-react',
    description: 'Framework principal para construção de apps mobile multiplataforma com JavaScript.',
    color: '#61dafb',
  },
  {
    name: 'Expo SDK',
    version: '~51.0.28',
    icon: 'phone-portrait-outline',
    description: 'Plataforma que facilita desenvolvimento, build e publicação de apps React Native.',
    color: '#6c4e38',
  },
  {
    name: 'Expo Router',
    version: '~3.5.23',
    icon: 'git-branch-outline',
    description: 'Navegação file-based com suporte a tabs, stacks e deep links automáticos.',
    color: '#c17b5a',
  },
  {
    name: 'TypeScript',
    version: '^5.3.0',
    icon: 'code-outline',
    description: 'Superset tipado do JavaScript que aumenta a segurança e a manutenibilidade do código.',
    color: '#3178c6',
  },
  {
    name: 'expo-linear-gradient',
    version: '~13.0.2',
    icon: 'color-palette-outline',
    description: 'Componente para criação de gradientes lineares de alta performance nas telas.',
    color: '#f368e0',
  },
  {
    name: 'react-native-svg',
    version: '15.2.0',
    icon: 'shapes-outline',
    description: 'Renderização de SVG no React Native — usado para desenhar o boneco da forca.',
    color: '#ff9f43',
  },
  {
    name: 'react-native-safe-area-context',
    version: '4.10.5',
    icon: 'shield-checkmark-outline',
    description: 'Gerencia áreas seguras em dispositivos com notch, Dynamic Island e bordas arredondadas.',
    color: '#48dbfb',
  },
  {
    name: 'react-native-screens',
    version: '3.31.1',
    icon: 'layers-outline',
    description: 'Componentes de tela nativos para melhor desempenho e experiência de navegação.',
    color: '#a29bfe',
  },
  {
    name: '@expo/vector-icons',
    version: '^14.0.2',
    icon: 'star-outline',
    description: 'Conjunto de ícones vetoriais: Ionicons, FontAwesome, MaterialIcons e outros.',
    color: '#feca57',
  },
  {
    name: 'expo-status-bar',
    version: '~1.12.1',
    icon: 'phone-portrait-outline',
    description: 'Controla a aparência e o estilo da barra de status do dispositivo.',
    color: '#54a0ff',
  },
  {
    name: 'expo-font',
    version: '~12.0.10',
    icon: 'text-outline',
    description: 'Carregamento de fontes customizadas de forma assíncrona antes da renderização.',
    color: '#00b894',
  },
  {
    name: 'expo-splash-screen',
    version: '~0.27.5',
    icon: 'image-outline',
    description: 'Controla a splash screen nativa mantendo-a visível enquanto o app inicializa.',
    color: '#e17055',
  },
]

export default function SobreScreen() {
  return (
    <SafeAreaView style={s.safe}>
      <ScrollView contentContainerStyle={s.content} showsVerticalScrollIndicator={false}>
        <LinearGradient colors={['#4a3228', '#6c4e38', '#8b6150']} style={s.hero}>
          <Ionicons name="information-circle" size={52} color="#fff" />
          <Text style={s.heroTitle}>Sobre o App</Text>
          <Text style={s.heroSub}>Portfólio desenvolvido em React Native + Expo</Text>
        </LinearGradient>

        <View style={s.descCard}>
          <Text style={s.descText}>
            Este app foi construído com <Text style={s.bold}>React Native</Text> e{' '}
            <Text style={s.bold}>Expo SDK 51</Text>, usando{' '}
            <Text style={s.bold}>Expo Router</Text> para navegar entre as telas via roteamento
            baseado em arquivos. Abaixo estão todos os módulos e dependências utilizados.
          </Text>
        </View>

        <View style={s.statsRow}>
          <View style={s.statBox}>
            <Text style={s.statNumber}>6</Text>
            <Text style={s.statLabel}>Telas</Text>
          </View>
          <View style={s.statDivider} />
          <View style={s.statBox}>
            <Text style={s.statNumber}>{MODULES.length}</Text>
            <Text style={s.statLabel}>Módulos</Text>
          </View>
          <View style={s.statDivider} />
          <View style={s.statBox}>
            <Text style={s.statNumber}>1</Text>
            <Text style={s.statLabel}>Jogo</Text>
          </View>
        </View>

        <Text style={s.sectionTitle}>Dependências e Módulos</Text>

        {MODULES.map((mod) => (
          <View key={mod.name} style={s.moduleCard}>
            <View style={[s.iconBox, { backgroundColor: mod.color + '22' }]}>
              <Ionicons name={mod.icon} size={24} color={mod.color} />
            </View>
            <View style={s.moduleInfo}>
              <View style={s.moduleHeader}>
                <Text style={s.moduleName}>{mod.name}</Text>
                <View style={s.versionBadge}>
                  <Text style={s.versionText}>{mod.version}</Text>
                </View>
              </View>
              <Text style={s.moduleDesc}>{mod.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fdf8f4' },
  content: { paddingBottom: 32 },
  hero: { alignItems: 'center', paddingVertical: 36, paddingHorizontal: 24, gap: 8 },
  heroTitle: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  heroSub: { fontSize: 13, color: 'rgba(255,255,255,0.82)', textAlign: 'center' },
  descCard: {
    margin: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.07,
    shadowRadius: 5,
  },
  descText: { fontSize: 14, color: '#4a3a33', lineHeight: 22 },
  bold: { fontWeight: 'bold', color: '#6c4e38' },
  statsRow: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginBottom: 8,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-around',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.07,
    shadowRadius: 5,
  },
  statBox: { alignItems: 'center' },
  statNumber: { fontSize: 28, fontWeight: 'bold', color: '#6c4e38' },
  statLabel: { fontSize: 12, color: '#8b6150', fontWeight: '600' },
  statDivider: { width: 1, height: 36, backgroundColor: '#e7d3c4' },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#6c4e38',
    marginLeft: 16,
    marginTop: 12,
    marginBottom: 10,
  },
  moduleCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginBottom: 10,
    borderRadius: 14,
    padding: 13,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.07,
    shadowRadius: 4,
    gap: 12,
  },
  iconBox: {
    width: 46,
    height: 46,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  moduleInfo: { flex: 1 },
  moduleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
    gap: 8,
  },
  moduleName: { fontSize: 14, fontWeight: 'bold', color: '#3a2a22', flex: 1 },
  versionBadge: {
    backgroundColor: '#f1e6dd',
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d4b5a0',
  },
  versionText: { fontSize: 10, color: '#6c4e38', fontWeight: '600' },
  moduleDesc: { fontSize: 12, color: '#5a4a40', lineHeight: 18 },
})
