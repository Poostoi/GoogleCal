
import { Modal, Button } from 'react-bootstrap';


interface IModal {
	show: boolean;
	closeModal: () => void;
	addEvent: () => void;
	arrHandler: {
		ChangeTitle: (e: any) => void;
		ChangeDescription: (e: any) => void;
		ChangeStartTime: (e: any) => void;
		ChangeEndTime: (e: any) => void;
	}
}
export const ModalElementAdd = ({ show, closeModal, addEvent, arrHandler }: IModal) => {



	return (
		<>
			<Modal show={show} onHide={closeModal}>
				<Modal.Header closeButton>
					<Modal.Title>Add Event</Modal.Title>
				</Modal.Header>
				<Modal.Body >
					<label className="col-12" htmlFor="nameEvent">Название вашего события:</label>
					<p className="col-12 mb-2" >
						<input onChange={arrHandler.ChangeTitle} className="col-12" type="text" id="nameEvent">
						</input>
					</p>
					<label className="col-12" htmlFor="descriptionEvent">Описание:</label>
					<p className="col-12 mb-2" >
						<input onChange={arrHandler.ChangeDescription} className="col-12" type="text" id="descriptionEvent">
						</input>
					</p>
					<label className="col-12" htmlFor="startDataEvent">Начало события:</label>
					<p className="col-12 mb-2" >
						<input onChange={arrHandler.ChangeStartTime} className="col-12" type="datetime-local" id="startDataEvent">
						</input>
					</p>
					<label className="col-12" htmlFor="endDataEvent">Конец события:</label>
					<p className="col-12 mb-2" >
						<input onInput={arrHandler.ChangeEndTime} className="col-12" type="datetime-local" id="endDataEvent">
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