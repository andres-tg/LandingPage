import React from "react";
import { Jumbotron, Button } from "react-boostrap";

export const JumbotronE = () => {
	return (
		<>
			<Jumbotron>
				<h1>Bienvenido :)</h1>
				<p>
					This is a simple hero unit, a simple jumbotron-style
					component for calling extra attention to featured content or
					information.
				</p>
				<p>
					<Button variant="primary">¡Vamos a ello!</Button>
				</p>
			</Jumbotron>
		</>
	);
};
