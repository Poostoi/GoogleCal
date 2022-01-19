import { Modal, Button } from 'react-bootstrap';
import { Select } from './Select';
import { DayModal } from './DayModal'
import { WeekModal } from './WeekModal'
import { MonthModal } from './MonthModal'

interface IModal {
	show: boolean;
	value: string;
	closeModal: () => void;
	getEvent: () => void;
	change: (e: any) => void;
	format: string;
	maxRange: number;
	arrHandler: {
		ModalElementAddWeek: (e: any) => void;
		ModalElementGetWeek: (e: any) => void;
		ModalChangeDay: (e: any) => void;
		ModalChangeMonth: (e: any) => void;
	};
}
export const ModalElementGet = ({ value, show, closeModal,
	getEvent, arrHandler, change, format, maxRange }: IModal) => {
	return (
		<>
			<Modal show={show} onHide={closeModal}>
				<Modal.Header closeButton>
					<Modal.Title>Get Event</Modal.Title>
				</Modal.Header>
				<form>
					<Modal.Body >
						<Select change={change} />
						<br></br>
						<>{
							(format === 'Day') ?
								<DayModal change={arrHandler.ModalChangeDay} /> : (format === 'Week') ?
									<WeekModal maxRange={maxRange} value={value} changeEnd={arrHandler.ModalElementGetWeek} changeStart={arrHandler.ModalElementAddWeek} /> : format === 'Month' ?
										<MonthModal change={arrHandler.ModalChangeMonth} /> : <></>
						}</>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={closeModal}>
							Close
						</Button>
						<button className='btn btn-primary' onClick={getEvent} type="submit" >
							Save Changes
						</button>
					</Modal.Footer>
				</form>
			</Modal >
		</>
	)
}