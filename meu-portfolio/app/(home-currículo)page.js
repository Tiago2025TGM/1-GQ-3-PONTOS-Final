import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <h1>👨‍💻 Meu Portfólio</h1>
      
      <section>
        <h2>Sobre Mim</h2>
        <p>Desenvolvedor focado em React, Next.js e front-end moderno.</p>
      </section>

      <section>
        <h2>Habilidades</h2>
        <ul>
          <li>JavaScript</li>
          <li>React / Next.js</li>
          <li>HTML & CSS</li>
        </ul>
      </section>

      <section>
        <h2>Projetos</h2>
        <p>Confira meu jogo:</p>
        <Link href="/forca" className="btn">
          🎮 Jogo da Forca
        </Link>
      </section>
    </main>
  );
}