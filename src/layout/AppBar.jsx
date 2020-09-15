import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';

function Appbar() {
	return (
		<AppBar>
			<ToolBar>
				<Typography variant="h6">
					Rick and Morty Characters
        </Typography>
			</ToolBar>
		</AppBar>
	)
}

export default Appbar;