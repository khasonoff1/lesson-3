import { Component } from "react";
import { Container } from "react-bootstrap";

export class Footer extends Component {
    render() {
        return (
            <footer className="text-center p-3">
                <Container>
                    <footer>Powered by Kameron</footer>
                </Container>
            </footer>
        );
    }
}

export default Footer;
