import React from 'react';

const BookCard = ({book}) => {
    console.log("from bookcard",book);
    return (
        <div className="rounded overflow-hidden shadow-lg ">
            <div className="h-56"> <img onClick={() => handleBlogDetails(book._id)} className="w-full h-full object-cover hover:cursor-pointer" src={book.thumbnail} alt="Mountain" /> </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 h-12">{book.book_name?.slice(0, 60)}</div>
                <p className="text-gray-700 text-base">
                    {book.about?.slice(0, 110) }...
                </p>
                <div className="flex items-center justify-between">
                    <div>  <span className="text-sm font-semibold">$</span>&nbsp;<span className="font-bold text-xl">{book.peice ? book.price : "00"}</span> </div>
                    <button onClick={() => handleCompare(book)} className=" bg-red-500 hover:bg-red-700 text-white text-center py-2 px-4 rounded">Compare</button>
                </div>
            </div>
            <div className="px-6 pb-1">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{book.category} Travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
            <div className="p-3 border-t flex items-center text-sm text-gray-600">
                {/* <Rating
                    initialRating={blog?.rating}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly>
                </Rating> */}
                {/* <span onClick={() => handleBlogDetails(book._id)} className="ml-2 hover:cursor-pointer hover:text-[#dc9100]">{blog?.comments?.length ? blog?.comments?.length : "No"} reviews</span> */}
            </div>
        </div>
    );
};

export default BookCard;