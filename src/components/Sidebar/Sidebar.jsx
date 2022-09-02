import { React, useState } from 'react'
import SidebarData from './SidebarData'
import styles from './Sidebar.module.css'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(prev => !prev)
  return (
    <>
      <div className={styles.nav}>
        <div className={styles['nav-icon']}>
          <FaBars onClick={showSidebar} />
        </div>
        <span className={styles['nav-title']}>e-Learning</span>
      </div>
      <nav className={`${styles.sidebar} ${!sidebar ? styles.hidden : ''}`}>
        <div>
          <div className={styles['nav-icon']}>
            <AiOutlineClose onClick={showSidebar} />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Sidebar
