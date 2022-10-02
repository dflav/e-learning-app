import { useEffect } from 'react'
import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './SidebarLinks.module.css'

const DropdownLinks = ({ item, showDropdown }) =>
  item.subNav.map(item => (
    <li className={styles['sub-link']} key={item.id}>
      <Link to={item.path} onClick={showDropdown}>
        {item.title}
      </Link>
    </li>
  ))

const NavLink = ({ item, children }) =>
  item.subNav ? <div className={styles.subMenu}>{children}</div> : <Link to={item.path}>{children}</Link>

const SidebarLinks = ({ item, sidebar }) => {
  const [dropdown, setDropdown] = useState(false)

  const showDropdown = () => setDropdown(prev => !prev)

  useEffect(() => {
    if (!sidebar) setDropdown(false)
  }, [sidebar])

  return (
    <>
      <li className={styles.link} onClick={item.subNav && showDropdown}>
        <div className={item.subNav && styles.dropdown}>
          <NavLink item={item}>
            <div className={styles['link-icon']}>{item.icon}</div>
            <span className={styles['link-name']}>{item.title}</span>
          </NavLink>
          {item.subNav && (
            <div className={styles['link-icon']}>{dropdown ? item.dropdownOpen : item.dropdownClose}</div>
          )}
        </div>
      </li>
      {item.subNav && dropdown && <DropdownLinks item={item} showDropdown={showDropdown} />}
    </>
  )
}

export default SidebarLinks
