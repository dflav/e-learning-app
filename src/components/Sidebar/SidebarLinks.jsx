import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './SidebarLinks.module.css'

const DropdownLinks = ({ item }) =>
  item.subNav.map(item => (
    <li className={styles['sub-link']} key={item.id}>
      <Link to={item.path}>{item.title}</Link>
    </li>
  ))

const SidebarLinks = ({ item }) => {
  const [dropdown, setDropdown] = useState(false)

  const showDropdown = () => setDropdown(prev => !prev)

  return (
    <>
      <li className={styles.link} onClick={item.subNav && showDropdown}>
        <div className={item.subNav && styles.dropdown}>
          <Link to={item.path}>
            <div className={styles['link-icon']}>{item.icon}</div>
            <span className={styles['link-name']}>{item.title}</span>
          </Link>
          {item.subNav && (
            <div className={styles['link-icon']}>{dropdown ? item.dropdownOpen : item.dropdownClose}</div>
          )}
        </div>
      </li>
      {item.subNav && dropdown && <DropdownLinks item={item} />}
    </>
  )
}

export default SidebarLinks
