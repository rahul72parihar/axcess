import styles from './Page.module.css'

export default function Contact() {
  return (
    <div className={styles.page}>
      <h2>Contact</h2>
      <p>This is a placeholder contact page.</p>
      <ul className={styles.list}>
        <li>Email: example@axcess.dev</li>
        <li>Phone: (555) 123-4567</li>
      </ul>
    </div>
  )
}

