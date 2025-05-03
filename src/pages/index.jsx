import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

import { Header } from '../Components/Header';
import { Banner } from '../Components/Banner';
import { Menu } from '../Components/Menu';
import { Gallery } from '../Components/Gallery';
import { Contact } from '../Components/Contact';
import { Footer } from '../Components/Footer';

const loadDrinks = async () => {
  const response = await fetch('http://localhost:4001/api/drinks');
  const json = await response.json();

  document.querySelector('#root').innerHTML = render(
    <div className="page">
      <Header />
      <main>
        <Banner />
        <Menu drinks={json.data} />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );

  // 💥 TADY – až po renderu! 
  const navBtn = document.querySelector('.nav-btn');
  const rolloutNav = document.querySelector('.rollout-nav');

  navBtn?.addEventListener('click', () => {
    rolloutNav.classList.toggle('nav-closed');
  });

  rolloutNav?.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      rolloutNav.classList.add('nav-closed');
    }
  });
};

loadDrinks();