import './globals.css'
import Navigation from '@/components/navigation'
import { Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Inter } from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export default function RootLayout({ children }) {
	return (
		<html>
			<body className={inter.className}>
				<Navigation />
				<Container className="container" style={{minHeight: '95vh', paddingTop: '60px'}}>
					<Row style={{margin: '20px 0', height: '100%'}}>
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
