import { ConnectCalApp } from './ConnectCalApi'
import { useEffect, useState } from 'react';
import { AddEvent } from './AddEvent';
import { Table } from './Table';
import { SetTime } from './SetTime';
declare global { interface Window { gapi: any; } };

const gapi = window.gapi;
const CLIENT_ID = "27694278166-iu0inkqgjkd180sohl6s1j2k3lsathqn.apps.googleusercontent.com";
const API_KEY = "AIzaSyCO2Ejs1wopEcIVvWgsvtUR3j7t813iSSo"
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
const SCOPES = "https://www.googleapis.com/auth/calendar.events"

export const App = () => {
	const [unitTime, SetUnitTime] = useState('day');
	const [currentMonth, SetCurrentMonth] = useState(new Date().getMonth());
	const [currentYear, SetCurrentYear] = useState(new Date().getFullYear());
	const [currentDay, SetCurrentDay] = useState(new Date().getDate());

	useEffect(() => {
		gapi.load('client:auth2', () => {
			console.log('loaded client')
			gapi.client.init({
				apiKey: API_KEY,
				clientId: CLIENT_ID,
				discoveryDocs: DISCOVERY_DOCS,
				scope: SCOPES,
			})
			gapi.client.load('calendar', 'v3', () => console.log('bam!'))
		});
	});
	const changeFormatTime = (e: any) => {
		SetUnitTime(e?.target.value);
	};

	const ChangeTime = (e: any) => {
		let date = e?.target.value;
		let month = '', year = '', day = '';
		for (let i: number = 0; i < date.length; i++) {
			if (i < 4) {
				year += date[i];
			} else if (i > 5 && i < 7) {
				month += date[i];
			} else if (i > 7) {
				day += date[i];
			}
		}
		SetCurrentDay(Number(day));
		SetCurrentMonth(Number(month));
		SetCurrentYear(Number(year));
	};
	return (

		<div className="rootElement">
			<header>
				<section className='header'>
					<ConnectCalApp />
				</section>
				<section className='func-area'>
					<AddEvent gapi={gapi}
						change={changeFormatTime}
						format={unitTime} />
					<SetTime day={currentDay}
						month={currentMonth}
						year={currentYear}
						handler={ChangeTime}
					/>

				</section>
			</header>
			<main className='calendar-area '>
				<Table formatTime={unitTime} month={currentMonth}
					year={currentYear} />
			</main>
			<footer className='lower'>

			</footer>
		</div>
	);
}


