import { useState } from 'react';
import { ModalElementAdd } from './ModalElementAdd';
import { ModalElementGet } from './ModalElementGet';
interface IProps {
	gapi: any;
	change: (e: any) => void;
	format: string;
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
export const AddEvent = ({ gapi, change, format }: IProps) => {
	const [showAdd, setShowAdd] = useState(false);
	const [showGet, setShowGet] = useState(false);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [startTime, setStartTime] = useState('');
	const [endTime, setEndTime] = useState('');
	const [valueInputRange, setValueInputRange] = useState('');
	const [maxRange, setMaxRange] = useState(5);
	const [monthWeek, setMonthWeek] = useState('');
	const [eventGet, setEventGet] = useState<any>();
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

	const ChangeTitle = (e: any) => {
		setTitle(e?.target.value);
	};
	const ChangeDescription = (e: any) => {
		setDescription(e?.target.value);
	};
	const ChangeStartTime = (e: any) => {
		setStartTime(e?.target.value + ':00+02:00');
	};
	const ChangeEndTime = (e: any) => {
		setEndTime(e?.target.value + ':00+02:00');
	};
	const ModalChangeDay = (e: any) => {
		setStartTime(e?.target.value + 'T00:00:00+02:00');
		setEndTime(e?.target.value + 'T23:59:00+02:00');
	};
	const ModalChangeMonth = (e: any) => {
		setStartTime(e?.target.value + '-01T00:00:00+02:00');
		setEndTime(e?.target.value + '-' + lastDay(e?.target.value) + 'T24:00:00+02:00');
	};
	const ModalElementAddWeek = (e: any) => {
		setMonthWeek(e?.target.value);
		setStartTime(e?.target.value);
		setEndTime(e?.target.value);
		setMaxRange(
			lastDay(e?.target.value) === 28 ? 4 : 5);
		setValueInputRange(String(lastDay(e?.target.value) === 28 ? 4 : 5));
	};
	const ModalElementGetWeek = (e: any) => {
		let month = monthWeek;
		let week = Number(e?.target.value) - 1;
		let firstDayWeek = week * 7 + 1;
		let endDayWeek = firstDayWeek + (week < 4 ? 6 : lastDay(month) % 7 - 1);
		setValueInputRange(e?.target.value);
		setStartTime(month + '-' + firstDayWeek + 'T00:00:00+02:00');
		setEndTime(month + '-' + endDayWeek + 'T23:59:00+02:00');
	};

	const handleCloseGet = () => {
		setShowGet(false);
	};
	const handleShowGet = () => {
		setShowGet(true);
	};
	const handleCloseAdd = () => {
		setShowAdd(false);
	};
	const handleShowAdd = () => {
		setShowAdd(true);
	};

	const addEvent = () => {
		let request = gapi.client.calendar.events.insert({
			'calendarId': 'primary',
			'resource': event
		});

		request.execute(() => console.log('ok'));
		setShowAdd(false);
	}
	const getEvent = () => {
		console.log(startTime);
		console.log(endTime);
		document.cookie = " domain=site.com";
		gapi.client.calendar.events.list({
			'calendarId': 'primary',
			'timeMin': startTime,
			'timeMax': endTime,
			'showDeleted': false,
			'singleEvents': true,
			'maxResults': 10,
			'orderBy': 'startTime'
		}).then((response: any) => {
			const events = response.result.items
			setEventGet(events);
			console.log('EVENTS: ', events)
		})
		setShowGet(false);

	}

	return (
		<>
			<button onClick={() => console.log(eventGet)}></button>
			<button
				type="button"
				className="btn-add"
				onClick={handleShowAdd}
			>
				Add
			</button>
			<button
				type="button"
				className="btn-add"
				onClick={handleShowGet}
			>
				Get
			</button>
			<ModalElementAdd show={showAdd}
				closeModal={handleCloseAdd}
				addEvent={addEvent}
				arrHandler={{
					ChangeTitle,
					ChangeDescription,
					ChangeStartTime,
					ChangeEndTime
				}} />
			<ModalElementGet show={showGet}
				closeModal={handleCloseGet}
				getEvent={getEvent}
				value={valueInputRange}
				change={change}
				format={format}
				maxRange={maxRange}
				arrHandler={{
					ModalElementAddWeek,
					ModalElementGetWeek,
					ModalChangeDay,
					ModalChangeMonth
				}} />
		</>
	)
}