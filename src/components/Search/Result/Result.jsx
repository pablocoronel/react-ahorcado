import React from 'react';
import { Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Result.css';

const Result = (props) => {
	console.log(props);
	if (props.artistName === null) {
		return null;
	}

	return (
		<Row>
			<Col xs={12} md={{ span: 4, offset: 4 }} id="resultados">
				<Row id='title'>
					<Col>{props.artistName}</Col>
				</Row>

				{props.artistImage !== null && (
					<div>
						<Row id='image'>
							<Col>
								<Image
									src={props.artistImage}
									thumbnail
									alt={props.artistName}
								/>
							</Col>
						</Row>

						<Row id='play'>
							<Col>
								<Link to="/game">
									<Button variant="success" renderas="button">
										<span>Jugar!</span>
									</Button>
								</Link>
							</Col>
						</Row>
					</div>
				)}
			</Col>
		</Row>
	);
};

export default Result;
