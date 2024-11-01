import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from './addTodo';
import Book from './Book';

const ListedBooks = () => {
    const [readList,setReadList] = useState([]);
    const allBooks = useLoaderData();

useEffect(()=>{
const storedReadList = getStoredReadList();
const storedReadListInt = storedReadList.map(id => parseInt(id))
console.log(storedReadList,allBooks,storedReadListInt);

const readList = allBooks.filter(book=> storedReadListInt.includes(book.bookId))
setReadList(readList);
},[])
    return (
        <div>
            <h2>ListedBooks</h2>
<Tabs>
    <TabList>
      <Tab>Read</Tab>
      <Tab>Wishlist</Tab>
    </TabList>

    <TabPanel>
      <h2>Books : {readList.length}</h2>
      {
        readList.map(book => <Book key={book.bookId} book={book}></Book>)
      }
      
    </TabPanel>
    <TabPanel>
      <h2>Wishlists</h2>
    </TabPanel>
  </Tabs>

 </div>
    );
};

export default ListedBooks;