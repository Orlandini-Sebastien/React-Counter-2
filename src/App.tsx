import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
	const initial = [0, 0, 0];
	const [counter, setCounter] = useState(initial);
	const [nbCounter, setNbCounter] = useState(1);
	const handleCounter = () => {
		setNbCounter((prev) => prev + 1);
	};
	const counterLoop = () => {
		const array = [];
		for (let i = 0; i < 3; i++) {
			array.push(
				<Counter
					show={nbCounter > i ? "block" : "none"}
					style1={counter[i] === 0 ? { display: "none" } : { display: "block" }}
					style2={
						counter[i] === 10 ? { display: "none" } : { display: "block" }
					}
					value={counter[i]}
					clickMoins={() => {
						setCounter((counter) => {
							const counter2 = [...counter];
							counter2[i] = counter[i] - 1;
							return counter2;
						});
					}}
					clickPlus={() => {
						setCounter((counter) => {
							const counter2 = [...counter];
							counter2[i] = counter[i] + 1;
							return counter2;
						});
					}}
					clickReset={() => {
						setCounter((counter) => {
							const counter2 = [...counter];
							counter2[i] = 0;
							return counter2;
						});
					}}
				/>
			);
		}
		return array;
	};
	return (
		<>
			<section className="layout">
				<button onClick={handleCounter}>Number of counter</button>
				<h1>{counterLoop()}</h1>
				
			</section>

			
		</>
	);
}
export default App;
