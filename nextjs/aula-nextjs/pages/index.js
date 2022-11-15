import Image from "next/image";
import styles from "../styles/Home.module.css";
import Head from "../components/Head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head
        title="Home"
        description="Conteúdo da página Home"
        keywords="home, nextjs, aula"
      >
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Next.js Class!</h1>
      </main>
    </div>
  );
}
