import {createMuiTheme, Theme} from "@material-ui/core";
import {green} from "@material-ui/core/colors";

const theme: Theme = createMuiTheme({
	palette: {
		primary: {
			main: green[500]
		}
	},
	typography: {
		button: {
			textTransform: 'none'
		}
	}
});

export default theme