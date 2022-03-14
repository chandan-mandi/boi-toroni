const AllBooks = ({book}) =>{
    return(
        <div className="flex space-x-4" >
        {/* <img src="" /> */}
        <p>Img</p>
        <div>
          <p>Book Name</p>
          <p> Boook Deatils  </p>
          <div className="flex justify-between">
            <div>reviwe</div>
            <p>Read more</p>
          </div>
        </div>
        </div>
    )
}

export default AllBooks;