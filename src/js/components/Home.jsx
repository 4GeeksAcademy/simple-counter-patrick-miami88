import React, { useState } from "react";
import { Timer } from "./Timer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [counter, setCounter] = useState(0)

	setTimeout(() => {
		setCounter(counter + 1)
		console.log(counter)
		clearTimeout()
	}, 1000)

	return (
		<div className="text-center">
			<Timer count={counter} />
		</div>
	);
};

export default Home;