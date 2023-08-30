import Image from "next/image";
import informatica from "../../public/images/informatica.jpg";

export default function PageCategoryInformatica() {
  return (
    <div>
      <Image
        alt="Informática"
        src={informatica}
        quality={80}
        placeholder="blur"
        blurDataURL=""
        sizes="100vw"
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
      {/* <Image
        alt="Livros"
        src="/images/livros.jpg"
        width={1080}
        height={280}
        sizes="100vw"
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      /> */}
      <h1>Categoria Informática</h1>
      <p>Texto de exemplo.</p>
    </div>
  );
}
