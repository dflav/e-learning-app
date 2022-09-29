import React from 'react'
import { useState } from 'react'
import styles from './Pdf.module.css'

const Pdf = props => {
  const [pdf, setPdf] = useState(false)

  const showPdf = () => setPdf(prev => !prev)

  return (
    <div className={styles.container}>
      <h1>Κεφάλαιο {props.id}</h1>
      <button onClick={showPdf} className={styles.pdfBtn}>
        PDF
      </button>
      {!pdf && <p className={styles.info}>{props.info}</p>}
      {pdf && <object data={props.pdf} type='application/pdf' className={styles.pdf} />}
      <div className={styles.form}>
        <input id='checkbox' type='checkbox' className={styles.checkbox} />
        <label htmlFor='checkbox'> Διάβασα το κεφάλαιο!</label>
      </div>
    </div>
  )
}

export default Pdf
