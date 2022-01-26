import { AddEvent } from './AddEvent';
import { Table } from './Table';
import { GetEvent } from './GetEvent';
import { SetTime } from './SetTime';
import { useState } from 'react';
import { Select } from './Select';


export const Main = () => {
	const [formatTime, setFormatTime] = useState('Day');
	const [monthYear, setMonthYear] = useState('2022-01');
	const [events, setEvents] = useState([]);
	const upValue = (e: any) => setMonthYear(e.target.value);
	const changeEvents = (events: any) => {
		setEvents(events);
	}
	return (
		<>
			<main >
				<section className='func-area'>
					<AddEvent />
					<GetEvent
						changeEvents={changeEvents}
						monthYear={monthYear}
						format={formatTime} />
					<Select changeFormatTime={(e: any) => setFormatTime(e.target.value)} />
					<SetTime handler={upValue} />
				</section>
				<section className='calendar-area '>
					<Table events={events} formatTime={formatTime} monthYear={monthYear} />
				</section>
			</main>
		</>
	)
}