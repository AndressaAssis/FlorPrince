import styles from "./Inicial.module.css";

export function InicialPage() {

    return (
        <>
     <div className={styles.containerInicial}>
        <div>
          <h1 className={styles.inicialWelcome}>Bem-vindo ao Green Steam!</h1>
          <p>Descubra, jogue e compartilhe momentos épicos conosco no Green Steam. É mais que uma plataforma, é onde o universo dos jogos se encontra!</p>
        </div>
      </div>
        </>
    )
}