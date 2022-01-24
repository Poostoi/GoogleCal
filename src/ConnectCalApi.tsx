export const ConnectCalApp = () => {
	const gapi = window.gapi;
	const authSignIn = () => {
		gapi.auth2.getAuthInstance().signIn();
	}
	const authSignOut = () => {
		gapi.auth2.getAuthInstance().signOut();
	}


	return (
		<div className="row col-lg-10 col-md-12 justify-content-end">
			<div className="col-lg-6 col-12 mb-2">
				<h1 className="fst-italic text-center  me-2">Your Calendar</h1>
			</div>
			<div className="col-lg-3 col-12 mb-2">
				<button type="button" className="col-12 btn btn-dark text-light me-2	 " onClick={authSignIn}>Sign In</button>
			</div>
			<div className="col-lg-3 col-12 mb-2">
				<button type="button" className=" col-12 btn btn-dark text-light me-2	" onClick={authSignOut}>Sign Out</button>
			</div>
		</div>
	)

}