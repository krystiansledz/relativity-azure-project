import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>krystiansledz</div>
      <h5 className={styles.text}>
        Project for Azure (Relativity)
      </h5>
    </div>
  );
};

export default Footer;
