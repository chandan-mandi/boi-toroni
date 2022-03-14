function Books({ books }) {
    console.log(books);
    return (
        <>
            <h1>List of books</h1>
        </>
    );
}

export default Books;

export async function getStaticProps() {
    const response = await fetch("https://boitoroni.herokuapp.com/books");
    const data = await response.json();
    console.log(data);

    return {
        props: {
            books: data,
        },
    };
}
