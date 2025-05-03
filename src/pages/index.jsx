import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
    <Banner />
    <Menu /> 
    <Gallery /> 
    <Contact />
    </main>
    <Footer />
  </div>
);

// klikání na hamburger
window.addEventListener("DOMContentLoaded", () => {
  document.querySelector('.nav-btn').addEventListener('click', () => {
    const nav = document.querySelector('.rollout-nav');
    nav.classList.toggle('nav-closed');
  });

// Schovej menu po kliknutí na odkaz
document.querySelector('.rollout-nav').addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    e.currentTarget.classList.add('nav-closed');
  }
});
});