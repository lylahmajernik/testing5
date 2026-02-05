import './Footer.css'

function Footer({ storeName, address, email, phone }) {
  return (
    <footer className="footer">
      <h3 className="footer-store">{storeName}</h3>
      <p className="footer-info">{address}</p>
      <p className="footer-info">Email: {email}</p>
      <p className="footer-info">Phone: {phone}</p>
    </footer>
  )
}

export default Footer
