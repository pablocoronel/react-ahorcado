import React from 'react';
import { Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Result.css';
import Context from '../../../context/context';

const Result = (props) => {
	if (props.artist.name === null) {
		return null;
	}

	return (
		<Context.Consumer>
			{(context) => {
				return (
					<Row>
						<Col
							xs={12}
							md={{ span: 4, offset: 4 }}
							id="resultados"
						>
							<Row id="title">
								<Col>{props.artist.name}</Col>
							</Row>

							{props.artist.image !== null && (
								<div>
									<Row id="image">
										<Col>
											<Image
												src={props.artist.image}
												thumbnail
												alt={props.artist.name}
											/>
										</Col>
									</Row>

									<Row id="play">
										<Col>
											<Link to="/game">
												<Button
													variant="success"
													renderas="button"
													onClick={() =>
														context.updateIdArtist(
															props.artist.id
														)
													}
												>
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
			}}
		</Context.Consumer>
	);
};

export default Result;
