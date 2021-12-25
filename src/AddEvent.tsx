//declare global { interface Window { gapi: any; } };

interface IProps {
	gapi: any;
}
export const AddEvent = ({ gapi }: IProps) => {

	const addEvent = () => {

		var event = {
			'summary': 'Example',
			'description': 'A chance to hear more about Google\'s developer products.',
			'start': {
				'dateTime': '2021-12-25T09:00:00-07:00',
				'timeZone': 'America/Los_Angeles'
			},
			'end': {
				'dateTime': '2021-12-25T16:00:00-07:00',
				'timeZone': 'America/Los_Angeles'
			},
			'recurrence': [
				'RRULE:FREQ=DAILY;COUNT=2'
			],
			'reminders': {
				'useDefault': false,
				'overrides': [
					{ 'method': 'email', 'minutes': 24 * 60 },
					{ 'method': 'popup', 'minutes': 10 }
				]
			}
		};

		var request = gapi.client.calendar.events.insert({
			'calendarId': 'primary',
			'resource': event
		});


	}
	return (
		<button onClick={addEvent}>Add Event</button>
	)
}