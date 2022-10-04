import React from 'react'
import { useState } from 'react'
import styles from './Pdf.module.css'
import data from './PdfData.js'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

const Pdf = ({ id, checkLessonHandler }) => {
  const [pdf, setPdf] = useState(false)
  const [isChecked, setIsChecked] = useState(JSON.parse(localStorage.getItem(`checkbox ${id}`)) || false)

  const [alert, setAlert] = useState(false)

  const handleClick = () => {
    setAlert(true)
  }

  const handleClose = () => {
    setAlert(false)
  }

  const showPdf = () => setPdf(prev => !prev)

  const checkboxHandler = e => {
    setIsChecked(e.target.checked)
    localStorage.setItem(`checkbox ${id}`, JSON.stringify(e.target.checked))

    if (e.target.checked) {
      checkLessonHandler(1)
      handleClick()
    } else {
      checkLessonHandler(-1)
    }
  }

  return (
    <div className={styles.container}>
      <h1>Κεφάλαιο {id}</h1>
      <button onClick={showPdf} className={styles.pdfBtn}>
        PDF
      </button>
      {!pdf && <p className={styles.info}>{data[id - 1].info}</p>}
      {pdf && (
        <object data={data[id - 1].pdf} type='application/pdf' className={styles.pdf}>
          PDF
        </object>
      )}
      <div className={styles.form}>
        <input
          id='checkbox'
          type='checkbox'
          className={styles.checkbox}
          checked={isChecked}
          onChange={checkboxHandler}
        />
        <label htmlFor='checkbox'> Διάβασα το κεφάλαιο!</label>
      </div>

      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={alert}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity='info' sx={{ width: '100%' }}>
          Μπράβο! Κάνε το Quiz και προχώρα στο επόμενο κεφάλαιο!
        </Alert>
      </Snackbar>
    </div>
  )
}

export default Pdf
