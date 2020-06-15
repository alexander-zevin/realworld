import React from 'react'
import {StyledButton, StyledLink} from "../../common/styles";
import {IProfileState} from "../../../store/types/profileTypes";
import {useSelector} from "react-redux";
import {RootStateType} from "../../../store/store";

const AuthBlock = () => {

		const profileState: IProfileState = useSelector((state: RootStateType) => state.profile);

		return (
				<>
						<StyledLink to="/editor">
								<StyledButton>New Article</StyledButton>
						</StyledLink>
						<StyledLink to="/settings">
								<StyledButton>Settings</StyledButton>
						</StyledLink>
						<StyledLink to="/profiles/:username">
								<StyledButton>{profileState.user.username}</StyledButton>
						</StyledLink>
				</>
		)
}

export default AuthBlock
