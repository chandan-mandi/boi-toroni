import InsertBookCard from 'components/Cards/InsertBookCard';
import Admin from 'layouts/Admin';
import React from 'react';

const AddBook = () => {
    return (
        <>
        <Admin>
        <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <InsertBookCard />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          {/* <CardProfile /> */}
        </div>
      </div>
        </Admin>
        </>
    );
};

export default AddBook;