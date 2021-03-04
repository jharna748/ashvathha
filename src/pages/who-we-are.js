import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Text, Strong, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Menu, Section, StackItem, Stack } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"who-we-are"} />
		<Helmet>
			<title>
				Ashvattha
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Image
					width="64px"
					height="64px"
					src="https://uploads.quarkly.io/602771fdbfd603001f71d847/images/ASHVATTHA%20Logo%20not%20curved(use%20only%20for%20editing%20text).jpg?v=2021-02-16T06:18:08.698Z"
					min-width="256px"
					min-height="256px"
				/>
				<Menu
					display="flex"
					justify-content="center"
					font="--base"
					font-weight="700"
					md-flex-direction="column"
					md-align-items="center"
				>
					<Override
						slot="link"
						text-decoration="none"
						color="--dark"
						padding="6px 12px"
						active-color="#d18f41"
						visited-color="#d18f41"
						link-color="#d18f41"
					/>
					<Override slot="link-active" color="--primary" />
					<Override slot="item" padding="6px" />
					<Override slot="link-index">
						home
					</Override>
					<Override slot="link-who-we-are">
						who we are
					</Override>
					<Override slot="item-404" display="none" />
				</Menu>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text
				as="h2"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0 0 0"
				color="#5d3b16"
			>
				who we are
			</Text>
			<Text as="p" font="normal 300 20px/1.5 --fontFamily-googleMontserrat" margin="20px 0 0 0">
				<Strong>
					<Strong>
						Like the roots of our beloved Peepal tree play a foundational role in nurturing its ever-growing foliage, we are supported by a network of passionate and determined individuals who share our purpose, values and educational philosophy. These cultivators come from diverse educational and professional backgrounds and contribute to Ashvattha in varying capacities. Each cultivator’s commitment and efforts are instrumental in our journey to transform teacher education in India.
					</Strong>
				</Strong>
				{"\n\n"}
			</Text>
			<Button font="--lead" margin="20px" background="#d18f41">
				what we do
			</Button>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text
				as="h2"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0 0 0"
				color="#5d3b16"
			>
				RNDC Mittal Foundation
			</Text>
			<Text as="p" font="normal 300 20px/1.5 --fontFamily-googleMontserrat" margin="20px 0 0 0">
				<Strong>
					Ashvattha is an initiative by RDNC Mittal Foundation, a trust set-up in 2010 in Alwar (Raj.) with the aim of contributing to the field of education, health and environment.{" "}
					<br />
					<br />
					In the past, RDNC adopted 3 schools in Alwar district under project Ekta and launched project Ehsas for infrastructure improvement and capacity building of 7 Anganwadis. Their work has been recognized by the state government consecutively for 5 years through Bhamashah Awards.
					<br />
					<br />
					RDNC also operates a subsidised clinic and diagnostic center at Maujpur (Alwar) and regularly conducts medical camps and diagnostic drives. Additionally, RDNC conducts the annual Alwar Gaurav Awards to felicitate Alwarites from diverse walks of life (including education and sports) and inspire others to strive for achieving new heights.
				</Strong>
				<br />
				{"\n\n"}
			</Text>
		</Section>
		<Section
			padding="64px 0 64px 0"
			sm-padding="40px 0"
			font="--base"
			color="--dark"
			position="static"
			left="22px"
			text-align="left"
			white-space="normal"
			overflow-x="visible"
		>
			<Text
				as="h1"
				font="normal 900 72px/1.2 --fontFamily-googleMontserrat"
				md-font="--headline2"
				max-width="520px"
				margin="0 auto 5px auto"
				text-align="center"
				color="#5d3b16"
				display="block"
			>
				team
			</Text>
			<Stack margin-top="40px">
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://uploads.quarkly.io/602771fdbfd603001f71d847/images/Arushi.jpg?v=2021-02-27T07:26:47.530Z) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						founder
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Arushi
					</Text>
					<Text as="p" margin="20px 0 5px 0" font="300 12px/24px --fontFamily-googleMontserrat">
						<Strong
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Arushi is eternally fascinated by humans and humanity, and strives to create spaces for mutual learning and for collective evolution. Brought up in Rajasthan, and in love with this land of colorful mirages, Arushi has previously co-founded two social enterprises, with a focus on gender education and rural development, respectively. She has also worked with organizations like Cuemath, Sir Ratan Tata Trust, Centre for Science and Environment and Be! Fund. Keen conversationalist and compulsive chai drinker, she is an alumnus of Harvard GSE and IIT Delhi and a trustee at the RDNC Mittal Foundation.
							<br />
							<br />
							<br />
							Words: Curious, Feminist, Nature lover
						</Strong>
						<br />
						{"\n\n"}
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://uploads.quarkly.io/602771fdbfd603001f71d847/images/Diksha%20K.jpg?v=2021-02-27T07:27:58.553Z) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						friends of ashvattha
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Diksha{" "}
					</Text>
					<Text as="p" margin="20px 0 5px 0" font="300 12px/24px --fontFamily-googleMontserrat">
						<Strong
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Diksha is passionate about exploring ways to engage young children to understand their thinking. She loves to design experiences for young learners where they have the scope to think, ideate and create in their own ways. She believes in honouring the children's voice and learning with them while being in the classroom. She hopes to empower teachers to think out of the box and design authentic experiences for the children, be present in the process to see the magic unfold in the classroom. She has done her Masters in Education from Tata Institute of Social Science (TISS). In her free time, you would see her reading a book or looking at the sky.{" "}
						</Strong>
						{"\n\n"}
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://uploads.quarkly.io/602771fdbfd603001f71d847/images/apoorva.JPG?v=2021-02-27T07:28:29.626Z) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						friends of ashvattha
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Apoorva
					</Text>
					<Text as="p" margin="20px 0 5px 0" font="300 12px/24px --fontFamily-googleMontserrat">
						<Strong>
							Apoorva loves to contemplate on education philosophy, go on nature walks, play with children, travel, read, meditate, watch the night sky! A new world opened up before her when she left her corporate job as a marketer and decided to spend a few years in a small village in Himachal Pradesh. She experienced a new life in the mountains and lived closer to nature than ever before. In Himachal, she worked with Aavishkaar where she learnt about alternate, much more engaging methods to teach Math and Science to school students. She has also worked  with a Delhi based organization Joy of Learning Foundation where she trained many Math and Science teachers from across the country.{" "}
						</Strong>
						<br />
						{"\n\n"}
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="64px 0" sm-padding="40px 0" font="--base" color="--dark">
			<Stack margin-top="40px">
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://uploads.quarkly.io/602771fdbfd603001f71d847/images/Palak.jpg?v=2021-02-27T07:31:53.968Z) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						friends of ashvattha
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Palak
					</Text>
					<Text as="p" margin="20px 0 5px 0" font="300 12px/24px --fontFamily-googleMontserrat">
						<Strong>
							Palak is a passionate educator who believes that  each child should have access to a high quality education and strives to achieve this by coaching and empowering teachers in government schools and budget private schools. She is a Teach for India fellow who has worked with students and teachers in both urban and rural schools in different states of India. She has done her Masters in Educational Leadership from the University of Manchester, while on the UK government's Chevening scholarship. She is currently working as an Academic Excellence Manager at LEAD School. In her free time, you will find her with her Kindle and chai, ready to tell you why Harry Potter is the best thing ever!{" "}
						</Strong>
						{"\n\n"}
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://uploads.quarkly.io/602771fdbfd603001f71d847/images/Suhani.jpg?v=2021-02-27T07:32:22.879Z) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						friends of ashvattha
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Suhani
					</Text>
					<Text as="p" margin="20px 0 5px 0" font="300 12px/24px --fontFamily-googleMontserrat">
						<Strong>
							Suhani is a conscious, compassionate, & creative leader with over 5 years of experience in the education sector. Her ever evolving core commitment is to design and facilitate experiences to empower individuals and groups to unleash their potential; and build strong relationships with them towards a just, equitable, holistic way of living. She is a Teach For India Fellow and has also worked on the staff team for 4 years. She is currently working as Curriculum Manager at Global School Leaders. Suhani loves reading, experimenting in the kitchen, creating art and exploring new places with her family and friends.{" "}
						</Strong>
						{"\n\n"}
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://uploads.quarkly.io/602771fdbfd603001f71d847/images/JB%20full%20length[1].png?v=2021-02-27T07:29:52.651Z) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						friends of ashvattha
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Jayanti
					</Text>
					<Text as="p" margin="20px 0 5px 0" font="300 12px/24px --fontFamily-googleMontserrat">
						<Strong>
							Jayanti is passionate about Social and Emotional Learning (SEL) or the whole child development to prepare children for facing the unknown. She believes that teachers are at the heart of this work and are the drivers of successful education systems. It is this belief and desire to empower teachers that has made her join the Ashvattha mission. She is a graduate of the Ed.M. International Education Policy program from the Harvard Graduate School of Education (HGSE) and is currently working as an Education Specialist Consultant with the World Bank. Jayanti loves spending time with her family, playing foosball and board games, practicing meditation, and exploring new places and adventures.{" "}
						</Strong>
						{"\n\n"}
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});