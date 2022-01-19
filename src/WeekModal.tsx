interface IProps {
	changeEnd: (e: any) => void;
	changeStart: (e: any) => void;
	value: string;
	maxRange: number;
}
export const WeekModal = ({ maxRange, value, changeEnd, changeStart }: IProps) => {

	return (
		<>
			<div className='col-12'>
				<label htmlFor="startEnterval" >Месяц: </label>
				<input onChange={changeStart} type="month" id="startEnterval"></input>
			</div>
			<div className='col-12'>
				<label htmlFor="weekInput" >Неделя:</label>
				<input onChange={changeEnd} type="range" min="1" max={maxRange} id="weekInput" />
				<label>{value}</label>
			</div>

		</>
	)
}