import React, { useEffect, useState } from 'react';
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
			<button style={{ width: 100, height: 50 }} onClick={authSignIn}>Sign In</button>
			<button style={{ width: 100, height: 50 }} onClick={authSignOut}>Sign Out</button>
		</>
	)

}