import { useEffect, useState } from "react";
import RecentBlog from "./RecentBlog";

const RecentBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/data/blogs.json")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
      })
      .catch((error) => console.log("Error fetching data,", error));
  }, []);
  return (
    <>
      <div>
        <div className="min-h-screen flex justify-center items-center py-20">
          <div className="space-y-10">
            <div>
              <h1 className="text-7xl text-center font-semibold  bg-gradient-to-r from-[#60aef8] via-[#f46692] to-[#f3a562] bg-clip-text text-transparent">
                Popular Blogs
              </h1>
            </div>
            <div className="grid grid-cols-3 gap-10 ">
              {blogs.map((blog) => (
                <RecentBlog blog={blog} key={blog.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RecentBlogs;
