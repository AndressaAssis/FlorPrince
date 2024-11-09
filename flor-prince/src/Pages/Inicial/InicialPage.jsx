import styles from "./Inicial.module.css";

import banner from "../../assets/banner1.png";
import imgLeft from "../../assets/catdog.jpg";
import imgRight from "../../assets/protecao.webp";

import { useNavigate } from "react-router-dom";

export function InicialPage() {

  const navigate = useNavigate();

    return (
        <>
      <div className={styles.containerInicial}>
        <img className={styles.imgBanner} src={banner} alt="banner1" />
      </div> 

      <div className={styles.inicialTexto}>
        <h1>Fundação Flor Prince: Resgatando Vidas e Proporcionando Lares Amorosos</h1>
        <p>Desde 2025, nossa missão tem sido combater o abandono e a crueldade contra os animais, oferecendo a eles um novo começo em lares acolhedores e repletos de amor. Somos uma ONG dedicada a proteger aqueles que não têm voz, dando-lhes a chance de uma vida digna e cheia de carinho.</p>
      
        <button onClick={() => navigate("/fundacao")}>Conheça a nossa história</button>
      </div>

      <div className={styles.textoFinal}>
        <h2>"Proteger os animais é mais do que um ato de compaixão; é reconhecer que cada vida tem valor e que nosso respeito pelo mundo começa com o cuidado por aqueles que não têm voz, mas compartilham conosco a mesma jornada."</h2>
      </div>

      <div className={styles.containerColaboracao}>
         <img className={styles.imgLeft} src={imgLeft} alt="catdog" />
         
      <div className={styles.textContent}>
        <h2>Porque colaborar com a Fundação?</h2>
        <p>Nosso abrigo é o lar temporário de centenas de animais que precisam de cuidados básicos, amor e atenção.
           Ao colaborar com a Fundação Flor Prince, você ajuda a garantir alimento, saúde e bem-estar para cada um
           deles, enquanto trabalhamos para encontrar lares definitivos para nossos resgatados.
        </p>

        <div className={styles.buttonContainer}>
          <button onClick={() => navigate("/como-ajudar")}>Como ajudar</button>
          <button onClick={() => navigate("/adocao")}>Adoção</button>
        </div>
      </div>
         
      <img className={styles.imgRight} src={imgRight} alt="protecao" />
      </div>
        </>
    )
}