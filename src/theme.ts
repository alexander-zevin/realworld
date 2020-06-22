import {createMuiTheme, Theme} from "@material-ui/core";
import {green, blueGrey, grey} from "@material-ui/core/colors";

const theme: Theme = createMuiTheme({
	palette: {
		primary: {
			main: green[500]
		},
			secondary: {
				main: blueGrey[50]
			}
	},
	typography: {
		button: {
			textTransform: 'none'
		},
		subtitle2: {
			fontSize: '1em',
			fontWeight: 'normal',
			color: grey[600]
		}
	}
});

export default theme