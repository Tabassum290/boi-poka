
const Banner = () => {
    return (
        <div className="w-11/12 mx-auto my-12">
            <section>
            <div className="hero bg-base-200 rounded-lg p-16">
  <div className="flex flex-col justify-between lg:flex-row-reverse">
    <img
      src="./public/books.jpg"
      className="lg:w-1/3 md:w-3/4 rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-3xl lg:text-4xl font-bold">Books to freshen up your<br/> bookshelf</h1>
    
      <button className="btn bg-[#23BE0A]  my-8 text-white">View The List</button>
    </div>
  </div>
</div>
            </section>
        </div>
    );
};

export default Banner;