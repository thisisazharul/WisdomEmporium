import React from "react";
import "./QA.css";
const QA = () => {
	return (
		<div className="mx-auto mt-16 max-w-5xl flex-1 space-y-3 rounded px-4 pb-10 text-justify text-slate-900 sm:px-6 md:px-8">
			<h3 className="drop relative my-5 mb-10 px-3 pt-5 text-center font-bold tracking-tight text-purple-800 transition hover:text-zinc-800 md:text-4xl">
				Assignment-08 Q&A
			</h3>
			<article
				id="q1"
				className="group mx-auto max-w-5xl rounded border bg-white px-5 py-5 text-justify transition hover:bg-zinc-100/40 hover:drop-shadow-sm"
			>
				<h2 className="mb-3 text-xl font-semibold text-zinc-800 md:text-2xl">
					01. Difference between Props vs State.{" "}
				</h2>
				<p className="leading-relaxed">
					<span className="font-semibold">Answer:</span> &nbsp; In ReactJS, one
					can pass data between components using Props and State. Props are
					known as{" "}
					<span className="font-medium text-purple-800">properties</span> and
					can be used to pass data from one component to another. They are
					read-only and immutable1. On the other hand,{" "}
					<span className="font-medium text-purple-800">State</span> represents
					parts of an application that can change. Each component can have its
					own state. The state is mutable and local to the component only. It
					can be updated using the <span className="font-mono">setState()</span>{" "}
					method. The state is private and fully controlled by the component.
				</p>
			</article>
			<article
				id="q2"
				className="group mx-auto max-w-5xl rounded border bg-white px-5 py-5 text-justify transition hover:bg-zinc-100/40 hover:drop-shadow-sm"
			>
				<h2 className="mb-3 text-xl font-semibold text-zinc-800 md:text-2xl">
					02. How does useState work?{" "}
				</h2>
				<p className="leading-relaxed">
					<span class="font-semibold">Answer:</span> &nbsp; The{" "}
					<span className="font-mono font-semibold text-purple-800">
						useState
					</span>{" "}
					hook is a function that can be used to add state to functional
					components in React. An initial value for the state is passed to
					&nbsp;
					<span className="font-mono font-semibold text-purple-800">
						useState
					</span>{" "}
					when it is called. This can be any type of data: a string, a number,
					an array, an object, etc. An array containing two values is returned
					by{" "}
					<span className="font-mono font-semibold text-purple-800">
						useState:
					</span>
					&nbsp;the current state value and a function for updating it.
				</p>
			</article>
			<article
				id="q3"
				className="group mx-auto max-w-5xl rounded border bg-white px-5 py-5 text-justify transition hover:bg-zinc-100/40 hover:drop-shadow-sm"
			>
				<h2 className="mb-3 text-xl font-semibold text-zinc-800 md:text-2xl">
					03. What is the purpose of{" "}
					<span className="font-mono text-purple-800">useEffect()</span>?{" "}
				</h2>
				<p class="leading-relaxed">
					<span class="font-semibold">Answer:</span> &nbsp;The{" "}
					<span className="font-mono font-semibold text-purple-800">
						useEffect
					</span>{" "}
					hook allows you to perform side effects in your components. Some
					examples of side effects are fetching data, directly updating the DOM,
					and timersuseEffect accepts two arguments: a function that defines the
					side effect and an optional array of dependencies
				</p>
			</article>
			<article
				id="q4"
				className="group mx-auto max-w-5xl rounded border bg-white px-5 py-5 text-justify transition hover:bg-zinc-100/40 hover:drop-shadow-sm"
			>
				<h2 className="mb-3 text-xl font-semibold text-zinc-800 md:text-2xl">
					04. How does react works ?{" "}
				</h2>
				<p className="leading-relaxed">
					<span className="font-semibold">Answer:</span>&nbsp;React is a
					JavaScript library created by Facebook for building user interfaces
					{" (UI) "}
					components. It uses a declarative paradigm and promotes the
					development of reusable UI components that display dynamic data.{" "}
				</p>
				<p>
					One of the key features of React is its use of a virtual DOM. Instead
					of manipulating the browser's DOM directly, React creates a virtual
					DOM in memory, where it does all the necessary manipulating before
					making changes in the browser DOM. This allows React to only change
					what needs to be changed, making it more efficient.{" "}
				</p>
			</article>
		</div>
	);
};

export default QA;
