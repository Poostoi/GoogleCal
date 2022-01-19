interface IProps {
	change: (e: any) => void;
}
export const MonthModal = ({ change }: IProps) => {

	return (
		<>
			<div className='col-12'>
				<label htmlFor="startEnterval" >Месяц: </label>
				<input onChange={change} type="month" id="startEnterval"></input>
			</div>
		</>
	)
}