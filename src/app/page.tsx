import Head from 'next/head';
import { attributes, react as HomeContent } from '../../content/home.md';

export default function Home() {
  const { title, cats } = attributes;
  return (
    <>
      <Head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      </Head>
      <article>
        <h1>{title}</h1>
        <HomeContent />
        <ul>
          {cats.map((cat: any, k: number) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={k}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}
