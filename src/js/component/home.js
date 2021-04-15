import React from "react";
import { Navbarr } from "./Navbarr.jsx";
import { Cards } from "./Cards.jsx";
import { Footerr } from "./Footerr.jsx";
import { JunbotronE } from "./JunbotronE.jsx";

//Components

export function home() {
	return (
		<>
			<Navbarr />
			<Cards />
			<Footerr />
			<JunbotronE />
		</>
	);
}
