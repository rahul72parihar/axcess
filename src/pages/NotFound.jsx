import { Link } from 'react-router-dom'
import styles from './Page.module.css'

export default function NotFound() {
  return (
    <div className={styles.page}>
      <h2>Page not found</h2>
      <p>The route you requested does not exist.</p>
      <Link className={styles.link} to="/">
        Go home
      </Link>
    </div>
  )
}

