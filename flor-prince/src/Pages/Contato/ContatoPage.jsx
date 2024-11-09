import React, { useState } from 'react';
import styles from './Contato.module.css';

export function ContatoPage() {

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        mensagem: '',
    });

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (

    <div className={styles.contatoContainer}>
        <section className={styles.formSection}>
          <h2>Envie sua Mensagem</h2>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Seu nome"
              required
              value={formData.nome}
              onChange={handleChange}
            />
  
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Seu e-mail"
              required
              value={formData.email}
              onChange={handleChange}
            />
  
            <label htmlFor="telefone">Telefone</label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              placeholder="Seu telefone"
              value={formData.telefone}
              onChange={handleChange}
            />
  
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              placeholder="Sua mensagem"
              required
              value={formData.mensagem}
              onChange={handleChange}
            ></textarea>
  
            <button type="submit" className={styles.submitButton}>Enviar</button>
          </form>
        </section>
  
        <section className={styles.infoSection}>
          <h2>Informações de Contato</h2>
          <p><strong>Endereço do Escritório:</strong></p>
          <p>Rua dos Animais, 123, Cidade, Estado</p>
          <p>CEP: 12345-678</p>
          
          <p><strong>Telefones de Contato:</strong></p>
          <p>(00) 1234-5678</p>
          <p>(00) 9876-5432</p>
  
          <p><strong>E-mail:</strong></p>
          <p>contato@fundacaoflorprince.org</p>
  
          <p><strong>Horário de Funcionamento:</strong></p>
          <p>Segunda a Sexta: 9:00 - 18:00</p>
          <p>Sábado: 9:00 - 13:00</p>
        </section>
    </div>
    );
}
