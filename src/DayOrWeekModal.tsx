interface IProps {
	changeRange: (e: any) => void;
	value: number | string;
	maxRange: number;
	format: string;
}
export const DayOrWeekModal = ({ format, maxRange, value, changeRange }: IProps) => {

	return (
		<>
			<div className='col-12'>
				<label htmlFor="weekInput" >{format}:</label>
				<input onChange={changeRange} type="range" min="1" max={maxRange} id="weekInput" />
				<label>{value}</label>
			</div>
		</>
	)
}