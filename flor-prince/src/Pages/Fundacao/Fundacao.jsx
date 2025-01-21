import styles from './Fundacao.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ong1 from "../../assets/ong1.jpg";
import ong2 from "../../assets/ong2.jpeg";
import ong3 from "../../assets/ong3.jpg";

import resgate1 from "../../assets/resgate1.jpg";
import resgate2 from "../../assets/resgate2.jpg";
import resgate3 from "../../assets/resgate3.jpg";
import resgate4 from "../../assets/resgate4.jpg";

export function Fundacao() {

    return (
      <>
        <div className={styles.fundacaoHistoria}>
          <section className={styles.secaoHistoria}>
            <h2>História da Fundação</h2>
            <p className={styles.fundacaoTexto}>
              A Fundação Prince começou com um casal que é apaixonados por
              animais que decidiram unir forças para fazer a diferença. Desde a
              sua criação em 2025, a ONG já resgatou e cuidou de mais de 1.000
              animais em situação de risco, oferecendo a eles uma segunda chance
              de viver em um lar amoroso.
            </p>
          </section>

          <section className={styles.secaoInfraestrutura}>
            <h2>Infraestrutura</h2>
            <p className={styles.fundacaoTexto}>
              Nossa sede conta com um espaço amplo e moderno, incluindo canis,
              gatis, uma clínica veterinária equipada para exames e cirurgias, e
              áreas de recreação para os animais. Além disso, contamos com uma
              equipe de voluntários e profissionais dedicados ao bem-estar dos
              nossos resgatados.
            </p>

            <div className={styles.galeriaFotos}>
              <img
                src={resgate2}
                alt="Resgate de um cão abandonado"
                className={styles.foto}
              />
              <img
                src={resgate3}
                alt="Infraestrutura da ONG"
                className={styles.foto}
              />
              <img
                src={resgate4}
                alt="Evento de adoção de animais"
                className={styles.foto}
              />
              <img
                src={resgate1}
                alt="Animais sendo cuidados"
                className={styles.foto}
              />
            </div>
          </section>

          <section className={styles.secaoRealizacoes}>
            <h2>Realizações e Conquistas</h2>
            <ul className={styles.listaRealizacoes}>
              <li>Mais de 1.000 animais resgatados e reabilitados.</li>
              <li>
                Parcerias com clínicas veterinárias locais para atendimentos
                gratuitos.
              </li>
              <li>
                Participação em feiras de adoção e campanhas de conscientização
                sobre maus-tratos.
              </li>
              <li>
                Criação de um programa de castração solidária para comunidades
                carentes.
              </li>
            </ul>
          </section>

          <section className={styles.secaoFotos}>
            <h2>Nosso Acervo de Fotos</h2>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loop
              className={styles.carrosselFotos}
              autoplay={{
                delay: 3000, // Troca de slide automática a cada 3 segundos
                disableOnInteraction: false, // Continua o autoplay após interação
              }}
            >
              <SwiperSlide>
                <img src={ong1} alt="Foto 1" className={styles.fotoCarrossel} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={ong2} alt="Foto 2" className={styles.fotoCarrossel} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={ong3} alt="Foto 3" className={styles.fotoCarrossel} />
              </SwiperSlide>
              {/* Adicione mais slides conforme necessário */}
            </Swiper>
          </section>
        </div>
      </>
    );
}