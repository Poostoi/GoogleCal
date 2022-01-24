interface IProps {
	changeRange: (e: any) => void;
	value: number | string;
	maxRange: number;
}
export const DayOrWeekModal = ({ maxRange, value, changeRange }: IProps) => {

	return (
		<>
			<div className='col-12'>
				<label htmlFor="weekInput" >Неделя:</label>
				<input onChange={changeRange} type="range" min="1" max={maxRange} id="weekInput" />
				<label>{value}</label>
			</div>
		</>
	)
}