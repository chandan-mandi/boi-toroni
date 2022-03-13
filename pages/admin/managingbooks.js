import ManagingBooksCard from 'components/Cards/ManagingBooksCard';
import Admin from 'layouts/Admin';
import React from 'react';

const managingbooks = () => {
    return (
        <>
        <Admin>
        <div className="flex flex-wrap mt-4">
          <div className="w-full mb-12 px-4">
            <ManagingBooksCard />
          </div>
          <div className="w-full mb-12 px-4">
            {/* <ManagingBooksCard color="dark" /> */}
          </div>
        </div>
        </Admin>
      </>
    );
};

export default managingbooks;