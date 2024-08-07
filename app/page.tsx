import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { page } from './page.css';
import { About } from './components/About/About';

export default function Home() {
  return (
    <>
      <section className={page}>
        <Header></Header>
        <Main></Main>
        <About />
      </section>
    </>
  );
}
