import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Select } from './Select';
import { DayModal } from './DayModal'
import { WeekModal } from './WeekModal'
import { MonthModal } from './MonthModal'

interface IModal {
	show: boolean;
	closeModal: () => void;
	getEvent: () => void;
	change: (e: any) => void;
	format: string;
	arrHandler: {
		ModalElementAddWeek: (e: any) => void;
		ModalElementGetWeek: (e: any) => void;
		ModalChangeDay: (e: any) => void;
		ModalChangeMonth: (e: any) => void;
	};
}
export const ModalElementGet = ({ show, closeModal,
	getEvent, arrHandler, change, format }: IModal) => {
	return (
		<>
			<Modal show={show} onHide={closeModal}>
				<Modal.Header closeButton>
					<Modal.Title>Get Event</Modal.Title>
				</Modal.Header>
				<Modal.Body >
					<Select change={change} />
					<>{
						(format === 'Day') ?
							<DayModal change={arrHandler.ModalChangeDay} /> : (format === 'Week') ?
								<WeekModal changeEnd={arrHandler.ModalElementGetWeek} changeStart={arrHandler.ModalChangeMonth} /> : format === 'Month' ?
									<MonthModal change={arrHandler.ModalChangeMonth} /> : <></>
					}</>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={closeModal}>
						Close
					</Button>
					<Button variant="primary" onClick={getEvent}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal >
		</>
	)
}