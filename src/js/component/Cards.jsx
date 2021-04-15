import React from "react";
import { Card, CardGroup, Button } from "react-boostrap";

export const Cards = () => {
	return (
		<CardGroup>
			<Card style={{ Width: "18rem" }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Comunicación</Card.Title>
					<Card.Text>
						{`Some quick example text to build on the card title and make up the bulk of
                    the cards content.`}
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
			<Card style={{ Width: "18rem" }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Estrategia</Card.Title>
					<Card.Text>
						{`Some quick example text to build on the card title and make up the bulk of
                    the cards content.`}
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
			<Card style={{ Width: "18rem" }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Táctica</Card.Title>
					<Card.Text>
						{`Some quick example text to build on the card title and make up the bulk of
                    the cards content.`}
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
			<Card style={{ Width: "18rem" }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Arte Operacional</Card.Title>
					<Card.Text>
						{`Some quick example text to build on the card title and make up the bulk of
                    the cards content.`}
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		</CardGroup>
	);
};
