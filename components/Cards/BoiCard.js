import React from 'react';
import Image from 'next/image';
import Rating from 'react-rating';
import book from '../../Images/pexels-photo-3747315.jpeg';

const BoiCard = ({ book }) => {

    return (
        <>

            <div className="max-w-sm bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                <div className="img-box" style={{padding: '15px', borderRadius: '5px'}}>
                    <a href="#">
                        <Image
                            loader={() => book.thumbnail}
                            src={book.thumbnail}
                            layout="responsive"
                            width={700}
                            height={475}
                            alt="Boitoroni Logo"
                            className='rounded'
                        />
                    </a>
                </div>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{book.book_name}</h5>
                    </a>
                    <div className="flex items-center mt-2.5 mb-5">
                        <Rating
                            initialRating={book.rating}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            readonly>
                        </Rating>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{book.rating ? book.rating : "No Ratings!"}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">${book.price}</span>
                        <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Add to Cart</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default BoiCard;