interface IProps {
	day: number;
	month: number;
	year: number;
	handler: (e: any) => void;
}
export const SetTime = ({ day, month, year, handler }: IProps) => {
	let initialValue: string = year + "-" +
		((month + 1) < 10 ? "0" + (month + 1) : (month + 1)) + "-" +
		(day < 10 ? "0" + day : day);
	return (
		<>
			<input type="date"
				defaultValue={initialValue}
				onInput={handler} />
		</>
	)
}