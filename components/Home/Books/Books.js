import axios from "axios";
import BoiCard from "components/Cards/BoiCard";
import BookCard from "components/Cards/BookCard";

const Books = ({ books }) => {
    console.table(books);
    const array = [1,2,3,4,5,6,7]
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        console.log(element)
        
    }
    return (
        <>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                { 
                    books.map((book, index) =>
                        <BoiCard
                            key={index}
                            book={book}
                        ></BoiCard>
                    ) 
                }
            </div>
        </>
    );
}




export default Books;
