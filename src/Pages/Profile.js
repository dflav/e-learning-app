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
      <div className={styles.form_container}>
        <form>
          <label htmlFor='firstName'>Όνομα</label>
          <input type='text' id='firstName' placeholder='Βάλε το όνομα σου!' />

          <label htmlFor='lastName'>Επίθετο</label>
          <input type='text' id='lastName' placeholder='Βάλε το επίθετο σου!' />

          <label htmlFor='email'>Email</label>
          <input type='email' id='email' placeholder='Βάλε το email σου!' />

          <button>Υποβολή</button>
        </form>
        <div>
          <h2>Προσωπικά Στοιχεία</h2>
          <div>
            <span>Όνομα : </span>
            name
          </div>
          <div>
            <span>Επίθετο : </span>
            lastname
          </div>
          <div>
            <span>Email : </span>
            tmp@gmail.com
          </div>
          <h2>Στατιστικά</h2>
          <div>
            <span>Μαθήματα που έχεις διαβάσει : </span>3
          </div>
          <div>
            <span>Τεστ που έχεις κάνει : </span>5
          </div>

          <div>
            <span>Βαθμός : </span> 10 <button>Αναλυτική βαθμολογία</button>
            <ul>
              <li>
                <span> Quiz 1 : </span> 10
              </li>
              <li>
                <span> Quiz 2 : </span> 10
              </li>
              <li>
                <span> Quiz 3 : </span> 10
              </li>
              <li>
                <span> Quiz 4 : </span> 10
              </li>
              <li>
                <span> Quiz Επαναληπτικό : </span> 10
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
