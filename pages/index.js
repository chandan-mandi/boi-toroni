import Banner from "components/Home/Banner/Banner";
import Books from "components/Home/Books/Books";
import Header from "components/Home/Header/Header";
import Footer from "../components/Home/Footer/Footer";
import styles from "../styles/Home.module.css";

export default function Home({books}) {
  console.log(books);
    return (
        <div className={styles.container}>
            <div>
                <Header></Header>
                <Banner></Banner>
            </div>

            <div>
                <Books books={books}></Books>
            </div>

            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    );
}

export async function getStaticProps() {
  const response = await fetch("https://boitoroni.herokuapp.com/books");
  const books = await response.json();

  return {
      props: {books}
  }
}