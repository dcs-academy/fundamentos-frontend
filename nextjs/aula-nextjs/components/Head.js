import Head from "next/head";

const defaultProps = {
  title: "Aula Next.js",
  description: "Descrição da página",
  keywords: "nextjs, aula",
};

export default function CustomHead({
  title = defaultProps.title,
  description = defaultProps.description,
  keywords = defaultProps.keywords,
  children,
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {children}
    </Head>
  );
}
