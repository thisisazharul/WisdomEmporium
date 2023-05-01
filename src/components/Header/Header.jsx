import React from "react";

const Header = () => {
	return (
		<header class="relative flex h-16 items-center bg-white/40 shadow-sm">
			<nav class="mx-auto flex w-9/12 items-center justify-between">
				<div class="font-bold uppercase text-zinc-800">
					<h1 class="text-lg">
						<span class="text-purple-800">Wisdom</span>
						<span class="text-neutral-700"> Emporium</span>
					</h1>
					<p class="-mt-1 text-[10px] font-normal capitalize">
						Where wisdom meets curiosity!
					</p>
				</div>
				<img
					src="/public/android-chrome-640x640.jpg"
					alt=""
					class="mr-3 h-9 w-9 rounded-full bg-zinc-50 object-fill"
				/>
			</nav>
		</header>
	);
};

export default Header;
