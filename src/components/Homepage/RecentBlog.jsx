const RecentBlog = ({ blog }) => {
  console.log("blog")
  return (
    <>
      <div>
        <div className="card bg-base-100 w-96 shadow-xl border">
          <figure className="px-5 pt-5">
            <img
              src={blog.image}
              alt="Shoes"
              className="max-h-48 w-full rounded-lg"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title ">{blog.title}</h2>
            <p className="line-clamp-5">{blog.content}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default RecentBlog;
