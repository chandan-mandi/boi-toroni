import Banner from "components/Home/Banner/Banner";
import Books from "components/Home/Books/Books";
import Header from "components/Home/Header/Header";
import Footer from "../components/Home/Footer/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <div>
                <Header></Header>
                <Banner></Banner>
            </div>

            <div>
                <Books></Books>
            </div>

            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    );
}
