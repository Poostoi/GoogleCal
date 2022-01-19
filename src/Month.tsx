

interface IProps {
	month: number;
	year: number;
}
export const Month = ({ month, year }: IProps) => {

	return (
		<table className="month">
			<tbody>
				<tr>
					<td>1</td>
					<td>2</td>
					<td>3</td>
					<td>4</td>
					<td>5</td>
					<td>6</td>
					<td>7</td>
				</tr>
				<tr>
					<td>8</td>
					<td>9</td>
					<td>10</td>
					<td>11</td>
					<td>12</td>
					<td>13</td>
					<td>14</td>
				</tr>
				<tr>
					<td>15</td>
					<td>16</td>
					<td>17</td>
					<td>18</td>
					<td>19</td>
					<td>20</td>
					<td>21</td>
				</tr>
				<tr>
					<td>22</td>
					<td>23</td>
					<td>24</td>
					<td>25</td>
					<td>26</td>
					<td>27</td>
					<td>28</td>
				</tr>
				<tr>
					<td>28</td>
					{(month === 2) ?
						(year % 4 === 0 ? <td>29</td> : "") :
						(month % 2 !== 0 && month !== 8) ?
							<td>30</td> :
							<>
								<td>30</td>
								<td>31</td>
							</>
					}

				</tr>
			</tbody>
		</table>
	)
}