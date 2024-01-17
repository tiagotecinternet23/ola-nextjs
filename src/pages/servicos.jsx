import Menu from "@/components/Menu";
import Head from "next/head";

export default function Servicos() {
  return (
    <>
      <Head>
        <title>Serviços - Meu app Next.js</title>
        <meta name="description" content="Página serviços..." />
      </Head>

      <h1>Olá Next.js!</h1>
      <Menu />

      <h2>Serviços</h2>
      <ol>
        <li>Bla bla bla</li>
        <li>Bla bla bla</li>
        <li>Bla bla bla</li>
      </ol>
    </>
  );
}
