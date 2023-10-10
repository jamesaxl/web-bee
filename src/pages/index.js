import React from "react";
import theme from "theme";
import { Theme, Link, Image, Span, Text, Box, LinkBox, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			align-items="center"
			justify-content="center"
			align-content="flex-start"
			display="inline-block"
			padding="5px 0 5px 0"
			sm-height="100vh"
			md-display="grid"
		>
			<Override
				slot="SectionContent"
				max-width="400px"
				height="100vh"
				sm-justify-content="center"
				md-display="grid"
			/>
			<Box
				min-width="100px"
				min-height="100px"
				display="block"
				justify-content="space-between"
				lg-flex-direction="row"
				lg-min-height="30px"
				lg-margin="0px 0px 20p 0px"
				align-content="center"
				align-items="center"
			>
				<LinkBox
					lg-height="auto"
					lg-justify-content="space-around"
					lg-min-height="30px"
					align-content="center"
					display="flex"
					flex-direction="row"
					justify-content="space-around"
				>
					<Image
						src="https://uploads.quarkly.io/651293038bd7e600185ed610/images/logo-aca.png?v=2023-09-26T12:01:18.775Z"
						display="block"
						height="50px"
						srcSet="https://smartuploads.quarkly.io/651293038bd7e600185ed610/images/logo-aca.png?v=2023-09-26T12%3A01%3A18.775Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/651293038bd7e600185ed610/images/logo-aca.png?v=2023-09-26T12%3A01%3A18.775Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/651293038bd7e600185ed610/images/logo-aca.png?v=2023-09-26T12%3A01%3A18.775Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/651293038bd7e600185ed610/images/logo-aca.png?v=2023-09-26T12%3A01%3A18.775Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/651293038bd7e600185ed610/images/logo-aca.png?v=2023-09-26T12%3A01%3A18.775Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/651293038bd7e600185ed610/images/logo-aca.png?v=2023-09-26T12%3A01%3A18.775Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/651293038bd7e600185ed610/images/logo-aca.png?v=2023-09-26T12%3A01%3A18.775Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Box>
						<Text margin="0px 0px 0px 0px" font="--base">
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								14/
							</Span>
							25
						</Text>
					</Box>
				</LinkBox>
				<Box
					min-width="100px"
					min-height="8px"
					background="--color-lightD2"
					border-radius="4px"
					border-color="--color-primary"
					margin="10px 20px 0px 20px"
				>
					<Box min-height="8px" width="56%" background="--color-primary" border-radius="4px" />
				</Box>
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				text-align="center"
				md-font="10px sans-serif"
				lg-margin="15px 0px 0px 0px"
				md-height="auto"
			>
				<Text margin="0px 0px 0px 0px" font="--headline3" md-font="normal 900 25px/1.1 &quot;Montserrat&quot;, sans-serif" md-margin="10px 0px 0px 0px">
					Выберите компании или активы, которые вам интересны
				</Text>
			</Box>
			<Box
				sm-align-self="start"
				flex="0 1 auto"
				display="flex"
				flex-direction="row"
				overflow-x="visible"
				flex-wrap="wrap"
				justify-content="center"
			>
				{"  "}
				<Box
					width="fit-content"
					display="flex"
					align-items="center"
					background="--color-lightD2"
					border-radius="20px"
					height="auto"
					padding="10px 10px 10px 10px"
					className="companybutton"
					margin="5px 5px 5px 5px"
					pointer-events="auto"
					id="ms"
					onclick=""
				>
					<Image src="https://uploads.quarkly.io/651293038bd7e600185ed610/images/microsoft.svg?v=2023-09-29T13:14:23.019Z" display="block" margin="0px 7px 0px 0px" />
					<Text margin="0px 0px 0px 0px" font="700 14px --fontFamily-googleOpenSans">
						Microsoft
					</Text>
				</Box>
				<Box
					width="fit-content"
					display="flex"
					align-items="center"
					background="--color-lightD2"
					border-radius="20px"
					height="auto"
					padding="10px 10px 10px 10px"
					className="companybutton"
					margin="5px 5px 5px 5px"
				>
					<Image src="https://uploads.quarkly.io/651293038bd7e600185ed610/images/netflix.svg?v=2023-09-29T13:14:23.016Z" display="block" margin="0px 7px 0px 0px" />
					<Text margin="0px 0px 0px 0px" font="700 14px --fontFamily-googleOpenSans">
						Netflix
					</Text>
				</Box>
				<Box
					width="fit-content"
					display="flex"
					align-items="center"
					background="--color-lightD2"
					border-radius="20px"
					height="auto"
					padding="10px 10px 10px 10px"
					className="companybutton"
					margin="5px 5px 5px 5px"
				>
					<Image src="https://uploads.quarkly.io/651293038bd7e600185ed610/images/apple.svg?v=2023-09-29T13:14:23.013Z" display="block" margin="0px 7px 0px 0px" />
					<Text margin="0px 0px 0px 0px" font="700 14px --fontFamily-googleOpenSans">
						Apple
					</Text>
				</Box>
				<Box
					width="fit-content"
					display="flex"
					align-items="center"
					background="--color-lightD2"
					border-radius="20px"
					height="auto"
					padding="10px 10px 10px 10px"
					className="companybutton"
					margin="5px 5px 5px 5px"
				>
					<Image src="https://uploads.quarkly.io/651293038bd7e600185ed610/images/tesla.svg?v=2023-09-29T13:14:23.026Z" display="block" margin="0px 7px 0px 0px" />
					<Text margin="0px 0px 0px 0px" font="700 14px --fontFamily-googleOpenSans">
						Tesla
					</Text>
				</Box>
				<Box
					width="fit-content"
					display="flex"
					align-items="center"
					background="--color-lightD2"
					border-radius="20px"
					height="auto"
					padding="10px 10px 10px 10px"
					className="companybutton"
					margin="5px 5px 5px 5px"
				>
					<Image src="https://uploads.quarkly.io/651293038bd7e600185ed610/images/shell.svg?v=2023-09-29T13:14:23.019Z" display="block" margin="0px 7px 0px 0px" />
					<Text margin="0px 0px 0px 0px" font="700 14px --fontFamily-googleOpenSans">
						Shell
					</Text>
				</Box>
				<Box
					width="fit-content"
					display="flex"
					align-items="center"
					background="--color-lightD2"
					border-radius="20px"
					height="auto"
					padding="10px 10px 10px 10px"
					className="companybutton"
					margin="5px 5px 5px 5px"
				>
					<Image src="https://uploads.quarkly.io/651293038bd7e600185ed610/images/bitcoin.svg?v=2023-09-29T13:14:23.015Z" display="block" margin="0px 7px 0px 0px" />
					<Text margin="0px 0px 0px 0px" font="700 14px --fontFamily-googleOpenSans">
						Bitcoin
					</Text>
				</Box>
				<Box
					width="fit-content"
					display="flex"
					align-items="center"
					background="--color-lightD2"
					border-radius="20px"
					height="auto"
					padding="10px 10px 10px 10px"
					className="companybutton"
					margin="5px 5px 5px 5px"
				>
					<Image src="https://uploads.quarkly.io/651293038bd7e600185ed610/images/amazon.svg?v=2023-09-29T13:14:23.029Z" display="block" margin="0px 7px 0px 0px" />
					<Text margin="0px 0px 0px 0px" font="700 14px --fontFamily-googleOpenSans">
						Amazon
					</Text>
				</Box>
				<Box
					width="fit-content"
					display="flex"
					align-items="center"
					background="--color-lightD2"
					border-radius="20px"
					height="auto"
					padding="10px 10px 10px 10px"
					className="companybutton"
					margin="5px 5px 5px 5px"
				>
					<Image src="https://uploads.quarkly.io/651293038bd7e600185ed610/images/mcdonalds.svg?v=2023-09-29T13:24:25.664Z" display="block" margin="0px 7px 0px 0px" />
					<Text margin="0px 0px 0px 0px" font="700 14px --fontFamily-googleOpenSans">
						McDonalds
					</Text>
				</Box>
				<Box
					width="fit-content"
					display="flex"
					align-items="center"
					background="--color-lightD2"
					border-radius="20px"
					height="auto"
					padding="10px 10px 10px 10px"
					className="companybutton"
					margin="5px 5px 5px 5px"
				>
					<Image src="https://uploads.quarkly.io/651293038bd7e600185ed610/images/google.svg?v=2023-09-29T13:14:23.009Z" display="block" margin="0px 7px 0px 0px" />
					<Text margin="0px 0px 0px 0px" font="700 14px --fontFamily-googleOpenSans">
						Google
					</Text>
				</Box>
				<Box
					width="fit-content"
					display="flex"
					align-items="center"
					background="--color-lightD2"
					border-radius="20px"
					height="auto"
					padding="10px 10px 10px 10px"
					className="companybutton"
					margin="5px 5px 5px 5px"
				>
					<Image src="https://uploads.quarkly.io/651293038bd7e600185ed610/images/exxon.svg?v=2023-09-29T13:14:23.009Z" display="block" margin="0px 7px 0px 0px" />
					<Text margin="0px 0px 0px 0px" font="700 14px --fontFamily-googleOpenSans">
						Exxon
					</Text>
				</Box>
				<Box
					width="fit-content"
					display="flex"
					align-items="center"
					background="--color-lightD2"
					border-radius="20px"
					height="auto"
					padding="10px 10px 10px 10px"
					className="companybutton"
					margin="5px 5px 5px 5px"
				>
					<Image src="https://uploads.quarkly.io/651293038bd7e600185ed610/images/pfizer.svg?v=2023-09-29T13:14:23.011Z" display="block" margin="0px 7px 0px 0px" />
					<Text margin="0px 0px 0px 0px" font="700 14px --fontFamily-googleOpenSans">
						Pfizer
					</Text>
				</Box>
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				display="block"
				grid-template-columns="repeat(2, 1fr)"
				margin="30px 0px 0px 0px"
				md-height="110px"
				md-margin="0px 0px 0px 0px"
				sm-height="130px"
			>
				<LinkBox
					min-width="100px"
					lg-text-align="center"
					lg-display="grid"
					lg-justify-items="center"
					lg-align-items="end"
					display="flex"
					justify-items="start"
					align-items="center"
					sm-height="60px"
					background="--color-primary"
					border-radius="20px"
					margin="5px 5px 5px 5px"
					width="100%"
					justify-content="start"
					flex-direction="row"
					color="--light"
					href="/m2s15"
				>
					<Text
						margin="20px 10px 20px 10px"
						font="--headline3"
						text-align="center"
						sm-font="normal 800 13px/1.2 &quot;Montserrat&quot;, sans-serif"
						display="block"
						width="100%"
					>
						Далее
					</Text>
				</LinkBox>
			</Box>
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
		<RawHtml>
			<style place={"endOfHead"} rawKey={"652510ac47aa25001fafe67a"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});