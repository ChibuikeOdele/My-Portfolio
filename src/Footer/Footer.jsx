import style from "./footerStyle.module.css";

const Footer = () => {
  return (
    <section id="footer" className={style.container}>
      <p>
        &copy; 2024 Odele Chibuike. <br /> All right reserved.
      </p>
    </section>
  );
};

export default Footer;
