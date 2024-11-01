import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "./addTodo";

const BookDetails = () => {
const {bookId} =useParams();
const data = useLoaderData();
const book = data.find(book => book.bookId == bookId)
const {bookId:bookid,image,tags,category,rating,yearOfPublishing,publisher,totalPages,review,author,bookName} = book;

const handleAddtoRead = (id) => {
addToStoredReadList(id);
}

return (
        <div className="w-11/12 mx-auto">
         <section className="lg:flex ">
            <div className="bg-gray-200 p-12 rounded-lg flex justify-center items-center">
<img className="h-[460px] rounded-lg " src={image} alt="" />
</div>
 <div className="lg:p-12 lg:w-1/2">
<h1 className="text-4xl font-bold my-4 ">{bookName}</h1>
<p className="font-semibold my-4 text-[#131313CC]">By : {author}</p>
<hr/>
<p className="font-semibold my-4">{category}</p>
<hr/>
<p><span className="font-bold">Review:</span> {review}</p>
<div className="my-4 flex gap-4">
    <p className="font-bold">Tag:  
{
  tags.map((tag,index) => <button key={index} className="btn btn-sm text-[#23BE0A]"> #{tag}</button>)
}</p>
  </div>
  <hr/>
<p className="text-black font-bold my-4"><span className="text-gray-700 mr-12">Number of Page:</span>{totalPages}</p>
<p className="text-black font-bold mb-4"><span className="text-gray-700 mr-[90px]">Publishers:</span>{publisher}</p>
<p className="text-black font-bold mb-4"><span className="text-gray-700 mr-8">Year of Publishers:</span>{yearOfPublishing}</p>
<p className="text-black font-bold mb-4"><span className="text-gray-700 mr-[120px]">Rating:</span>{rating}</p>
<div className="flex gap-5 my-8">
    <button onClick={() => handleAddtoRead(bookId)} className="btn p-4 font-bold btn-outline">Read</button>
    <button className="btn p-4 font-bold bg-[#50B1C9] text-white">Wishlist</button>
</div>
</div>
         </section>
        </div>
    );
};

export default BookDetails;
