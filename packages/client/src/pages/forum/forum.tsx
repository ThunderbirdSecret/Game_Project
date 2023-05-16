import styles from './forum.module.scss'

export default function Forum() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <form className={styles.searchForm}>
            <input
              placeholder="search"
              type="text"
              className={styles.searchInput}
            />
          </form>
          <div className={styles.wrapper}>
            <button className={styles.createBtn}>
              Сreate a new discussion ✉
            </button>
          </div>
          <span>test</span>
          <div className={styles.wrapper}></div>
        </div>
        <div className={styles.main}></div>
      </div>
    </div>
  )
}
