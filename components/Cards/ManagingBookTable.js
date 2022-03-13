import React from 'react';
import Image from 'next/image';
import ManagingBookDropdown from 'components/Dropdowns/ManagingBookDropdown';

const ManagingBookTable = ({book, color}) => {
    const percentageRating = parseInt(book.rating) * 100/5;
    console.log("percentage",typeof percentageRating)
    const users = ["https://lh3.googleusercontent.com/a-/AOh14GjpDl25hhU2FxeBD_-FIa0LrlTNvavf2izsxaeLFOg=s96-c", "https://lh3.googleusercontent.com/a-/AOh14GhbWWDknudx7PxrbMRJCzRT7uId--OSkdSSPfwT=s96-c", "https://lh3.googleusercontent.com/a-/AOh14GgJdzWPVALmLURbggSqGI6iQdWti54zcaLqUYLlCA=s96-c", "https://lh3.googleusercontent.com/a-/AOh14Gi0-8IqOedC8IcP1l-RRZXli2NYz5qL31oWCL1l=s96-c"]
    return (
        <>
          <tbody>
                <tr>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                     <Image className="h-12 w-12 bg-white rounded-full border" loader={() => book.thumbnail} src={book.thumbnail} width={50} height={50} alt="User Photo"/>
                    <span
                      className={
                        "ml-3 font-bold " +
                        +(color === "light" ? "text-blueGray-600" : "text-white")
                      }
                    >
                      {book.book_name}
                    </span>
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    ${book.price} USD
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-circle text-orange-500 mr-2"></i> pending
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex">
                        {users?.map(user => (
                            <span className='-ml-4' key={user._id}>
                            <Image  loader={() => user} src={user} width={50} height={50} 
                            className="rounded-full border-2 border-gray-50 shadow"
                            alt="User Photo"/>
                            </span>
                        ))}      
                    </div>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                      <span className="mr-2">{percentageRating ? percentageRating : 0}%</span>
                      <div className="relative w-full">
                        <div className={`overflow-hidden h-2 text-xs flex rounded ${percentageRating > 70 ? "bg-green-200": "bg-red-200"}`}>
                          <div
                            style={{ width: `${percentageRating ? percentageRating : 0}%` }}
                            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${percentageRating > 70 ? "bg-green-500": "bg-red-500"}`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                    <ManagingBookDropdown id={book._id}/>
                  </td>
                </tr>
  
              </tbody>  
        </>
    );
};

export default ManagingBookTable;