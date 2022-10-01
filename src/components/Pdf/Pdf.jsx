import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from './Pdf.module.css'
import data from './PdfData.js'

const Pdf = ({ id }) => {
  const [pdf, setPdf] = useState(false)

  const showPdf = () => setPdf(prev => !prev)
  console.log('render')

  useEffect(() => {
    setPdf(false)
    console.log('fired')
  }, [id])

  return (
    <div className={styles.container}>
      <h1>Κεφάλαιο {id}</h1>
      <button onClick={showPdf} className={styles.pdfBtn}>
        PDF
      </button>
      {!pdf && <p className={styles.info}>{data[id - 1].info}</p>}
      {pdf && <object data={data[id - 1].pdf} type='application/pdf' className={styles.pdf} />}
      <div className={styles.form}>
        <input id='checkbox' type='checkbox' className={styles.checkbox} />
        <label htmlFor='checkbox'> Διάβασα το κεφάλαιο!</label>
      </div>
    </div>
  )
}

export default Pdf
