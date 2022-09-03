import { React, useState } from 'react'
import SidebarData from './SidebarData'
import styles from './Sidebar.module.css'
import { HiOutlineMenu } from 'react-icons/hi'
import { VscChromeClose } from 'react-icons/vsc'
import SidebarLinks from './SidebarLinks'

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false)

  const SidebarMenu = SidebarData.map(item => <SidebarLinks item={item} key={item.id} />)

  const showSidebar = () => setSidebar(prev => !prev)

  return (
    <>
      <div className={styles.nav}>
        <div className={styles['nav-icon']}>
          <HiOutlineMenu onClick={showSidebar} />
        </div>
        <span className={styles['nav-title']}>e-Learning</span>
      </div>
      <nav className={`${styles.sidebar} ${!sidebar ? styles.hidden : ''}`}>
        <div className={styles['nav-icon']}>
          <VscChromeClose onClick={showSidebar} />
        </div>
        <ul className={styles['nav-links']}>{SidebarMenu}</ul>
      </nav>
    </>
  )
}

export default Sidebar
