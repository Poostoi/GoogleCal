import { ConnectCalApp } from './ConnectCalApi'
import { useEffect } from 'react';
import { Main } from './Main';
declare global { interface Window { gapi: any; } };

const gapi = window.gapi;
const CLIENT_ID = "27694278166-iu0inkqgjkd180sohl6s1j2k3lsathqn.apps.googleusercontent.com";
const API_KEY = "AIzaSyCO2Ejs1wopEcIVvWgsvtUR3j7t813iSSo"
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
const SCOPES = "https://www.googleapis.com/auth/calendar.events"

export const App = () => {
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

	return (

		<div className="rootElement">
			<header>
				<section className='header'>
					<ConnectCalApp />
				</section>
			</header>
			<Main />
			<footer className='lower'>

			</footer>
		</div>
	);
}


