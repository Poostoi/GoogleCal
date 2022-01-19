import { Day } from "./Day";
import { Week } from "./Week";
import { Month } from "./Month";

interface IProps {
	formatTime: string;
	month: number;
	year: number;
}
export const Table = ({ month, year, formatTime }: IProps) => {

	return (
		<div className="col-12 ">
			{
				formatTime === 'Day' ?
					<Day /> :
					formatTime === 'Week' ?
						<Week /> :
						formatTime === 'Month' ? <Month month={month}
							year={year} /> : <></>
			}

		</div>
	);
}