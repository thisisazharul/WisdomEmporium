import React, { useEffect, useState } from "react";
import "./Sidebar.css";
const Sidebar = ({ readTime, bookmarked }) => {
	const [getreadTime, setgetReadTime] = useState(readTime);
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const getReadTime = JSON.parse(localStorage.getItem("read-time"));
		setgetReadTime(getReadTime);
	}, [readTime]);

	useEffect(() => {
		setCounter(bookmarked.length);
	}, [bookmarked]);

	const clearSpentTime = (value) => {
		localStorage.clear();
		setgetReadTime(value);
	};

	return (
		<div className="sidebar lg:sticky lg:top-8">
			<div className="spent-time rounded-md border bg-white/40 text-center shadow-md transition hover:bg-white hover:ring-1 hover:ring-purple-600/30 ">
				<p className="text-xl font-semibold text-slate-700">
					Spent time to read:{" "}
					<span className="font-bold text-purple-800">
						{getreadTime ? getreadTime : 0} min
					</span>{" "}
				</p>
			</div>
			<div className="mx-auto mt-5 max-w-fit ">
				<button
					className="rounded-full border border-slate-300 bg-white/70 px-5 py-3 text-center text-slate-700 shadow-sm transition hover:border-purple-400 hover:bg-purple-900 hover:text-white hover:shadow-lg"
					onClick={() => clearSpentTime(0)}
				>
					Clear read time
				</button>
			</div>

			{/* BookedMarked Blogs */}
			<div className="bookmarked-blog mt-5 rounded-md border bg-white/40 p-7 text-center shadow-md transition hover:bg-white hover:ring-1 hover:ring-purple-600/30">
				<p className="text-xl font-semibold text-slate-700">
					Bookmarked Blogs:{" "}
					<span className="font-bold text-purple-800">{counter} </span>
				</p>
				{bookmarked.map((bookmark, index) => (
					<div
						className="bookmarked-text cursor-pointer rounded-md bg-slate-200/70 text-start text-sm text-slate-700 hover:bg-purple-600/20 hover:text-slate-900"
						key={index}
					>
						{bookmark}
					</div>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
