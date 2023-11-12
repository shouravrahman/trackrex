import React from "react";
import {
	Html,
	Body,
	Container,
	Text,
	Link,
	Preview,
} from "@react-email/components";

const Welcome = ({ name }: { name: string }) => {
	return (
		<Html>
			<Preview>Welcome aboard!</Preview>
			<Body>
				<Container>
					<Text>Hello {name}</Text>
				</Container>
			</Body>
		</Html>
	);
};

export default Welcome;
