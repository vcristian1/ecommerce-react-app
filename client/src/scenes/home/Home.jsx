// Component that will set up our layout on our homepage.
import MainCarousel from './MainCarousel';
import ShoppingList from './ShoppingList'
import Subscribe from './Subscribe';

const Home = () => {
  return (
    <div className='home'>
      <MainCarousel />
      <ShoppingList />
      <Subscribe />
    </div>
  )
}

export default Home;
