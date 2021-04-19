import React from "react";
import { Card, CardGroup, Button } from "react-boostrap";

export const Cards = () => {
	return (
		<CardDeck>
			<Card style={{ Width: "18rem" }}>
				<Card.Img variant="top" src="https://blog.grupo-pya.com/wp-content/uploads/2016/09/comunicacion-verbal-y-no-verbal-1024x682.jpg" />
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
				<Card.Img variant="top" src="https://concepto.de/wp-content/uploads/2019/10/estrategia-e1571709176315-800x399.jpg" />
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
				<Card.Img variant="top" src="https://www.ealde.es/wp-content/uploads/2017/07/gestion-de-riesgos-auditoria-1024x452.jpg" />
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
				<Card.Img variant="top" src="https://leadsfac.com/wp-content/uploads/2020/02/objetivos-generales-y-objetivos-especificos-og.jpg.webp" />
				<Card.Body>
					<Card.Title>Arte Operacional</Card.Title>
					<Card.Text>
						{`Some quick example text to build on the card title and make up the bulk of
                    the cards content.`}
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		</CardDeck>
	);
};
