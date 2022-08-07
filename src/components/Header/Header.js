import styles from "./Header.module.scss";
import Logo from "../../assets/svg/logo.svg";
import { Container } from "../Container";
import { Nav } from "../Nav";

const Header = () => {
  return (
    <>
      <header className={styles.wrapper}>
        <Container>
          <div className={styles.inner}>
            <img src={Logo} height="40" alt="logo" />
            <Nav />
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
