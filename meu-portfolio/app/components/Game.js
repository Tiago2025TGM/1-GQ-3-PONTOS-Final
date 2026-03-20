"use client";
import { useState, useEffect } from "react";
import styles from "../../styles/forca.module.css";

const palavras = [
  "REACT","JAVASCRIPT","PROGRAMACAO","DESENVOLVEDOR","NEXTJS",
  "FRONTEND","BACKEND","CODIGO","ALGORITMO","COMPUTADOR",
  "SOFTWARE","HARDWARE","INTERNET","BROWSER","SERVIDOR",
  "HTML","CSS","NODE","API","BANCO","DADOS","GITHUB",
  "VERCEL","DEPLOY","DEBUG","FUNCAO","VARIAVEL","OBJETO",
  "ARRAY","LOOP","CONDICAO"
];

export default function Game() {
  const [palavra, setPalavra] = useState("");
  const [letras, setLetras] = useState([]);
  const [erros, setErros] = useState(0);
  const maxErros = 6;
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    iniciarJogo();
  }, []);

  function iniciarJogo() {
    const nova = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavra(nova);
    setLetras([]);
    setErros(0);
    setStatus("");
  }

  function tentarLetra() {
    const letra = input.toUpperCase();
    setInput("");

    if (!letra || letras.includes(letra)) return;

    setLetras([...letras, letra]);

    if (!palavra.includes(letra)) {
      setErros(erros + 1);
    }
  }

  function palavraExibida() {
    return palavra
      .split("")
      .map(l => (letras.includes(l) ? l : "_"))
      .join(" ");
  }

  useEffect(() => {
    if (!palavra) return;

    const ganhou = palavra.split("").every(l => letras.includes(l));

    if (ganhou) setStatus("ganhou");
    if (erros >= maxErros) setStatus("perdeu");
  }, [letras, erros]);

  return (
    <div className={styles.container}>
      <p className={styles.palavra}>{palavraExibida()}</p>

      <p>Erros: {erros} / {maxErros}</p>

      <div>
        <input
          value={input}
          maxLength={1}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={tentarLetra}>Enviar</button>
      </div>

      <p>
        Letras usadas: {letras.join(", ")}
      </p>

      {status === "ganhou" && (
        <p className={styles.vitoria}>
          🎉 Parabéns! Palavra: {palavra}
        </p>
      )}

      {status === "perdeu" && (
        <p className={styles.derrota}>
          ❌ Você perdeu! Era: {palavra}
        </p>
      )}

      <button onClick={iniciarJogo}>🔄 Reiniciar</button>

      <div className={styles.forca}>
        <div className={styles.boneco + " " + styles["erro" + erros]}></div>
      </div>
    </div>
  );
}