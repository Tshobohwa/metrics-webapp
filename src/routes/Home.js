import CountriesContainer from '../components/CountriesContainer';
import HomeHeader from '../components/HomeHeader';
import HomeSearchBar from '../components/HomeSearchBar';

function Home() {
  return (
    <main className="home--page">
      <header className="home--page__header">
        <HomeSearchBar />
        <HomeHeader />
      </header>
      <section className="home--page__body">
        <CountriesContainer />
      </section>
    </main>
  );
}

export default Home;
