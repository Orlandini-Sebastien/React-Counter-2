import { ReactElement } from "react";

type CounterProps = {
	style1: React.CSSProperties | undefined;
	style2: React.CSSProperties | undefined;
	value: number;
	index:number,
	show: string;
	clickMoins: React.MouseEventHandler<HTMLDivElement> | undefined;
	clickPlus: React.MouseEventHandler<HTMLDivElement> | undefined;
	clickReset: React.MouseEventHandler<HTMLDivElement> | undefined;
};

const Counter = ({
	style1,
	index,
	style2,
	value,
	clickMoins,
	clickPlus,
	clickReset,
	show,
}: CounterProps): ReactElement => {
	return (
		<section className={show}>
			<header> React Counter {index}</header>
			<section>
				<div>
					<div style={style1} onClick={clickMoins}>
						-
					</div>
					<p>{value}</p>
					<div style={style2} onClick={clickPlus}>
						+
					</div>
				</div>
				<div onClick={clickReset}>Reset</div>
			</section>
		</section>
	);
};

export default Counter;
