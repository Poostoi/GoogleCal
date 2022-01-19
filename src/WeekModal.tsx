interface IProps {
	changeEnd: (e: any) => void;
	changeStart: (e: any) => void;
}
export const WeekModal = ({ changeEnd, changeStart }: IProps) => {

	return (
		<>
			<div className='col-12'>
				<label htmlFor="startEnterval" >Месяц: </label>
				<input onChange={changeStart} type="month" id="startEnterval"></input>
			</div>
			<div className='col-12'>
				<label htmlFor="startEntervalWeek" >Неделя:</label>
				<input onChange={changeEnd} type="range" min="1" max="5" id="startEntervalWeek" ></input>
			</div>

		</>
	)
}