import styles from './Adocao.module.css';

export function Adocao() {

    return (
      <div className={styles.containerAdocao}>
        <div className={styles.adocaoTexto}>
          <h1>Por que adotar pela Fundação Flor Prince?</h1>
          <p>
            Na Fundação Flor Prince, nos dedicamos a resgatar e cuidar de
            animais vítimas de abandono e maus-tratos. Quando você adota
            conosco, o animal já está preparado para o novo lar com:
          </p>
          <ul>
            <li>Castração realizada</li>
            <li>Vermifugação completa</li>
            <li>Microchip de identificação</li>
            <li>Certidão de nascimento</li>
            <li>Consulta com nosso veterinário para orientações e dúvidas</li>
          </ul>
        </div>

        <div className={styles.adocaoTexto}>
          <h2>Adoção Responsável</h2>
          <p>
            Nosso processo de adoção responsável garante que os animais
            encontrem um lar seguro, amoroso e adequado às suas necessidades. É
            uma forma de assegurar o bem-estar dos nossos resgatados e de
            proporcionar uma experiência positiva para os novos tutores.
          </p>

          <h2>Como funciona a adoção responsável?</h2>
          <p>O processo é simples e envolve três etapas principais:</p>
          <ul>
            <li>
              <strong>Avaliação do perfil:</strong> Verificamos se o tutor está
              preparado para cuidar do animal.
            </li>
            <li>
              <strong>Entrevista:</strong> Uma conversa para entender melhor as
              expectativas e condições do adotante.
            </li>
            <li>
              <strong>Visita domiciliar:</strong> Avaliamos se o ambiente é
              seguro e acolhedor para o animal.
            </li>
          </ul>

          <h2>Documentação necessária:</h2>
          <p>Para adotar, é preciso apresentar:</p>
          <ul>
            <li>Documento de identidade (RG ou equivalente)</li>
            <li>Comprovante de residência</li>
          </ul>
        </div>

        <div className={styles.buttonAdocao}>
          <button>ADOTE AGORA!</button>
        </div>

        <div className={styles.feirasAdocao}>
          <h2>Feiras de Adoção</h2>
          <p>
            Participe de nossas feiras de adoção e conheça pessoalmente os
            animais disponíveis. Divulgamos as datas e locais em nossas redes
            sociais. Siga-nos e fique por dentro:
          </p>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/florprince_pets/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/florprincepets/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
}
