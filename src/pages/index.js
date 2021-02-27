import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Text, Icon, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Section, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
import { MdArrowDownward } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
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
				<Image width="256px" height="256px" src="https://uploads.quarkly.io/602771fdbfd603001f71d847/images/ASHVATTHA%20Logo%20not%20curved(use%20only%20for%20editing%20text).jpg?v=2021-02-16T06:18:08.698Z" />
				<Components.Mainmenu>
					<Override slot="link-404">
						404
					</Override>
				</Components.Mainmenu>
			</Box>
		</Section>
		<Section
			background="--color-light url()"
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
		>
			<Override slot="SectionContent" background="rgba(0, 0, 0, 0) url() 0% 0% /auto repeat scroll padding-box" />
			<Stack>
				<StackItem width="75%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text color="--green" letter-spacing="1px" text-transform="uppercase" margin="0">
						nurturing compassionate and courageous educators
					</Text>
					<Text
						as="h1"
						font="--headline1"
						md-font="--headline2"
						margin="10px 0"
						color="#652900"
					>
						creating opportunities for pre-service teachers
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section
			background="linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%),--color-darkL2 url(https://uploads.quarkly.io/602771fdbfd603001f71d847/images/ashvattha.jpg?v=2021-02-27T12:26:04.790Z) center/cover"
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
		>
			<Stack>
				<StackItem width="75%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text color="--lightD2" letter-spacing="1px" text-transform="uppercase" margin="0">
						our values
					</Text>
					<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0">
						integrity
						<br />
						reflection
						<br />
						collaboration
						<br />
						equity
						<br />
						joy
						<br />
						<br />
					</Text>
				</StackItem>
			</Stack>
			<Box text-align="center" margin="96px 0 0 0">
				<Text margin="8px 0" text-transform="uppercase">
					why evolve?
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
				our mission
			</Text>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--headline1"
				md-font="--headline2"
				color="--dark"
				max-width="850px"
			>
				all educators evolve to rediscover learning & reimagine education
			</Text>
			<Stack margin-top="auto" color="--grey" font="--base">
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						<Strong>
							Why evolve?{" "}
						</Strong>
						Being a good educator is a lifelong pursuit that requires humble reflection and continuous growth{"\n\n"}
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						<Strong>
							Why rediscover learning?{" "}
						</Strong>
						Foremost, educators have to connect with their intrinsic motivation to learn, if they are to inspire learning amongst others{"\n\n"}
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						<Strong>
							Why reimagine education?
						</Strong>
						{" "}
						<br />
						Our ultimate dream is that there are new ways of learning-teaching, and organizing the process of knowledge creation and transmission{"\n\n"}
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake.
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
				color="--grey"
				margin="0px"
			/>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--headline1"
				md-font="--headline2"
				color="#d18f41"
				max-width="850px"
			>
				creating programs to support the holistic development of teachers in india
			</Text>
			<Stack margin-top="auto" color="--grey" font="--base">
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						We have designed a competency framework to support capacity building of pre-service teachers.{"\n\n"}
						<br />
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						Through a network of Teaching Learning Centers (TLC) and Community Learning Center (CLC), we connect pre-service teachers to meaningful and holistic learning experiences.{"\n\n"}
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						Based on our survey with 400+ pre-service and in-service teachers, we share some insights into teacher motivations and needs, and questions worth pondering.{"\n\n"}
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