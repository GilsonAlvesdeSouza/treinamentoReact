import styles from "./integracao2.module.css"

export default function integracao() {
    return (
      <div className={styles.container}>
            <div className={styles.vermelho}>Branco</div>
            <div className={styles.azul}>Amarelo</div>
            <div className={styles.verde}>Preto</div>
            <div className={styles.Preto}>Marron</div>
            <div className={styles.Branco}>Azul</div>
            <div className={styles.Marron}>Rosa</div>
            <div className={styles.Rosa}>Verde</div>
      </div>
    );
  }