interface IProps {
	events: any;
}
export const Week = ({ events }: IProps) => {
	return (
		<table className="week">
			<tbody>
				<tr>
					<td className="col-1"></td>
					<td >Monday</td>
					<td>Tuesday</td>
					<td>Wednesday</td>
					<td>Thursday</td>
					<td>Friday</td>
					<td>Saturday</td>
					<td>Sunday</td>
					<td className="col-1"></td>
				</tr>
				<tr>
					<td className="col-1">00:00 </td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td className="col-1"></td>
				</tr>
				<tr>
					<td className="col-1">04:00 </td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td className="col-1"></td>
				</tr>
				<tr>
					<td className="col-1">10:00 </td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td className="col-1"></td>
				</tr>
				<tr>
					<td className="col-1">14:00 </td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td className="col-1"></td>
				</tr>
				<tr>
					<td className="col-1">18:00 </td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td className="col-1"></td>
				</tr>
				<tr>
					<td className="col-1">22:00 </td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td className="col-1"></td>
				</tr>
			</tbody>
		</table>
	)
}