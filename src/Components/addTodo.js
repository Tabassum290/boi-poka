import { toast } from "react-toastify";

const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
    }
    
    
const addToStoredReadList = (id) => {
        const storedList = getStoredReadList();
        if(storedList.includes(id)){
            // already exists. do not add it 
            console.log(id,'already axist in the read list')
            
            toast.error('Already exist , You canot add again')
        }else{
            storedList.push(id);
            const storedListStr = JSON.stringify(storedList);
            localStorage.setItem("read-list",storedListStr)

            toast.success('This book is added to the read list')
}
}

const getStoredWishlist = () => {
    const storedWishListStr = localStorage.getitem('wish-list');
    if(storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }else{
        return [];
    }
}

const addStoredWishlist = (id) => {
    const storedWishList = getStoredWishlist();
    if(wishList.includes(id)){
console.log(id,'already added to wishlist');
}
else{
    wishList.push(id);
    const storedWishListStr = JSON.stringify(storedWishList);
    localStorage.setItem('wishlist',storedWishListStr)
}
}

export { addToStoredReadList,addStoredWishlist , getStoredReadList }