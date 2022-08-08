import styles from './Search.module.scss'
import IconSearch from '../../assets/svg/search.svg'
import IconTimes from '../../assets/svg/times.svg'
import {useState} from 'react'

const Search = () => {
   const [isShow, setIsShow] = useState(false)

   return (
      <div className={styles.wrapper}>
         <div className={styles.box} onClick={() => setIsShow(!isShow)}>
            <img src={IconSearch} className={styles.icon} alt="search icon" />
            <span className={styles.text}>Search</span>
         </div>
         {isShow ? (
            <div className={styles.dropdown}>
               <div className={styles.dropdown_form}>
                  <img src={IconSearch} className={styles.icon} alt="search icon" />
                  <input
                     type="text"
                     placeholder="Search token name or exhange"
                     className={styles.dropdown_input}
                  />
                  <div className={styles.dropdown_close} onClick={() => setIsShow(false)}>
                     <img src={IconTimes} alt="times" />
                  </div>
               </div>
               <div className={styles.currencies}>
                  <h4>Trending Search</h4>
                  {[
                     {
                        img: 'https://assets.coingecko.com/coins/images/25244/thumb/OP.jpeg?1651026279',
                        name: 'Optimism',
                        symbol: 'OP',
                        rank: 117,
                     },
                     {
                        img: 'https://assets.coingecko.com/coins/images/24023/thumb/evmos.png?1653958927',
                        name: 'EVMOS',
                        symbol: 'EVMOS',
                        rank: 131,
                     },
                     {
                        img: 'https://assets.coingecko.com/coins/images/13162/thumb/rose.png?1605772906',
                        name: 'Oasis Network',
                        symbol: 'ROSE',
                        rank: 99,
                     },
                  ].map((currency) => (
                     <div className={styles.currency} key={currency.symbol}>
                        <img
                           className={styles.currency_img}
                           src={currency.img}
                           alt={currency.name}
                        />
                        <div className={styles.currency_name}>
                           {currency.name} ({currency.symbol})
                        </div>
                        <div className={styles.currency_rank}>#{currency.rank}</div>
                     </div>
                  ))}
               </div>
            </div>
         ) : null}
      </div>
   )
}

export default Search
