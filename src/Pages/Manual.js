import React from 'react'
import styles from './Manual.module.css'
import png1 from '../images/1.png'
import png2 from '../images/2.png'
import png3 from '../images/3.png'
import png4 from '../images/4.png'
import png5 from '../images/5.png'
import png6 from '../images/6.png'
import png7 from '../images/7.png'
import png8 from '../images/8.png'
import png9 from '../images/9.png'

const Manual = () => {
  return (
    <div className={styles.container}>
      <section>
        <span>
          <h1>Εχγειρίδιο</h1>
        </span>
        <p className={styles.title}>Βήματα λειτουργιας της εφαρμογής!</p>
      </section>

      <div className={styles.guide}>
        <p>Πάτησε το κουμπί πάνω αριστερά για να ανοίξεις το μενού! </p>
        <img src={png1} alt='' />
        <p>Επέλεξε το κεφάλαιο που θές να διαβάσεις απο τις κατηγορίες που θα εμφανιστούν</p>
        <img src={png2} alt='' />
        <p>
          Άνοιξε τις διαφάνιες κάθε κεφαλαίου πατώντας το κουμπί PDF και χρησιμοποίησε τα βελάκια για να πάς σε άλλο
          κεφάλαιο
        </p>
        <img src={png3} alt='' />
        <p>Όταν τελειώσεις το διάβασμα, τσέκαρε το κουτάκι!</p>
        <img src={png4} alt='' />
        <p>
          Μετά πήγαινε στην σελίδα των Quiz για να δοκιμάσεις τις γνώσεις σου! Πάτα το κουμπί για να ξεκινήσει το quiz
        </p>
        <img src={png5} alt='' />
        <p>Μπορείς να επαναλάβεις τα Quiz όσες φορές θέλεις. Πρόσεχε όμως, κρατιέται πάντα ο τελικός βαθμός!</p>
        <img src={png6} alt='' />
        <p>Τα Quiz δεν έχουν χρόνο οπότε μην αγχωθείς! Αν κάνεις λάθοι μπορείς να ξαναδοκιμάσεις πατώντας το κουμπί</p>
        <img src={png7} alt='' />

        <p>Στην σελίδα "Προφίλ", συμπλήρωσε το όνομα, το επίθετο και το email σου</p>
        <img src={png8} alt='' />
        <p>
          Τώρα μπορείς να δεις τα στατιστικά σου κάθε φορά που μπαίνεις στο προφιλ σου! <br /> Αν θες να δεις αναλυτική
          βαθμολογία στα Quiz πάτα το κουμπί!
        </p>
        <img src={png9} alt='' />
      </div>
    </div>
  )
}

export default Manual
