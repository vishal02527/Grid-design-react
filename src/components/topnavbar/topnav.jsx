import styles from './topnav.module.css'

const Topnav = () => {
    return ( 
        <div>
            <header className={styles.topnav}>
                <div className={styles.logodiv}>
                    <p className={styles.logo}>EDYODA</p>
                    <p className={styles.stories}>Stories</p>
                </div>
                <div className={styles.explorediv}>
                    <p className={styles.explore}>Explore Categories <span className={styles.arrow}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpiYGBguAPE/f///2fAh0FqgPguiBEDxC+BeDUQM2NRyAyVewlWCxW0B+L7QHwAiHmRFPNCxUBy9mAxJElVIL4MxBeBWB6KL0LFVOHq0KwXAuJDQHwPikFsIWQ1jFCFcMDIyMgGpFZAuRFA+V/I8gABBgD8EGd4shdx5wAAAABJRU5ErkJggg==" /></span></p>
                </div>
                <div className={styles.navsentence}>
                    <p className={styles.sentence}>EdYoda is a learning and knowledge
                    sharing platform for techies</p>
                </div>
                <div className={styles.mainbtn}>
                    <button className={styles.headbtn}>Go To Main Website</button>
                </div>
            </header>
        </div>
     );
}
 
export default Topnav;