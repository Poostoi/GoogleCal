import { useEffect, useRef } from 'react';
interface IProps {
	events: any;
}
interface IEvents {
	start: any;
	end: any;
	summary: string;
	description: string;
}

export const Day = ({ events }: IProps) => {
	const arr = [
		useRef<any>(),
		useRef<any>(),
		useRef<any>(),
		useRef<any>(),
		useRef<any>(),
		useRef<any>(),
		useRef<any>(),
		useRef<any>(),
		useRef<any>(),
		useRef<any>(),
		useRef<any>(),
		useRef<any>()
	]

	useEffect(() => {
		for (let i = 0; i <= 11; i++) {
			arr[i].current.innerHTML = '';
		}

		if (events !== null) {
			events.map((e: IEvents) => {
				let start = Math.round((e.start.dateTime[11] + e.start.dateTime[12]) / 2);
				let end = Math.round((e.end.dateTime[11] + e.end.dateTime[12]) / 2);
				let summary = e.summary;
				let description = e.description;
				for (let i = start; i <= end; i++) {
					console.log(i);
					arr[i].current.innerHTML = 'Name event: ' + summary + ', Description: ' + description;
				}
			})
		}
	})

	return (
		//cN({ "eventClassName": arr[0].current.innerHTML !== '' ? true : false })
		<table className="day">
			<tbody>
				<tr><td className="col-1">00:00</td><td className='dayEvent' ref={arr[0]}></td></tr>
				<tr><td className="col-1">02:00</td><td className='dayEvent' ref={arr[1]}></td></tr>
				<tr><td className="col-1">04:00</td><td className='dayEvent' ref={arr[2]}></td></tr>
				<tr><td className="col-1">06:00</td><td className='dayEvent' ref={arr[3]}></td></tr>
				<tr><td className="col-1">08:00</td><td className='dayEvent' ref={arr[4]}></td></tr>
				<tr><td className="col-1">10:00</td><td className='dayEvent' ref={arr[5]}></td></tr>
				<tr><td className="col-1">12:00</td><td className='dayEvent' ref={arr[6]}></td></tr>
				<tr><td className="col-1">14:00</td><td className='dayEvent' ref={arr[7]}></td></tr>
				<tr><td className="col-1">16:00</td><td className='dayEvent' ref={arr[8]}></td></tr>
				<tr><td className="col-1">18:00</td><td className='dayEvent' ref={arr[9]}></td></tr>
				<tr><td className="col-1">20:00</td><td className='dayEvent' ref={arr[10]}></td></tr>
				<tr><td className="col-1">22:00</td><td className='dayEvent' ref={arr[11]}></td></tr>
			</tbody>
		</table >
	)
}