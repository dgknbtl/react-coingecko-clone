import styles from './Header.module.scss'
import Logo from '../../assets/svg/logo.svg'
import {Container} from '../Container'
import {HeaderNav} from '../HeaderNav'
import {Search} from '../Search'

const Header = () => {
   return (
      <>
         <header className={styles.wrapper}>
            <Container>
               <div className={styles.inner}>
                  <img src={Logo} height="40" alt="logo" />
                  <HeaderNav />
                  <div className={styles.right}>
                     <nav className={styles.right_nav}>
                        <a href="#!">Portfolio</a>
                        <a href="#!">Login</a>
                        <a href="#!">Sign up</a>
                     </nav>
                     <Search />
                  </div>
               </div>
            </Container>
         </header>
      </>
   )
}

export default Header
