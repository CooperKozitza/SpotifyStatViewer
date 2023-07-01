import './globals.css'
import Navigation from '@/components/navigation'
import { Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function RootLayout({ children }) {
	return (
		<html>
			<body className={inter.className}>
				<Navigation />
				<Container className="container" style={{minHeight: '90vh'}}>
					<Row>
						{children}
					</Row>
				</Container>
				<footer className="bg-dark text-light" style={{padding: '20px', textAlign: 'center', marginTop: '10px'}}>
					<a href="https://github.com/CooperKozitza">Created By Cooper Kozitza <FontAwesomeIcon icon={faGithub} /></a>
				</footer>
			</body>
		</html>
	)
}
