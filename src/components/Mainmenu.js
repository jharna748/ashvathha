import React from "react";
import { useOverrides, Override, Menu } from "@quarkly/components";
const defaultProps = {
	"display": "flex",
	"justify-content": "center",
	"font": "--base",
	"font-weight": "700",
	"md-flex-direction": "column",
	"md-align-items": "center"
};
const overrides = {};

const Mainmenu = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Menu {...rest}>
		<Override slot="link" text-decoration="none" color="--dark" padding="6px 12px" />
		<Override slot="link-active" color="--primary" />
		<Override slot="item" padding="6px" />
		<Override slot="link-index">
			home
		</Override>
		<Override slot="link-404">
			rdnc mittal foundation
		</Override>
		{children}
	</Menu>;
};

Object.assign(Mainmenu, { ...Menu,
	defaultProps,
	overrides
});
export default Mainmenu;