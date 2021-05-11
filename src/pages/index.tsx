import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

type LoaderProps = { src: string; width?: number; quality?: number };

const sampleLoader = ({ src, width, quality = 75 }: LoaderProps) => {
  const url = new URL(src);
  const params = url.searchParams;

  // Override the existing parameters if some are set
  params.set(`q`, quality.toString()); // Explicity set the quality
  if (width) params.set(`w`, width.toString()); // If width is provided, set the width
  params.set(`fm`, `webp`); // Force all images to webp

  return `${url.origin}${url.pathname}?${params.toString()}`;
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <Image
          src="https://assets.vercel.com/image/upload/q_auto/front/zeit/og.png"
          alt=""
          quality={50}
          width={200}
          height={200}
          layout="fixed"
          objectFit="contain"
          loader={sampleLoader}
        />

        <p className={styles.description}>
          Get started by editing{` `}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <p className={styles.description}>This is not an official starter!</p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=typescript-nextjs-starter"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=typescript-nextjs-starter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{` `}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
