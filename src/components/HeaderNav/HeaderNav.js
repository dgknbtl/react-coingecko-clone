import styles from './HeaderNav.module.scss'

const Nav = () => {
   return (
      <nav className={styles.wrapper}>
         <div className={styles.list}>
            <div className={`${styles.item} ${styles.dropdown}`}>
               <a href="#!" className={`${styles.link} ${styles.dropdown_toggle}`}>
                  Cryptocurrencies
               </a>
               <div className={`${styles.list} ${styles.dropdown_menu}`}>
                  <div className={`${styles.item} ${styles.dropdown_item}`}>
                     <a href="#!" className={`${styles.link} ${styles.dropdown_link}`}>
                        By Market Cap
                     </a>
                  </div>
                  <div className={`${styles.item} ${styles.dropdown_item}`}>
                     <a href="#!" className={`${styles.link} ${styles.dropdown_link}`}>
                        New Cryptocurrencies
                     </a>
                  </div>
                  <div className="line"></div>
                  <div className={`${styles.item} ${styles.dropdown_item}`}>
                     <a href="#!" className={`${styles.link} ${styles.dropdown_link}`}>
                        Categories
                     </a>
                  </div>
                  <div className={`${styles.item} ${styles.dropdown_item}`}>
                     <a href="#!" className={`${styles.link} ${styles.dropdown_link}`}>
                        Watchlists
                     </a>
                  </div>
                  <div className={`${styles.item} ${styles.dropdown_item}`}>
                     <a href="#!" className={`${styles.link} ${styles.dropdown_link}`}>
                        Gainers&amp;Losers
                     </a>
                  </div>
                  <div className={`${styles.item} ${styles.dropdown_item}`}>
                     <a href="#!" className={`${styles.link} ${styles.dropdown_link}`}>
                        High Volume
                     </a>
                  </div>
                  <div className="line"></div>
                  <div className={`${styles.item} ${styles.dropdown_item}`}>
                     <a href="#!" className={`${styles.link} ${styles.dropdown_link}`}>
                        All Coins
                     </a>
                  </div>
                  <div className={`${styles.item} ${styles.dropdown_item}`}>
                     <a href="#!" className={`${styles.link} ${styles.dropdown_link}`}>
                        Compare Coins
                     </a>
                  </div>
                  <div className={`${styles.item} ${styles.dropdown_item}`}>
                     <a href="#!" className={`${styles.link} ${styles.dropdown_link}`}>
                        Global Chart
                     </a>
                  </div>
               </div>
            </div>
            <div className={`${styles.item} ${styles.dropdown}`}>
               <a href="#!" className={styles.link}>
                  Exchanges
               </a>
               <div className={`${styles.list} ${styles.dropdown_menu}`}>
                  <div className={`${styles.item} ${styles.dropdown_item}`}>
                     <a href="#!" className={`${styles.link} ${styles.dropdown_link}`}>
                        Crypto Exchanges
                     </a>
                  </div>
                  <div className={`${styles.item} ${styles.dropdown_item}`}>
                     <a href="#!" className={`${styles.link} ${styles.dropdown_link}`}>
                        Decentralized Exchanges
                     </a>
                  </div>
                  <div className={`${styles.item} ${styles.dropdown_item}`}>
                     <a href="#!" className={`${styles.link} ${styles.dropdown_link}`}>
                        Derivatives
                     </a>
                  </div>
               </div>
            </div>
            <div className={styles.item}>
               <a href="#!" className={styles.link}>
                  NFT
               </a>
            </div>
            <div className={styles.item}>
               <a href="#!" className={styles.link}>
                  Learn Crypto
               </a>
            </div>
            <div className={styles.item}>
               <a href="#!" className={styles.link}>
                  Products
               </a>
            </div>
         </div>
      </nav>
   )
}

export default Nav
