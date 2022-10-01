import { React, useEffect, useState } from 'react'
import SidebarData from './SidebarData'
import styles from './Sidebar.module.css'
import { HiOutlineMenu } from 'react-icons/hi'
import { VscChromeClose } from 'react-icons/vsc'
import SidebarLinks from './SidebarLinks'
import { useLocation } from 'react-router-dom'

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false)

  const toggleSidebar = () => setSidebar(prev => !prev)

  const location = useLocation()

  useEffect(() => {
    setSidebar(false)
  }, [location])

  const SidebarMenu = SidebarData.map(item => <SidebarLinks item={item} key={item.id} sidebar={sidebar} />)

  return (
    <>
      <div className={styles.nav}>
        <div className={styles['nav-icon']}>
          <HiOutlineMenu onClick={toggleSidebar} />
        </div>
        <span className={styles['nav-title']}>e-Learning</span>
      </div>
      <nav className={`${styles.sidebar} ${!sidebar ? styles.hidden : ''}`}>
        <div className={styles['nav-icon']}>
          <VscChromeClose onClick={toggleSidebar} />
        </div>
        <ul className={styles['nav-links']}>{SidebarMenu}</ul>
      </nav>
    </>
  )
}

export default Sidebar
