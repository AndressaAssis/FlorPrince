import styles from "./TrabalheConosco.module.css";
import React, { useState } from "react";

export function TrabalheConosco() {

    const vagas = [
        "Serviços Gerais",
        "Aux. de veterinário",
        "Cuidadora de gatos",
        "Adestrador e cuidador de cães",
        "Voluntário (a)"
    ];

    const [formData, setFormData] = useState({
        nome: "",
        telefone: "",
        email: "",
        vagaDesejada: "",
        curriculo: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulário enviado:", formData);
        // Lógica para envio do formulário (ex. API, etc)
    };

    return (
      <div className={styles.trabalheConoscoContainer}>
        <h2>Trabalhe Conosco</h2>

        {/* Lista de Vagas */}
        <div className={styles.vagasList}>
          <h3>Vagas Disponíveis</h3>
          <ul>
            {vagas.map((vaga, index) => (
              <li key={index}>{vaga}</li>
            ))}
          </ul>
        </div>

        {/* Formulário de Candidatura */}
        <form onSubmit={handleSubmit} className={styles.formulario}>
          <h3>Envie seu Currículo</h3>

          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Dígite o seu nome"
            className={styles.input}
            required
          />

          <label>Telefone:</label>
          <input
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder="Dígite o seu telefone de contato"
            className={styles.input}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Dígite o seu email"
            className={styles.input}
            required
          />

          <label>Vaga Desejada:</label>
          <select
            name="vagaDesejada"
            value={formData.vagaDesejada}
            onChange={handleChange}
            required
          >
            <option value="">Selecione a vaga</option>
            {vagas.map((vaga, index) => (
              <option key={index} value={vaga}>
                {vaga}
              </option>
            ))}
          </select>

          <label>Anexe seu Currículo:</label>
          <input
            type="file"
            name="curriculo"
            onChange={handleChange}
            required
          />

          <button type="submit">Enviar Candidatura</button>
        </form>
      </div>
    );
}