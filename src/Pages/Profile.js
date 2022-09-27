import React from 'react'
import styles from './Profile.module.css'

const Profile = () => {
  return (
    <div className={styles.container}>
      <section>
        <span>
          <h1>Προφίλ</h1>
        </span>
        <p className={styles.title}>Δες τα στατιστικά σου!</p>
      </section>
    </div>
  )
}

export default Profile
