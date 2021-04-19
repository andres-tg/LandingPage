import React from "react";
import { JunbotronE } from "./JunbotronE.jsx";
import { Cards } from "./Cards.jsx";
import { Navbarr } from "./Navbarr.jsx";
import { Footerr } from "./Footerr.jsx";

//Components

export function home() {
	return (
		<>
			<Navbarr />
				<div className= "container">
					<JunbotronE />
					<Cards />
				</div>
			<Footerr />
		</>
	)
}
