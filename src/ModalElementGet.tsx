import { Modal, Button } from 'react-bootstrap';
import { DayOrWeekModal } from './DayOrWeekModal';
import { useState } from 'react';

const gapi = window.gapi;
interface IModal {
	show: boolean;
	setShow: any;
	format: string;
	monthYear: string;
	changeEvents: (e: any) => void;
	showArr: {
		maxRangeDay: number;
		maxRangeWeek: number;
	}
}
const lastDay = (date: string) => {
	let year = '', month = '';

	for (let i: number = 0; i < date.length; i++) {
		if (i < 4) {
			year += date[i];
		} else if (i > 4) {
			month += date[i];
		}
	}
	if (Number(month) === 2) {
		return Number(year) % 4 === 0 ? 29 : 28;
	} else if (Number(month) < 8) {
		return Number(month) % 2 === 0 ? 30 : 31;
	} else {
		return Number(month) % 2 === 0 ? 31 : 30;
	}
};
const weekDay = (date: string, week: number) => {
	week--;
	let firstDayWeek = week * 7 + 1;
	let endDayWeek = firstDayWeek + (week < 4 ? 6 : lastDay(date) % 7 - 1);
	return { firstDayWeek, endDayWeek };
}

export const ModalElementGet = ({ changeEvents, show, setShow, format, monthYear, showArr }: IModal) => {

	const [valueInputRange, setValueInputRange] = useState('');

	const [startTime, setStartTime] = useState('');
	const [endTime, setEndTime] = useState('');
	const getEvent = () => {
		gapi.client.calendar.events.list({
			'calendarId': 'primary',
			'timeMin': startTime,
			'timeMax': endTime,
			'showDeleted': false,
			'singleEvents': true,
			'maxResults': 10,
			'orderBy': 'startTime'
		}).then((response: any) => {
			const event = response.result.items;
			console.log('EVENTS: ', event)
			changeEvents(event);
		})
		setShow(false);
	}

	const ModalChangeGetDay = (e: any) => {
		setStartTime(monthYear + "-" + e?.target.value + 'T00:00:00+02:00');
		setEndTime(monthYear + "-" + e?.target.value + 'T23:59:00+02:00');
		setValueInputRange(e?.target.value);
	};

	const ModalChangeGetWeek = (e: any) => {
		const day = weekDay(monthYear, e?.target.value);
		setStartTime(monthYear + "-" + day.firstDayWeek + 'T00:00:00+02:00');
		setEndTime(monthYear + "-" + day.endDayWeek + 'T23:59:00+02:00');
		setValueInputRange(e?.target.value);
	};
	const closeModal = () => {
		setShow(false);
		setValueInputRange('');
		setValueInputRange('');
	}
	return (
		<>
			<Modal show={show} onHide={closeModal}>
				<Modal.Header closeButton>
					<Modal.Title>Get Event</Modal.Title>
				</Modal.Header>
				<form>
					<Modal.Body >
						<>
							{
								(format === 'Day') ?
									<DayOrWeekModal maxRange={showArr.maxRangeDay} value={valueInputRange} changeRange={ModalChangeGetDay} /> : (format === 'Week') ?
										<DayOrWeekModal maxRange={showArr.maxRangeWeek} value={valueInputRange} changeRange={ModalChangeGetWeek} /> :
										format === 'Month' ?
											<label>Нажмите на кнопку для получение данных.</label> : <></>
							}
						</>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={closeModal}>
							Close
						</Button>
						<button className='btn btn-primary' onClick={getEvent} type="button" >
							Get Event
						</button>
					</Modal.Footer>
				</form>
			</Modal >
		</>
	)
}