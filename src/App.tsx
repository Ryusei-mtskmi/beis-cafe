import { useState, type FormEvent } from 'react';
import { ArrowRight, Heart, Instagram, Menu as MenuIcon, MessageCircle, Package, Sparkles, Truck, X } from 'lucide-react';

const brownie = {
  name: 'Goya White Choco Drizzle',
  subtitle: 'Fudgy brownie + white chocolate zigzag',
  description: 'Our rich, extra fudgy brownie finished with a diagonal zigzag drizzle of creamy Goya white chocolate.',
  image: '/images/image copy 5.png', // 👈 Fixed: Changed underscores to spaces to exactly match your filename
  price: '\$24 / box',
};

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [orderSent, setOrderSent] = useState(false);

  const closeMenu = () => setMobileOpen(false);
  const handleOrder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOrderSent(true);
  };

  return (
    <div className="site">
      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <a href="#home" className="brand" onClick={closeMenu}>
            <img src="/images/Brown_Cute_Illustrated_Brownie_Logo.png" alt="Bei's Crumbs" />
            <span>Bei's Crumbs</span>
          </a>
          <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={23} /> : <MenuIcon size={23} />}
          </button>
          <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
            <a href="#menu" onClick={closeMenu}>Menu</a>
            <a href="#story" onClick={closeMenu}>Our Story</a>
            <a href="#order" onClick={closeMenu}>Order</a>
          </div>
          <a className="order-pill" href="#order" onClick={closeMenu}>Order a box <ArrowRight size={16} /></a>
        </nav>
      </header>

      <main id="home">
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={16} /> Freshly baked, made to order</div>
            <h1>Baked with love,<br />one crumb at a<br /><em>time.</em></h1>
            <p>Bei's Crumbs makes small-batch, extra fudgy brownies topped with Goya white chocolate — perfect for gifts, cravings, and every sweet moment.</p>
            <div className="hero-actions"><a className="button button-pink" href="#menu">See the menu <ArrowRight size={17} /></a><a className="button button-white" href="#order">How to order</a></div>
            <div className="promise"><Heart size={18} fill="currentColor" /> Baked fresh in every batch — never from a box</div>
          </div>
          <div className="hero-art">
            <div className="hero-shape shape-pink" /><div className="hero-shape shape-lilac" />
            <div className="hero-photo"><img src={brownie.image} alt="Goya white chocolate drizzle brownie" /></div>
            <span className="photo-badge">100% Fudgy!</span>
          </div>
        </section>

        <section className="menu-section" id="menu">
          <div className="container">
            <div className="section-intro"><div className="eyebrow"><Sparkles size={16} /> Our menu</div><h2>The signature brownie</h2><p>One brownie, perfected — baked in small batches with lots of love.</p></div>
            <div className="feature-card">
              <div className="feature-image"><img src={brownie.image} alt={brownie.name} /><span>Signature</span></div>
              <div className="feature-copy"><h3>{brownie.name}</h3><div className="product-subtitle">{brownie.subtitle}</div><p>{brownie.description} The perfect sweet contrast in every bite.</p><strong>{brownie.price}</strong><a className="button button-lilac" href="#order">Order now <ArrowRight size={16} /></a></div>
            </div>
          </div>
        </section>

        <section className="story-section" id="story"><div className="container story-content"><div className="story-logo"><img src="/images/Brown_Cute_Illustrated_Brownie_Logo.png" alt="Bei's Crumbs logo" /></div><div className="story-copy"><div className="eyebrow"><Heart size={16} /> Our sweet little story</div><h2>Made for moments<br />that need <em>more chocolate.</em></h2><p>Bei's Crumbs started with a love of baking and two very cute taste-testers. Every batch is mixed, baked, and packed by hand — made to order so it arrives as gooey and fresh as the moment it left the oven.</p><p>Whether it's a birthday, a pick-me-up, or just a Tuesday that needs chocolate, every day deserves a little box of crumbs.</p><div className="story-values"><span><Heart size={18} /> Made with love</span><span><Sparkles size={18} /> Small-batch &amp; fresh</span><span><Package size={18} /> Gift-ready packaging</span></div></div></div></section>

        <section className="order-section container" id="order"><div className="section-intro"><div className="eyebrow"><Sparkles size={16} /> Ordering</div><h2>Getting your brownies is easy</h2></div><div className="steps"><div><b>1</b><h3>Pick your box</h3><p>Choose how many Goya white chocolate brownies you want.</p></div><div><b>2</b><h3>Send us a message</h3><p>Reach out with your box size, and the date you need them.</p></div><div><b>3</b><h3>Baked &amp; delivered</h3><p> We bake your order fresh and get those crumbs to you, ready to enjoy.</p></div></div>{orderSent ? <div className="order-success"><Heart size={30} fill="currentColor} /><h3>We'll save a batch for you.</h3><p>Thanks for reaching out! We'll be in touch soon.</p></div> : <form className="order-form" onSubmit={handleOrder}><MessageCircle size={31} /><h3>Ready for some crumbs?</h3><p>Message us with your order and we'll save a batch just for you.</p><div className="form-row"><input required type="text" placeholder="Your name" aria-label="Your name" /><input required type="email" placeholder="Email address" aria-label="Email address" /><button className="button button-pink" type="submit"><Truck size={17} /> Place an order</button></div></form>}</section>
      </main>

      <footer className="footer"><img src="/images/Brown_Cute_Illustrated_Brownie_Logo.png" alt="Bei's Crumbs" /><h3>Bei's Crumbs</h3><p>Baked with <Heart size={15} fill="currentColor" /> and lots of sprinkles</p><div className="footer-links"><a href="#menu">Menu</a><a href="#story">Our Story</a><a href="#order">Order</a><a href="#instagram"><Instagram size={17} /></a></div><small>© 2026 Bei's Crumbs. All rights reserved.</small></footer>
    </div>
  );
}

export default App;
