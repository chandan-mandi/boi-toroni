import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router'
import Admin from 'layouts/Admin';
import InsertBookCard from 'components/Cards/InsertBookCard';
import axios from 'axios';

const BookUpdate = () => {
    const router = useRouter();
    const [singleBookInfo, setSingleBookInfo] = useState({});
    const {book_update_id} = router.query;
    console.log(book_update_id);
    useEffect(() => {
        axios.get(`http://localhost:5000/books/${book_update_id}`)
        .then(res => {
            setSingleBookInfo(res.data);
        })
    }, [book_update_id])
    
    return (
        <>
            <Admin>
                <InsertBookCard update singleBookInfo={singleBookInfo}/>
            </Admin>  
        </>
    );
};

export default BookUpdate;