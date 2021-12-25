
declare global { interface Window { gapi: any; } };


export const ConnectCalApp = () => {
	const gapi = window.gapi;
	const authSignIn = () => {
		gapi.auth2.getAuthInstance().signIn();
	}
	const authSignOut = () => {
		gapi.auth2.getAuthInstance().signOut();
	}


	return (
		<>
			<button type="button" className="btn btn-warning w-25 text-light" onClick={authSignIn}>Sign In</button>
			<button type="button" className="btn btn-warning w-25 text-light" onClick={authSignOut}>Sign Out</button>
		</>
	)

}