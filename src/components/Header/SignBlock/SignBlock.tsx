import React from 'react'
import {StyledButton, StyledLink} from "../../common/styles";

const SignBlock = () => {
		return (
				<>
						<StyledLink to="/signin">
								<StyledButton>Sign in</StyledButton>
						</StyledLink>
						<StyledLink to="/signup">
								<StyledButton>Sign up</StyledButton>
						</StyledLink>
				</>
		)
}

export default SignBlock
