import { useState } from 'react'
import Background from '../../components/Background'
import Row from '../../components/Row'
import Col from '../../components/Col/'
import Title from '../../components/Title'
import Headshot from '../../photos/about-me-headshot.jpg'
import AI1 from '../../photos/AI Photos/1.png'
import AI2 from '../../photos/AI Photos/2.png'
import AI3 from '../../photos/AI Photos/3.png'
import AI4 from '../../photos/AI Photos/DALL·E 2023-02-14 17.16.07 - Joel Straley.png'
import AI5 from '../../photos/AI Photos/DALL·E 2023-02-14 17.16.28 - Joel Straley.png'
import AI6 from '../../photos/AI Photos/DALL·E 2023-02-14 17.17.01 - Joel Straley.png'
import AI7 from '../../photos/AI Photos/DALL·E 2023-02-14 17.17.25 - Joel Straley.png'
import AI8 from '../../photos/AI Photos/DALL·E 2023-02-14 17.17.30 - Joel Straley.png'
import AI9 from '../../photos/AI Photos/DALL·E 2023-02-14 17.17.49 - Joel Straley.png'

function About() {
	const [headshot, setHeadshot] = useState(Headshot)

	function getAIHeadshot() {
		let arr = [Headshot, AI1, AI2, AI3, AI4, AI5, AI6, AI7, AI8, AI9]
		let randomNum = Math.floor(Math.random() * 9) + 1
		setHeadshot(arr[randomNum])
	}

	function getInitialHeadshot() {
		setHeadshot(Headshot)
	}

	return (
		<Background className="row">
			<Row>
				<Col
					size="md-12"
					id="About">
					<div className="headline">
						<Title>About Me 🤵</Title>
					</div>
				</Col>
			</Row>
			<Row>
				<Col
					size="md-4"
					className="imgHeadshot">
					<img
						onMouseEnter={getAIHeadshot}
						onClick={getAIHeadshot}
						onMouseLeave={getInitialHeadshot}
						src={headshot}
						alt="Joel Straley Headshot"
						className="img-fluid rounded headshot"
					/>
					<span className="imgHeadshot--hover-text">
						(hover mouse to see AI versions of 'Joel Straley')
					</span>
				</Col>
				<Col size="md-8">
					<div id="about">
						<p>
							Hey, I'm Joel.
							<br />
							<br />
							<div className="new-line"></div>
							I'm a Fullstack Web Developer with 1.5 years of professional
							experience using the frameworks React and Laravel with Javascript
							and PHP to write, update and deploy code to production.
							<div className="new-line"></div>
							<br />
							My previous role was at Refersion, an enterprise-level (60k+
							users) Affiliate Marketing Management app, developing and
							maintaining a reusable and responsive component library to create
							scalable single page applications. I've worked in an Agile (Scrum)
							environment with a high-performing team that consistently exceeded
							sprint goals, often completing projects before deadlines and under
							budget.
							<div className="new-line"></div>
							<br />
							Before learning to code, my experience has been in operational
							logistics in fast-paced environments. I worked as an Operations
							Specialist for Uber for 6+ years and spent the 2020 pandemic
							working with The Migrant Kitchen to build a dynamic logistics
							strategy to deliver 1,000 meals a day, six days a week to NYC
							residents across all 5 boroughs.
							<div className="new-line"></div>
							<br />
							Outside of work, I've been involved in Improv and Sketch comedy
							for 10+ years in NYC and enjoy making short films.
							<br />
						</p>
						<br></br>
					</div>
				</Col>
			</Row>
		</Background>
	)
}

export default About
