import { Day } from "./Day";
import { Week } from "./Week";
import { Month } from "./Month";

interface IProps {
	formatTime: string;
	monthYear: string;
	events: any;
}
export const Table = ({ events, monthYear, formatTime }: IProps) => {

	return (
		<div className="col-12 ">
			{
				formatTime === 'Day' ?
					<Day events={events} /> :
					formatTime === 'Week' ?
						<Week events={events} /> :
						formatTime === 'Month' ?
							<Month monthYear={monthYear} /> : <></>
			}
		</div>
	);
}