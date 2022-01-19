interface IProps {
	change: (e: any) => void;
}
export const DayModal = ({ change }: IProps) => {

	return (
		<>
			<div className='col-12'>
				<label htmlFor="startDataEvent">День:</label>
				<input onChange={change} type="date" id="startDataEvent">
				</input>
			</div>
		</>
	)
}