const QuizData = [
  {
    id: 1,
    lesson: 'Γνωριμία με το Λογισμικό του Υπολογιστή',
    questions: [
      {
        id: 1,
        questionText: 'Τα προγράμματα δεν μπορούμε να τα αγγίξουμε',
        answerOptions: [
          { id: 1, answerText: 'Σωστό', isCorrect: true },
          { id: 2, answerText: 'Λάθος', isCorrect: false },
        ],
      },
      {
        id: 2,
        questionText: 'Το σύνολο των προγραμμάτων που χρησιμοποιούντια από τους υπολογιστές ονομάζονται :',
        answerOptions: [
          { id: 1, answerText: 'Λογισμικό', isCorrect: true },
          { id: 2, answerText: 'Υλικό', isCorrect: false },
        ],
      },
      {
        id: 3,
        questionText: 'Το λογισμικό χωρίζεται σε :',
        answerOptions: [
          {
            id: 1,
            answerText: 'Λογισμικό Εφαρμογών και Λογισμικό Υλικού',
            isCorrect: false,
          },
          {
            id: 2,
            answerText: 'Λογισμικό Εφαρμογών και Λογισμικό Συστήματος',
            isCorrect: true,
          },
        ],
      },
      {
        id: 4,
        questionText: 'Το λογισμικό συστήματος χωρίζεται σε :',
        answerOptions: [
          {
            id: 1,
            answerText: 'Λειτουργικό Σύστημα και την Εργαλειοθήκη',
            isCorrect: false,
          },
          {
            id: 2,
            answerText: 'Λειτουργικό Σύστημα και Ειδικά Εργαλεία',
            isCorrect: true,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    lesson: 'Το Γραφικό Περιβάλλον Επικοινωνίας',
    questions: [
      {
        id: 1,
        questionText: 'Πως ονομάζεται ο χώρος που βλέπουμε όταν ανοίγουμε τον υπολογιστή;',
        answerOptions: [
          { id: 1, answerText: 'Επιφάνεια εργασίας', isCorrect: true },
          { id: 2, answerText: 'Φόντο', isCorrect: false },
        ],
      },
      {
        id: 2,
        questionText: 'Πως ονομάζεται το κουμπί που πρέπει να πατήσουμε για να δούμε τις εφαρμογές του υπολογιστή;',
        answerOptions: [
          { id: 1, answerText: 'Τερματισμός', isCorrect: false },
          { id: 2, answerText: 'Έναρξη', isCorrect: true },
        ],
      },
      {
        id: 3,
        questionText:
          'Πως ονομάζεται ο χώρος που βρίσκονται οι καρφιτσομένες εφαρμογές και πληροφορίες των ανοιχτών εφαρμογών;',
        answerOptions: [
          { id: 1, answerText: 'Γραμμή εργασιών', isCorrect: true },
          { id: 2, answerText: 'Μπάρα συντομεύσεων', isCorrect: false },
        ],
      },
      {
        id: 4,
        questionText: 'Πάνω δεξιά σε κάθε παράθυρο, τι κάνει το κουμπί που δείχνει μια γραμμή;',
        answerOptions: [
          { id: 1, answerText: 'Κλείνει το παράθυρο', isCorrect: false },
          {
            id: 2,
            answerText: 'Ελαχιστοποιεί το παράθυρο στην γραμμή εργασιών χωρίς να το κλείσει',
            isCorrect: true,
          },
          { id: 3, answerText: 'Επαναφορά/Μεγιστοποίηση', isCorrect: false },
        ],
      },
      {
        id: 5,
        questionText: 'Πάνω δεξιά σε κάθε παράθυρο, τι κάνει το κουμπί που δείχνει ένα τετράγωνο;',
        answerOptions: [
          { id: 1, answerText: 'Ελαχιστοποιεί το παράθυρο', isCorrect: false },
          { id: 2, answerText: 'Κλείνει το παράθυρο ', isCorrect: false },
          { id: 3, answerText: 'Επαναφορά/Μεγιστοποίηση', isCorrect: true },
        ],
      },
      {
        id: 6,
        questionText: 'Πάνω δεξιά σε κάθε παράθυρο, τι κάνει το κουμπί που δείχνει ένα x;',
        answerOptions: [
          { id: 1, answerText: 'Επαναφορά/Μεγιστοποίηση', isCorrect: false },
          { id: 2, answerText: 'Ελαχιστοποιεί το παράθυρο', isCorrect: false },
          { id: 3, answerText: 'Κλείνει το παράθυρο', isCorrect: true },
        ],
      },
      {
        id: 6,
        questionText: 'Συνήθως, στην επιφάνεια εργασίας συναντάμε εικονίδια',
        answerOptions: [
          { id: 1, answerText: 'Σωστό', isCorrect: true },
          { id: 2, answerText: 'Λάθος', isCorrect: false },
        ],
      },
    ],
  },
  {
    id: 3,
    lesson: 'Προστασία Λογισμικού - Ιοί',
    questions: [
      {
        id: 1,
        questionText: 'Τι είναι Ιός;',
        answerOptions: [
          {
            id: 1,
            answerText: 'Πρόγραμμα που δημιουργεί πρόβλημα στην ομαλή λειτουργία του υπολογιστή',
            isCorrect: true,
          },
          {
            id: 2,
            answerText: 'Πρόβλημα σε κάποιο υλικό μέρος του υπολογιστή',
            isCorrect: false,
          },
          {
            id: 3,
            answerText: 'Ένδειξη μεγάλης θερμοκρασίας του υπολογιστή',
            isCorrect: false,
          },
        ],
      },
      {
        id: 2,
        questionText: 'Τι είναι ένας hacker;',
        answerOptions: [
          { id: 1, answerText: 'Ο προγραμματιστής του υπολογιστή', isCorrect: false },
          {
            id: 2,
            answerText: 'Κακόβουλο άτομο που εισβάλει στον υπολογιστή',
            isCorrect: true,
          },
          {
            id: 3,
            answerText: 'Hacker είναι κάποιος που δεν γνωρίζει πως να χειρίζεται έναν υπολογιστή',
            isCorrect: false,
          },
        ],
      },
      {
        id: 3,
        questionText: 'Μπορεί να περιέχουν ιό :',
        answerOptions: [
          { id: 1, answerText: 'Τα μη νόμιμα προγράμματα', isCorrect: true },
          { id: 2, answerText: 'Τα νόμιμα προγράμματα', isCorrect: false },
          {
            id: 3,
            answerText: 'Ένα αρχείο που δημιουργώ εγώ στον υπολογιστή',
            isCorrect: false,
          },
        ],
      },
      {
        id: 4,
        questionText: 'Τι είναι πρόγραμμα τείχους προστασίας ή firewall;',
        answerOptions: [
          {
            id: 1,
            answerText: 'Διαχωριστής των εφαρμογών στην επιφάνεια εργασίας',
            isCorrect: false,
          },
          { id: 2, answerText: 'Γραφικά με φωτιά για το φόντο', isCorrect: false },
          {
            id: 3,
            answerText: 'Πρόγραμμα για την προστασία του υπολογιστή',
            isCorrect: true,
          },
        ],
      },
      {
        id: 5,
        questionText: 'Πως μπορείς να χάσεις τα αρχεία στον υπολογιστή σου;',
        answerOptions: [
          { id: 1, answerText: 'Βλάβη στα αποθηκευτικά μέσα', isCorrect: true },
          {
            id: 2,
            answerText: 'Αν έχεις τον υπολογιστή ανοιχτό για πολύ ώρα',
            isCorrect: false,
          },
          {
            id: 3,
            answerText: 'Αν δεν ανοίγεις τον υπολογιστή συχνά',
            isCorrect: false,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    lesson: 'Πειρατεία λογισμικού',
    questions: [
      {
        id: 1,
        questionText: 'Περίπτωση πειρατείας λογισμικού είναι: ',
        answerOptions: [
          { id: 1, answerText: 'Το κλέψιμο του κινητού σου', isCorrect: false },
          {
            id: 2,
            answerText: 'Η παράνομη εγκατάσταση προγραμμάτων χωρίς την άδεια του δημιουργού',
            isCorrect: true,
          },
        ],
      },
      {
        id: 2,
        questionText: 'Ένα πλεονέκτημα από τη χρήση νόμιμου λογισμικού είναι :',
        answerOptions: [
          {
            id: 1,
            answerText: 'Σιγουρία ότι το λογισμικό είναι απαλλαγμένο από ιούς',
            isCorrect: true,
          },
          {
            id: 2,
            answerText: 'Δεν παρέχεται τεχνική υποστήριξη από τους κατασκευαστές',
            isCorrect: false,
          },
        ],
      },
      {
        id: 3,
        questionText: 'Τι είναι το open Source;',
        answerOptions: [
          { id: 1, answerText: 'cd για αποθήκευση προγραμμάτων', isCorrect: false },
          { id: 2, answerText: 'Παράνομο λογισμικό', isCorrect: false },
          {
            id: 3,
            answerText: 'Δωρεάν πρόγραμμα που ο κατασκευαστής επιτρέπει να γίνουν αλλαγές',
            isCorrect: true,
          },
        ],
      },
      {
        id: 4,
        questionText: 'Τι είναι Freeware;',
        answerOptions: [
          { id: 1, answerText: 'Πρόγραμμα με πλήρη άδεια χρήσης', isCorrect: true },
          {
            id: 2,
            answerText: 'Πρόγραμμα που δεν χρειάζεται να πληρώσεις πολλές φορές για να το χρησιμοποιήσεις',
            isCorrect: false,
          },
        ],
      },
      {
        id: 5,
        questionText: 'Ένα πλεονέκτημα χρήσης νόμιμου λογισμικού είναι:  ',
        answerOptions: [
          {
            id: 1,
            answerText: 'Το λογισμικό είναι πολύ μικρό σε απαιτήσεις χώρου αποθήκευσης',
            isCorrect: false,
          },
          {
            id: 2,
            answerText: 'Το λογισμικό είναι ελεγμένο και δοκιμασμένο',
            isCorrect: true,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    lesson: 'Δοκίμασε τις γνώσεις σου πάνω σε όλα τα κεφάλαια!',
    questions: [
      {
        id: 1,
        questionText: 'Το σύνολο των προγραμμάτων που χρησιμοποιούντια από τους υπολογιστές ονομάζονται :',
        answerOptions: [
          { id: 1, answerText: 'Λογισμικό', isCorrect: true },
          { id: 2, answerText: 'Υλικό', isCorrect: false },
        ],
      },
      {
        id: 2,
        questionText: 'Το λογισμικό χωρίζεται σε :',
        answerOptions: [
          {
            id: 1,
            answerText: 'Λογισμικό Εφαρμογών και Λογισμικό Υλικού',
            isCorrect: false,
          },
          {
            id: 2,
            answerText: 'Λογισμικό Εφαρμογών και Λογισμικό Συστήματος',
            isCorrect: true,
          },
        ],
      },
      {
        id: 3,
        questionText: 'Πως ονομάζεται ο χώρος που βλέπουμε όταν ανοίγουμε τον υπολογιστή;',
        answerOptions: [
          { id: 1, answerText: 'Επιφάνεια εργασίας', isCorrect: true },
          { id: 2, answerText: 'Φόντο', isCorrect: false },
        ],
      },
      {
        id: 4,
        questionText: 'Πως ονομάζεται το κουμπί που πρέπει να πατήσουμε για να δούμε τις εφαρμογές του υπολογιστή;',
        answerOptions: [
          { id: 1, answerText: 'Τερματισμός', isCorrect: false },
          { id: 2, answerText: 'Έναρξη', isCorrect: true },
        ],
      },
      {
        id: 5,
        questionText:
          'Πως ονομάζεται ο χώρος που βρίσκονται οι καρφιτσομένες εφαρμογές και πληροφορίες των ανοιχτών εφαρμογών;',
        answerOptions: [
          { id: 1, answerText: 'Γραμμή εργασιών', isCorrect: true },
          { id: 2, answerText: 'Μπάρα συντομεύσεων', isCorrect: false },
        ],
      },
      {
        id: 6,
        questionText: 'Τι είναι Ιός;',
        answerOptions: [
          {
            id: 1,
            answerText: 'Πρόγραμμα που δημιουργεί πρόβλημα στην ομαλή λειτουργία του υπολογιστή',
            isCorrect: true,
          },
          {
            id: 2,
            answerText: 'Πρόβλημα σε κάποιο υλικό μέρος του υπολογιστή',
            isCorrect: false,
          },
          {
            id: 3,
            answerText: 'Ένδειξη μεγάλης θερμοκρασίας του υπολογιστή',
            isCorrect: false,
          },
        ],
      },
      {
        id: 7,
        questionText: 'Τι είναι ένας hacker;',
        answerOptions: [
          { id: 1, answerText: 'Ο προγραμματιστής του υπολογιστή', isCorrect: false },
          {
            id: 2,
            answerText: 'Κακόβουλο άτομο που εισβάλει στον υπολογιστή',
            isCorrect: true,
          },
          {
            id: 3,
            answerText: 'Hacker είναι κάποιος που δεν γνωρίζει πως να χειρίζεται έναν υπολογιστή',
            isCorrect: false,
          },
        ],
      },
      {
        id: 8,
        questionText: 'Μπορεί να περιέχουν ιό :',
        answerOptions: [
          { id: 1, answerText: 'Τα μη νόμιμα προγράμματα', isCorrect: true },
          { id: 2, answerText: 'Τα νόμιμα προγράμματα', isCorrect: false },
          {
            id: 3,
            answerText: 'Ένα αρχείο που δημιουργώ εγώ στον υπολογιστή',
            isCorrect: false,
          },
        ],
      },
      {
        id: 9,
        questionText: 'Περίπτωση πειρατείας λογισμικού είναι: ',
        answerOptions: [
          { id: 1, answerText: 'Το κλέψιμο του κινητού σου', isCorrect: false },
          {
            id: 2,
            answerText: 'Η παράνομη εγκατάσταση προγραμμάτων χωρίς την άδεια του δημιουργού',
            isCorrect: true,
          },
        ],
      },
      {
        id: 10,
        questionText: 'Ένα πλεονέκτημα από τη χρήση νόμιμου λογισμικού είναι :',
        answerOptions: [
          {
            id: 1,
            answerText: 'Σιγουρία ότι το λογισμικό είναι απαλλαγμένο από ιούς',
            isCorrect: true,
          },
          {
            id: 2,
            answerText: 'Δεν παρέχεται τεχνική υποστήριξη από τους κατασκευαστές',
            isCorrect: false,
          },
        ],
      },
      {
        id: 11,
        questionText: 'Τι είναι το open Source;',
        answerOptions: [
          { id: 1, answerText: 'cd για αποθήκευση προγραμμάτων', isCorrect: false },
          { id: 2, answerText: 'Παράνομο λογισμικό', isCorrect: false },
          {
            id: 3,
            answerText: 'Δωρεάν πρόγραμμα που ο κατασκευαστής επιτρέπει να γίνουν αλλαγές',
            isCorrect: true,
          },
        ],
      },
      {
        id: 12,
        questionText: 'Τι είναι Freeware;',
        answerOptions: [
          { id: 1, answerText: 'Πρόγραμμα με πλήρη άδεια χρήσης', isCorrect: true },
          {
            id: 2,
            answerText: 'Πρόγραμμα που δεν χρειάζεται να πληρώσεις πολλές φορές για να το χρησιμοποιήσεις',
            isCorrect: false,
          },
        ],
      },
      {
        id: 13,
        questionText: 'Πάνω δεξιά σε κάθε παράθυρο, τι κάνει το κουμπί που δείχνει ένα τετράγωνο;',
        answerOptions: [
          { id: 1, answerText: 'Ελαχιστοποιεί το παράθυρο', isCorrect: false },
          { id: 2, answerText: 'Κλείνει το παράθυρο ', isCorrect: false },
          { id: 3, answerText: 'Επαναφορά/Μεγιστοποίηση', isCorrect: true },
        ],
      },
      {
        id: 14,
        questionText: 'Πάνω δεξιά σε κάθε παράθυρο, τι κάνει το κουμπί που δείχνει ένα x;',
        answerOptions: [
          { id: 1, answerText: 'Επαναφορά/Μεγιστοποίηση', isCorrect: false },
          { id: 2, answerText: 'Ελαχιστοποιεί το παράθυρο', isCorrect: false },
          { id: 3, answerText: 'Κλείνει το παράθυρο', isCorrect: true },
        ],
      },
    ],
  },
]

export default QuizData
