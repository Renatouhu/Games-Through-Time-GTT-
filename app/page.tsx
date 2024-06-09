import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { page } from './page.css';

export default function Home() {
  return (
    <>
      <section className={page}>
        <Header></Header>
        <Main></Main>
      </section>
    </>
  );
}
