import { useState } from 'react';
import { ModalElementGet } from './ModalElementGet';
declare global { interface Window { gapi: any; } };
interface IProps {
	format: string;
	monthYear: string;
	changeEvents: (e: any) => void;
}
const lastDay = (date: string) => {
	let year = '', month = '';

	for (let i: number = 0; i < date.length; i++) {
		if (i < 4) {
			year += date[i];
		} else if (i > 4) {
			month += date[i];
		}
	}
	if (Number(month) === 2) {
		return Number(year) % 4 === 0 ? 29 : 28;
	} else if (Number(month) < 8) {
		return Number(month) % 2 === 0 ? 30 : 31;
	} else {
		return Number(month) % 2 === 0 ? 31 : 30;
	}
};
export const GetEvent = ({ format, monthYear, changeEvents }: IProps) => {
	const [showGet, setShowGet] = useState(false);
	const maxRangeFunc = (dayOrWeek: string) => {
		if (dayOrWeek === 'Day') {
			return lastDay(monthYear);
		} else if (dayOrWeek === 'Month') {
			return (lastDay(monthYear) % 4 === 0) ? 4 : 5;
		} else {
			return 1;
		}

	};
	const [maxRangeDay, setMaxRangeDay] = useState(maxRangeFunc('Day'));
	const [maxRangeWeek, setMaxRangeWeek] = useState(maxRangeFunc('Month'));
	const showGetFunc = () => {
		setShowGet(true)
		setMaxRangeWeek(maxRangeFunc('Month'));
		setMaxRangeDay(maxRangeFunc('Day'));
	}
	return (
		<>
			<button
				type="button"
				className="btn-add"
				onClick={showGetFunc}
			>
				Get
			</button>

			<ModalElementGet
				changeEvents={changeEvents}
				show={showGet}
				setShow={setShowGet}
				monthYear={monthYear}
				format={format}
				showArr={{ maxRangeDay, maxRangeWeek }} />
		</>
	)
}