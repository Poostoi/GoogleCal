export const LastDay = (date: string) => {
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