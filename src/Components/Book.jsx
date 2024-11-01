import { AiFillStar } from "react-icons/ai";
import {Link} from 'react-router-dom';
const Book = ({book}) => {
    const {image,bookName,author,tags,rating,category,bookId} = book;
return (
  <Link to={`/books/${bookId}`}>
        <div>
            <div className="card bg-base-100 w-96 border-2 p-4 my-8">
  <figure className="py-8 bg-gray-200">
    <img className="h-[166px] rounded-lg"
      src={image}
      alt={bookName} />
  </figure>
  <div className="my-4 flex gap-4">
{
  tags.map((tag,index) => <button key={index} className="btn btn-s text-[#23BE0A]"> {tag}</button>)
}
  </div>
  <div>
    <h2 className="card-title font-bold text-2xl my-4">
      {bookName}
</h2>
<p className="font-semibold text-lg my-4">By: {author}</p>
</div>
<div className="border-t-2 border-dashed my-3"></div>
<div className="font-semibold flex justify-between">
<p>{category}</p>

<p className="flex justify-center items-center gap-2 text-lg">{rating}<AiFillStar /> </p>
</div>
  </div>
        </div>
  </Link>
    );
};

export default Book;