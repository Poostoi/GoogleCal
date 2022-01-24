import { Day } from "./Day";
import { Week } from "./Week";
import { Month } from "./Month";

interface IProps {
	formatTime: string;
	monthYear: string;
	/*evants: [

	]*/
}
export const Table = ({ monthYear, formatTime }: IProps) => {

	return (
		<div className="col-12 ">
			{
				formatTime === 'Day' ?
					<Day /> :
					formatTime === 'Week' ?
						<Week /> :
						formatTime === 'Month' ?
							<Month monthYear={monthYear} /> : <></>
			}
		</div>
	);
}