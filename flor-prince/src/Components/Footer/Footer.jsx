import styles from './Footer.module.css';

export function Footer() {
    return (

      <footer className={styles.footer}>
        
        <div className={styles.footerInfo}>
          <h4>Sobre Nós</h4>
          <p>Todos os direitos reservados &copy; Fundação Flor Prince 2025</p>
        </div>
  
        <div className={styles.footerNewsletter}>
          <h4>Newsletter</h4>
          <p>Cadastre-se para receber novidades!</p>
        <form className={styles.newsletterForm}>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            className={styles.newsletterInput}
          />
          <button type="submit" className={styles.newsletterButton}>Enviar</button>
        </form>
        </div>
  
        <div className={styles.footerSociais}>
          <h4>Redes Sociais</h4>
          <ul>
            <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>

      </footer> 
    )
}