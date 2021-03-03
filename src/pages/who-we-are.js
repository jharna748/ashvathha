import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Text, Strong, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Menu, Section, StackItem, Stack } from "@quarkly/components";
import { MdArrowDownward } from "react-icons/md";
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
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px 0px 8px 0px"
			/>
			<Stack color="--grey" font="--base">
				<StackItem width="50%" md-width="100%">
					<Text
						as="h1"
						margin="0px"
						font="--headline1"
						md-font="--headline2"
						color="--dark"
						max-width="850px"
					>
						Who we are
					</Text>
				</StackItem>
				<StackItem width="50%" md-width="100%">
					<Text margin="0px">
						<Strong>
							In the living-breathing forests of society, educators are like trees facilitating fruits of learning. Ashvattha, i.e. peepal tree, represents an educator with deep roots - of understanding educational purpose, philosophy and pedagogies, and with large foliage - creating inclusive and meaningful learning experiences.
							<br />
							<br />
							We, at Ashvattha Learning Communities, are cultivators committed to nurture these carriers of knowledge and learning.
						</Strong>
						{"\n\n"}
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section
			background="linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%),--color-darkL2 url(https://uploads.quarkly.io/602771fdbfd603001f71d847/images/evolve%20leaves.jpg?v=2021-02-28T05:19:01.812Z) center/cover"
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
		>
			<Stack font="300 16px/24px monteserrat">
				<StackItem width="75%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text color="--lightD2" letter-spacing="1px" text-transform="uppercase" margin="0">
						vision
					</Text>
					<Text as="h1" font="normal 900 72px/1.2 --fontFamily-googleMontserrat" md-font="--headline2" margin="10px 0">
						all educators evolve to rediscover learning  and reimagine education.
					</Text>
				</StackItem>
			</Stack>
			<Box text-align="center" margin="96px 0 0 0">
				<Text margin="8px 0" text-transform="uppercase">
					Who we are
				</Text>
				<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
			</Box>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px"
			>
				mission
			</Text>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="normal 900 72px/1.2 --fontFamily-googleMontserrat"
				md-font="--headline2"
				color="#D18f41"
				max-width="850px"
			>
				why evolve, rediscover and reimagine?
			</Text>
			<Stack margin-top="auto" color="--grey" font="--base">
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px" font="300 16px/24px --fontFamily-googleMontserrat">
						<Strong
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Why evolve?{" "}
						</Strong>
						Being a good educator is a lifelong pursuit that requires humble reflection and continuous growth{"\n\n"}
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px" font="300 16px/24px --fontFamily-googleMontserrat">
						<Strong
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Why rediscover learning?{" "}
						</Strong>
						Foremost, educators have to connect with their intrinsic motivation to learn, if they are to inspire learning amongst others{"\n\n"}
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px" font="300 16px/24px --fontFamily-googleMontserrat">
						<Strong
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Why reimagine education?
						</Strong>
						{" "}
						<br />
						Our ultimate dream is that there are new ways of learning-teaching, and organizing the process of knowledge creation and transmission{"\n\n"}
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="#d18f41"
				margin="0px"
			>
				values
			</Text>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--headline1"
				md-font="--headline2"
				color="#5d4b16"
				max-width="850px"
			>
				integrity
				<br />
				reflection
				<br />
				collaboration
				<br />
				equity
				<br />
				joy
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