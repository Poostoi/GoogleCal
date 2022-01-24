
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const gapi = window.gapi;
interface IModal {
	show: boolean;
	setShow: any;
}
export const ModalElementAdd = ({ show, setShow }: IModal) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [startTime, setStartTime] = useState('');
	const [endTime, setEndTime] = useState('');

	let event = {
		'summary': title,
		'description': description,
		'start': {
			'dateTime': startTime//'2021-12-25T09:00:00-07:00'
		},
		'end': {
			'dateTime': endTime //'2021-12-26T16:00:00-07:00'
		},
		'reminders': {
			'useDefault': true,
		}
	};
	const addEvent = () => {
		let request = gapi.client.calendar.events.insert({
			'calendarId': 'primary',
			'resource': event
		});
		request.execute(() => console.log('ok'));
		setShow(false);
	}
	const closeModal = () => {
		setShow(false);
	};
	const changeStartTime = (e: any) => {
		setStartTime(e?.target.value + ':00+02:00');
	}
	const changeEndTime = (e: any) => {
		setEndTime(e?.target.value + ':00+02:00');
	}
	return (
		<>
			<Modal show={show} onHide={closeModal}>
				<Modal.Header closeButton>
					<Modal.Title>Add Event</Modal.Title>
				</Modal.Header>
				<Modal.Body >
					<label className="col-12" htmlFor="nameEvent">Название вашего события:</label>
					<p className="col-12 mb-2" >
						<input onChange={(e: any) => setTitle(e.target.value)} className="col-12" type="text" id="nameEvent">
						</input>
					</p>
					<label className="col-12" htmlFor="descriptionEvent">Описание:</label>
					<p className="col-12 mb-2" >
						<input onChange={(e: any) => setDescription(e.target.value)} className="col-12" type="text" id="descriptionEvent">
						</input>
					</p>
					<label className="col-12" htmlFor="startDataEvent">Начало события:</label>
					<p className="col-12 mb-2" >
						<input onChange={changeStartTime} className="col-12" type="datetime-local" id="startDataEvent">
						</input>
					</p>
					<label className="col-12" htmlFor="endDataEvent">Конец события:</label>
					<p className="col-12 mb-2" >
						<input onInput={changeEndTime} className="col-12" type="datetime-local" id="endDataEvent">
						</input>
					</p>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={closeModal}>
						Close
					</Button>
					<Button variant="primary" onClick={addEvent}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}