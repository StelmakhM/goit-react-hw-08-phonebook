import { Box, Button, IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/authOperations";
import { selectUserName } from "../../redux/auth/authSelectors";
import LogoutIcon from "@mui/icons-material/Logout";
export const UserMenu = () => {
	const dispatch = useDispatch();
	const userName = useSelector(selectUserName);

	return (
		<>
			<Typography
				variant="button"
				sx={{
					textTransform: "capitalize",
					fontSize: "1rem",
				}}
			>
				Welcome, {userName}
			</Typography>
			<Button
				onClick={() => dispatch(logOut())}
				color="inherit"
				endIcon={<LogoutIcon />}
			>
				<Typography
					variant="button"
					sx={{
						ml: "auto",
						textTransform: "capitalize",
						fontSize: "1rem",
					}}
				>
					Logout
				</Typography>
			</Button>
		</>
	);
};
