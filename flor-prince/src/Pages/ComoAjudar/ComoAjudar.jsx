import styles from './ComoAjudar.module.css';
import React, { useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";

import alimentos from "../../assets/alimentos.jpg";
import medicamentos from "../../assets/medicamentos.jpg";
import limpeza from "../../assets/limpeza.webp";
import cuidados from "../../assets/cuidados.webp";

export function ComoAjudar() {

    const [modalInfo, setModalInfo] = useState(null);

    const openModal = (info) => setModalInfo(info);
    const closeModal = () => setModalInfo(null);

    function handleSubmit(e) {
      e.preventDefault();
      alert('Formulário enviado com sucesso!');
    }

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Como Ajudar</h1>

        <section className={styles.section}>
          <h2>Doação Financeira</h2>
          <p>
            Você pode contribuir com doações financeiras através das seguintes
            opções:
          </p>
          <ul className={styles.metodos}>
            <li className={styles.pagseguro}>
              <strong>PagSeguro:</strong> CNPJ 19.719.464/0001-80
            </li>
            <li className={styles.deposito}>
              <strong>Depósito Bancário:</strong> AGÊNCIA 567 - CONTA 25967-6 - CONTA CORRENTE
            </li>
            <li className={styles.pix}>
              <strong>PIX:</strong> ongflorprince@gmail.com
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Doe Itens Essenciais</h2>
          <p>
            Contribua doando alimentos, remédios, itens de limpeza e cuidados
            para os pets.
          </p>

          <div className={styles.imageContainer}>
            <img
              src={alimentos}
              alt="Alimentos para doação"
              onClick={() => openModal("alimentos")}
              className={styles.roundImage}
            />
            <img
              src={medicamentos}
              alt="Medicamentos"
              onClick={() => openModal("remedios")}
              className={styles.roundImage}
            />
            <img
              src={limpeza}
              alt="Itens de limpeza"
              onClick={() => openModal("limpeza")}
              className={styles.roundImage}
            />
            <img
              src={cuidados}
              alt="Itens de limpeza"
              onClick={() => openModal("cuidados")}
              className={styles.roundImage}
            />
          </div>

          <p className={styles.note}>
            * As doações devem ser entregues no nosso escritório:
          </p>
          <address className={styles.contactInfo}>
            Rua dos Animais, 123, Cidade, Estado <br />
            Telefone: <FaWhatsapp className={styles.whatsappIcon} /> (00)
            1234-5678
          </address>

          {modalInfo && (
            <div className={styles.modalOverlay} onClick={closeModal}>
              <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
              >
                <p>
                  {modalInfo === "alimentos" &&
                    "Precisamos de ração, arroz, e outros alimentos essenciais para os animais."}
                  {modalInfo === "remedios" &&
                    "Precisamos de remédios para tratamentos variados, vacinas, incluindo antipulgas e vermífugos."}
                  {modalInfo === "limpeza" &&
                    "Precisamos de produtos de limpeza para manter o ambiente seguro e higiênico para os animais como: vassouras, baldes, desinfetante, água sanitária, anti-bacteriano"}
                  {modalInfo === "cuidados" &&
                    "Precisamos de produtos de cuidados como toalhas, mantas, potes de aguá e ração, brinquedos, escova de dente"}
                </p>
                <button onClick={closeModal}>Fechar</button>
              </div>
            </div>
          )}
        </section>

        <section className={styles.section2}>
          <h2>Seja um Embaixador da Fundação</h2>
          <p>
            Junte-se a nós como embaixador da Fundação Flor Prince e ajude a
            transformar a vida de inúmeros animais!
          </p>
          <p>
            Se você quer usar a sua voz e influência para ajudar nossa causa,
            conte-nos seu motivo e entre em contato conosco:
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="motivo">Por que você quer ser embaixador?</label>
            <textarea
              id="motivo"
              name="motivo"
              placeholder="Conte-nos seu motivo"
              required
              className={styles.textarea}
            ></textarea>

            <label htmlFor="email">E-mail de Contato</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Seu e-mail"
              required
              className={styles.input}
            />

            <button type="submit" className={styles.submitButton}>
              Quero ser um embaixador
            </button>
          </form>
        </section>
      </div>
    );
}