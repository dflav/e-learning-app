import React from 'react'
import { useState } from 'react'
import styles from './Profile.module.css'
import { FaPencilAlt } from 'react-icons/fa'
import { BsPersonCircle } from 'react-icons/bs'
import { IoIosStats } from 'react-icons/io'
import { MdGrade } from 'react-icons/md'

const Profile = () => {
  const firstname = 'Flavio'
  const lastname = 'Dollani'
  const email = 'flavio.dollani@gmail.com'
  const totalTests = '0'
  const totalLessons = '0'
  const grade = 'A'

  const [grades, setGrades] = useState(true)

  const showGrades = () => setGrades(prev => !prev)

  const expandSign = grades ? '+' : '-'

  return (
    <div className={styles.container}>
      <section>
        <span>
          <h1>Προφίλ</h1>
        </span>
        <p className={styles.title}>Δες τα στατιστικά σου!</p>
      </section>
      <div className={styles.form_container}>
        <h1>Log in</h1>
        <form>
          <label htmlFor='firstName'>Όνομα</label>
          <input type='text' id='firstName' placeholder='Βάλε το όνομα σου!' />

          <label htmlFor='lastName'>Επίθετο</label>
          <input type='text' id='lastName' placeholder='Βάλε το επίθετο σου!' />

          <label htmlFor='email'>Email</label>
          <input type='email' id='email' placeholder='Βάλε το email σου!' />

          <button type='submit' className={styles.btn}>
            Υποβολή
          </button>
        </form>
      </div>

      <div className={styles.stats_container}>
        <div className={styles.info}>
          <h1>
            <BsPersonCircle />
            Προσωπικά Στοιχεία
          </h1>
          <span>Όνομα : {firstname}</span>
          <span>Επίθετο : {lastname}</span>
          <span>Email : {email}</span>
        </div>

        <div className={styles.info}>
          <h1>
            <IoIosStats />
            Στατιστικά
          </h1>
          <span>Μαθήματα που έχεις διαβάσει : {totalLessons} </span>
          <span>Τεστ που έχεις κάνει : {totalTests}</span>
        </div>

        <div className={styles.grades}>
          <h1>
            <MdGrade />
            Βαθμός : <span>{grade}</span>
          </h1>
          <button type='button' onClick={showGrades} className={styles.btn}>
            Αναλυτικά {expandSign}
          </button>
        </div>
        <ul hidden={grades}>
          <li>
            <FaPencilAlt />
            Quiz 1 :
          </li>
          <li>
            <FaPencilAlt />
            Quiz 2 :
          </li>
          <li>
            <FaPencilAlt />
            Quiz 3 :
          </li>
          <li>
            <FaPencilAlt />
            Quiz 4 :
          </li>
          <li>
            <FaPencilAlt />
            Επαναληπτικό :
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Profile
