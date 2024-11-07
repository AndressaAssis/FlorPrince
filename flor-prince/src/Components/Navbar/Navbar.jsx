import styles from './Navbar.module.css';
import ps1_logo from '../../assets/logo.png';
import { useLocation, useNavigate } from 'react-router-dom';

export function Navbar(){

    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = () => navigate("/home");
    const handleNavigation2 = () => navigate("/fundacao");
    const handleNavigation3 = () => navigate("/contato");
    const handleNavigation4 = () => navigate("/como-ajudar");
    const handleNavigation5 = () => navigate("/adocao");
    const handleNavigation6 = () => navigate("/denuncie");
    const handleNavigation7 = () => navigate("/blog");
    const handleNavigation8 = () => navigate("/clinica");
    const handleNavigation9 = () => navigate("/trabalhe-conosco");

    return(
        <>
            <header className={styles.header}>
                <div className={styles.imagemContainer}>
                    <img className={styles.imagemLogo} src={ps1_logo} alt="imagem-logo" />
                </div>
                <div className={styles.navList}>
                    <ul>
                     {location.pathname !== "/home" && (
                        <li>
                            <button className={styles.navButton} onClick={handleNavigation}>Home</button>
                        </li>
                         )}
                        <li>
                            <button className={styles.navButton} onClick={handleNavigation2}>A Fundação</button>
                        </li>
                        <li>
                            <button className={styles.navButton} onClick={handleNavigation4}>Como Ajudar</button>
                        </li>
                        <li>
                            <button className={styles.navButton} onClick={handleNavigation5}>Adoção</button>
                        </li>
                        <li>
                            <button className={styles.navButton} onClick={handleNavigation6}>Denuncie</button>
                        </li>
                        <li>
                            <button className={styles.navButton} onClick={handleNavigation7}>Blog</button>
                        </li>
                        <li>
                            <button className={styles.navButton} onClick={handleNavigation8}>A Clínica</button>
                        </li>
                        <li>
                            <button className={styles.navButton} onClick={handleNavigation3}>Contato</button>
                        </li>
                        <li>
                            <button className={styles.navButton} onClick={handleNavigation9}>Trabalhe Conosco</button>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}
