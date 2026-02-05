import './Hero.css'
import { Link } from 'react-router-dom'

function Hero({ title, subtitle, ctaText, image }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h2 className="hero-title">{title}</h2>
          <p className="hero-subtitle">{subtitle}</p>
          <p>Welcome to Lylah's store. Here you will find stuff, and then you can pay money to buy that stuff. Online shopping is cool.</p>
          <Link to="/products">
            <button className="hero-button">{ctaText}</button>
          </Link>        </div>

        <div className="hero-image">
          <img src={image} alt="Hero" />
        </div>
      </div>
    </section>
  )
}

export default Hero
