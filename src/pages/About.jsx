import styles from './Page.module.css'

export default function About() {
  return (
    <div className={styles.page}>
      <h2>About</h2>
      <p>
        This site uses <b>react-router-dom</b> for client-side routing.
      </p>
      <p>Pages are rendered inside a shared layout with a top navigation bar.</p>
    </div>
  )
}

