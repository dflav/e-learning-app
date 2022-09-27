import React from 'react'
import { useState } from 'react'
import styles from './Pdf.module.css'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'

const Pdf = props => {
  const [pdf, setPdf] = useState(false)

  const showPdf = () => setPdf(prev => !prev)

  return (
    <div className={styles.container}>
      {/* <div className={styles.arrows}>
        <BsArrowLeft />
        <BsArrowRight />
      </div> */}

      <h1>Κεφάλαιο {props.id}</h1>
      <button onClick={showPdf} className={styles.pdfBtn}>
        PDF
      </button>
      {!pdf && (
        <p className={styles.info}>
          Οταν ανοίγουμε τον υπολογιστή, ένα σύνολο από διάφορα τμήματα του Υλικού (hardware) συνεργάζονται μεταξύ τους,
          ώστε να μπορέσει να λειτουργήσει. Παρατηρούμε τα φωτάκια της Κεντρικής Μονάδας να αναβοσβήνουν, ακούμε το
          σκληρό δίσκο να κάνει θόρυβο, η οθόνη αρχίζει να ανταποκρίνεται και μας εμφανίζει την επιφάνεια εργασία, ενώ
          το ποντίκι και το πληκτρολόγιο μετά από λίγο είναι έτοιμα να λειτουργήσουν.
        </p>
      )}
      {pdf && <embed src={props.pdf} type='application/pdf' className={styles.pdf} />}
      <div className={styles.form}>
        <input id='checkbox' type='checkbox' className={styles.checkbox} />
        <label htmlFor='checkbox'> Διάβασα το κεφάλαιο!</label>
      </div>
    </div>
  )
}

export default Pdf
