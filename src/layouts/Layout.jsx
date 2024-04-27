//styles
import styles from "./Layout.module.css"

const Layout = ({children}) => {
    return (
        <>
        <header className={styles.header}>
            <h1>Library App</h1>
            <p><a href="https://github.com/BaharBSR" target='_blanck'>Bahar</a> | React.js</p>
        </header>
        {children}
        <footer className={styles.footer}>
            <p>Developed By Bahar With ❤️</p>
        </footer>
        </>
    );
};

export default Layout;