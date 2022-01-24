interface IProps {
	changeFormatTime: (e: any) => void;
}
export const Select = ({ changeFormatTime }: IProps) => {
	return (
		<div className="col-3 ">
			<div className="">
				<h6>Выберите: </h6>
				<span className="col-4" ><input type="radio" value="Day"
					name="selectFormatTime" onInput={changeFormatTime} /><span className="col-3">Day</span></span>
				<span className="col-4" ><input type="radio" value="Week"
					name="selectFormatTime" onInput={changeFormatTime} /><span className="col-3">Week</span></span>
				<span className="col-4" ><input type="radio" value="Month"
					name="selectFormatTime" onClick={changeFormatTime} /><span className="col-3">Month</span></span>
			</div>
		</div>
	);
}