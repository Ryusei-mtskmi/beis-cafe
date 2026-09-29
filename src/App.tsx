import { useState, type FormEvent } from 'react';
import { ArrowRight, Check, Heart, Instagram, Menu, Plus, ShoppingBag, Sparkles, X } from 'lucide-react';

type Product = {
  name: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
  color: string;
};

const products: Product[] = [
  {
    name: 'The Classic',
    description: 'Fudgy, gooey, and unapologetically chocolatey.',
    price: '$24',
    image: 'https://images.pexels.com/photos/14576526/pexels-photo-14576526.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Fan favorite',
    color: 'blush',
  },
  {
    name: 'Berry Blush',
    description: 'Dark chocolate brownie, raspberry swirl, pink sparkle.',
    price: '$28',
    image: 'https://images.pexels.com/photos/6441836/pexels-photo-6441836.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'New drop',
    color: 'lilac',
  },
  {
    name: 'Salted Caramel',
    description: 'A little salty, a lot caramel-y, always gone first.',
    price: '$28',
    image: 'https://images.pexels.com/photos/30924035/pexels-photo-30924035.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    color: 'butter',
  },
];

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const addToCart = () => setCartCount((count) => count + 1);

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <div className="site-shell">
      <div className="announcement"><Sparkles size={14} /> Free local delivery on orders over $40 <ArrowRight size={14} /></div>

      <header className="nav-wrap">
        <nav className="nav container" aria-label="Main navigation">
          <button className="mobile-menu" aria-label="Open menu" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <a href="#top" className="brand" aria-label="Bet's Crumbs home">
            <img src="/images/Brown_Cute_Illustrated_Brownie_Logo.png" alt="Bet's Crumbs" />
          </a>
          <div className={`nav-links ${mobileOpen ? 'is-open' : ''}`}>
            <a href="#shop" onClick={() => setMobileOpen(false)}>Shop brownies</a>
            <a href="#story" onClick={() => setMobileOpen(false)}>Our story</a>
            <a href="#faq" onClick={() => setMobileOpen(false)}>FAQ</a>
          </div>
          <button className="cart-button" aria-label={`${cartCount} items in cart`}>
            <ShoppingBag size={20} /> <span className="cart-label">Cart</span><span className="cart-count">{cartCount}</span>
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> Small batch, big feelings</div>
            <h1>Brownies baked for your <em>soft era.</em></h1>
            <p className="hero-text">The comfiest, fudgiest little squares in town. Made from scratch in tiny batches and wrapped up with a whole lot of love.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#shop">Find your favorite <ArrowRight size={17} /></a>
              <a className="text-link" href="#story">How it started <ArrowRight size={15} /></a>
            </div>
            <div className="hero-note"><div className="avatar-stack"><span>J</span><span>M</span><span>K</span></div><span>Loved by 2,000+ sweet tooths</span><Heart size={15} fill="currentColor" /></div>
          </div>
          <div className="hero-art">
            <div className="hero-blob blob-one" />
            <div className="hero-blob blob-two" />
            <div className="hero-image-frame"><img src={products[0].image} alt="A stack of fudgy chocolate brownies" /></div>
            <div className="sticker sticker-top">made<br /><span>with love</span> <Heart size={16} fill="currentColor" /></div>
            <div className="sticker sticker-bottom">100%<br /><span>gooey</span></div>
            <div className="doodle doodle-star">✦</div>
          </div>
        </section>

        <section className="marquee" aria-label="Brand promise"><div>FUDGE FIRST <span>✦</span> TINY BATCHES <span>✦</span> BIG CRUMBS <span>✦</span> ZERO BORING BITES <span>✦</span> FUDGE FIRST <span>✦</span></div></section>

        <section className="shop-section container" id="shop">
          <div className="section-heading"><div><div className="eyebrow">The good stuff</div><h2>Pick your <em>happy.</em></h2></div><a className="text-link desktop-link" href="#shop">View all treats <ArrowRight size={15} /></a></div>
          <div className="product-grid">
            {products.map((product) => <article className={`product-card ${product.color}`} key={product.name}>
              <div className="product-image"><img src={product.image} alt={product.name} />{product.tag && <span className="product-tag">{product.tag}</span>}<button className="wishlist" aria-label={`Save ${product.name}`}><Heart size={17} /></button></div>
              <div className="product-info"><div><h3>{product.name}</h3><p>{product.description}</p></div><div className="product-bottom"><strong>{product.price}<small> / box of 6</small></strong><button className="add-button" onClick={addToCart}><Plus size={16} /> Add</button></div></div>
            </article>)}
          </div>
          <div className="shop-note"><span><Check size={16} /> Baked fresh every Friday</span><span><Check size={16} /> Pickup or local delivery</span><span><Check size={16} /> Cute packaging, guaranteed</span></div>
        </section>

        <section className="story-section container" id="story">
          <div className="story-card"><div className="story-image"><img src="https://images.pexels.com/photos/12364897/pexels-photo-12364897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Freshly baked brownies on a serving tray" /><span className="story-stamp">est.<br /><b>2021</b></span></div><div className="story-copy"><div className="eyebrow">A little bit about us</div><h2>It started with a <em>craving.</em></h2><p>Bet started baking brownies for friends during a rainy week in 2021. One batch turned into three, three turned into a tiny neighborhood following, and well... here we are.</p><p>Everything is still mixed, baked, and packed by hand from our cozy little kitchen. No shortcuts. Just really good chocolate.</p><a className="button button-outline" href="#faq">Read our story <ArrowRight size={17} /></a></div></div>
        </section>

        <section className="quote-section"><div className="quote-mark">“</div><blockquote>These are the kind of brownies<br className="desktop-break" /> you hide from your family.</blockquote><div className="quote-author">— Jamie R. <span>★★★★★</span></div></section>

        <section className="newsletter container" id="faq"><div className="newsletter-inner"><div><div className="eyebrow">Stay in the loop</div><h2>Sweet things, straight<br />to your inbox.</h2><p>First dibs on new flavors, cozy news, and occasional brownie emergencies.</p></div>{subscribed ? <div className="success-message"><Check size={22} /><strong>You’re on the list!</strong><span>Watch your inbox for something sweet.</span></div> : <form onSubmit={handleSubscribe} className="subscribe-form"><label htmlFor="email">Your email address</label><div><input id="email" type="email" placeholder="you@example.com" value={email} onChange={(event) => setEmail(event.target.value)} required /><button type="submit" aria-label="Subscribe"><ArrowRight size={19} /></button></div><small>We promise not to be annoying. Just delicious.</small></form>}</div></section>
      </main>

      <footer className="footer"><div className="container footer-content"><a href="#top" className="footer-brand"><img src="/images/Brown_Cute_Illustrated_Brownie_Logo.png" alt="Bet's Crumbs" /></a><p>Made with soft hearts &amp; messy kitchens.</p><div className="footer-links"><a href="#shop">Shop</a><a href="#story">About</a><a href="#faq">Contact</a><a href="#instagram"><Instagram size={18} /></a></div></div></footer>
    </div>
  );
}

export default App;
