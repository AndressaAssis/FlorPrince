import styles from "./Clinica.module.css";
import clinica from "../../assets/clinica.jpg";
import image1 from "../../assets/image1.webp";
import image2 from "../../assets/image2.jpeg";
import image3 from "../../assets/image3.jpeg";

export function Clinica() {

    return (
      <>
        <div className={styles.clinicaContainer}>
          <h1>Nossa Clínica</h1>

          <img
            className={styles.imgClinica}
            src={clinica}
            alt="image-clinica"
          />
        </div>

        <div className={styles.textClinica}>
          <h2>Oferencendo o melhor para os nossos peludinhos!</h2>
          <p>
            Na Fundação Flor Prince, nossa clínica veterinária é dedicada a
            cuidar de todos os animais que resgatamos das ruas, oferecendo
            serviços essenciais como castração, vacinação e tratamentos
            especializados. Aqui, nossos peludos recebem atendimento de
            qualidade com profissionais experientes e equipamentos modernos,
            garantindo o melhor cuidado possível para cada um deles.
          </p>
          <p>
            Esse trabalho só é possível graças ao apoio de nossos doadores e
            parceiros. Com a sua ajuda, conseguimos manter nossa equipe de
            veterinários e voluntários, permitindo que nossa clínica continue
            funcionando e atendendo cada vez mais animais necessitados. Juntos,
            estamos construindo um futuro melhor para todos os nossos amigos de
            quatro patas!
          </p>
        </div>

        <div className={styles.imageContainer}>
          <img src={image1} alt="image1" />
          <img src={image2} alt="image2" />
          <img src={image3} alt="image3" />
        </div>
      </>
    );
}