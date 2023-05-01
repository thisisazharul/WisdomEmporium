import React, { useEffect, useState } from "react";
import SingleBlog from "../SingleBlog/SingleBlog";
import Sidebar from "../Sidebar/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Blog.css";

const Blog = () => {
	const [blogs, setBlogs] = useState([]);
	const [readTime, setreadTime] = useState("");
	const [bookmarked, setBookmarked] = useState([]);

	useEffect(() => {
		fetch("wisdomemporium.json")
			.then((res) => res.json())
			.then((data) => setBlogs(data));
	}, []);

	// Toastify;
	// https://fkhadra.github.io/react-toastify/introduction
	const showToasts = () => {
		toast(customMsg, {
			position: "bottom-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	};
	//# Customized HTML component
	const customMsg = ({ closeToast }) => (
		<div>
			     <p>📚📔📕📖📗📘📙📑🔖🧾 Already added this Bookmark! </p>     
		</div>
	);

	// Onclick button added from SingleBox.jsx;
	const handleMarkasRead = (read_time) => {
		const previousReadTime = JSON.parse(localStorage.getItem("read-time"));
		if (previousReadTime) {
			const newReadTime = previousReadTime + read_time;
			localStorage.setItem("read-time", newReadTime);
			setreadTime(newReadTime);
		} else {
			localStorage.setItem("read-time", read_time);
			setreadTime(read_time);
		}
	};

	// Handle Bookmarked blogs;
	const handleBookmarkedBlog = (blog_title) => {
		if (!bookmarked.includes(blog_title)) {
			setBookmarked([...bookmarked, blog_title]);
		} else {
			showToasts();
			setBookmarked([...bookmarked, blog_title]);
		}
	};

	return (
		<section className="Azharul px-4 text-slate-800 sm:px-6 md:px-8">
			<main className="blog mx-auto mt-7 max-w-7xl">
				<article className="blog-section mr-5">
					{blogs.map((blog) => (
						<SingleBlog
							key={blog.id}
							blog={blog}
							// Passing the array to Single Blog Components;
							blogs={blogs}
							// passing the function to SingleBlog.jsx;
							handleMarkasRead={handleMarkasRead}
							// For bookmarked functionality;
							handleBookmarkedBlog={handleBookmarkedBlog}
						/>
					))}
				</article>
				<div className="sidebar mx-10 mt-6">
					<Sidebar
						readTime={readTime}
						bookmarked={bookmarked}
					/>
				</div>
			</main>
			<ToastContainer />
		</section>
	);
};

export default Blog;
