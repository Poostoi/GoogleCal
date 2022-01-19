interface IProps {
	change: (e: any) => void;
}
export const Select = ({ change }: IProps) => {


	return (
		<div className="col-12 ">
			<div className="w-100 row">
				<h6>Выберите: </h6>
				<span className="col-4" ><input type="radio" value="Day"
					name="selectFormatTime" onInput={change} /><span className="col-3">Day</span></span>
				<span className="col-4" ><input type="radio" value="Week"
					name="selectFormatTime" onInput={change} /><span className="col-3">Week</span></span>
				<span className="col-4" ><input type="radio" value="Month"
					name="selectFormatTime" onClick={change} /><span className="col-3">Month</span></span>

			</div>
		</div>
	);
}