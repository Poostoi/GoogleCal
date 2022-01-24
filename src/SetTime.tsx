interface IProps {
	handler: (e: any) => void;
}
export const SetTime = ({ handler }: IProps) => {
	return (
		<>
			<input type="month"
				onChange={handler} />
		</>
	)
}