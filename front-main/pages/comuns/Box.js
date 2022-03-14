import styles from './styles/Box.module.css'

export default function Box({child}) {

  return (
      <div className={styles.box}>
      <div className={styles.boxContent}>
        {child}
      </div>
      <div className={styles.title}>
      </div>
      </div>
  )
}
