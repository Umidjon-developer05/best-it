import { getDictionary } from "@/lib/dictionary";
import Main1 from "./components/Main1/Main1";
import About from "./components/about/about";
import Service from "./components/service/service";

export default async function Home({ params: { lang } }) {
  const { Main } = await getDictionary(lang);
  return (
    <main>
      <Main1 Main={Main} />
      <Service />
    </main>
  );
}
