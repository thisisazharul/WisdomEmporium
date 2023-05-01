import React, { useState } from "react";
import "./SingleBlog.css";

const bookmarkColor = {
	color: "black",
};
const SingleBlog = ({ blog, handleMarkasRead, handleBookmarkedBlog }) => {
	const {
		id,
		author_name,
		blog_title,
		author_img,
		blog_cover,
		read_time,
		published_date,
	} = blog;

	// Bookmark Fill color change;
	const [isBookmarkColor, setIsBookMarkColor] = useState(false);
	const handleBookmarkColor = () => {
		if (!isBookmarkColor) {
			setIsBookMarkColor(true);
		}
	};

	return (
		<article>
			<div className="single-card mx-auto mt-5 max-w-3xl rounded border border-slate-300 bg-white/40 px-5 py-5 text-start transition hover:bg-white hover:ring-1 hover:ring-purple-600/20 hover:drop-shadow-lg">
				<div>
					<img
						className="mx-auto w-fit rounded-md object-scale-down"
						src={blog_cover}
						alt="blogImg"
					/>
				</div>
				<div className="mx-3 mt-3 flex items-center justify-between">
					<div className="flex items-center gap-4">
						<div className="author_img">
							<img
								className="mr-1 h-10 w-10 rounded-full bg-zinc-50 object-fill"
								src={author_img}
							/>
						</div>
						<div className="author_name text-sm leading-4 text-zinc-900">
							<h2 className="username font-bold">{author_name}</h2>
							<p className="date-text">{published_date}</p>
						</div>
					</div>

					<div className="flex place-content-center gap-3 text-sm">
						<div>0{read_time} Minutes to read</div>
						<div className="bookmark-icon">
							<span>
								<button
									onClick={() => handleBookmarkedBlog(blog_title)}
									className="cursor-pointer"
									style={bookmarkColor}
									title="Add to Bookmark"
								>
									<svg
										onClick={() => handleBookmarkColor()}
										xmlns="http://www.w3.org/2000/svg"
										fill={isBookmarkColor ? "black" : "none"}
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="h-6 w-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
										/>
									</svg>
								</button>
							</span>
						</div>
					</div>
				</div>
				<div className="my-3 ml-2 text-start">
					<h1 className="text-3xl font-bold">{blog_title}</h1>
				</div>
				<div className="hashtag font-it group-hover group mb-2 ml-2 text-sm italic text-slate-500 transition">
					<span className="hover:font-semibold">#technology </span>
					<span className="hover:font-semibold">#programming </span>
					<span className="hover:font-semibold">#assignment-08 </span>
				</div>

				<div>
					{" "}
					<button
						className={`text-md -mb-2 ml-2 font-semibold text-slate-500 transition hover:text-purple-800 ${
							read_time ? "flex items-center" : ""
						}`}
						onClick={() => handleMarkasRead(read_time)}
					>
						{" "}
						Mark as read &nbsp;
						{read_time ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="mr-2 h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
						) : (
							""
						)}
					</button>
				</div>
			</div>

			<hr className="custom-divider" />
		</article>
	);
};

export default SingleBlog;
