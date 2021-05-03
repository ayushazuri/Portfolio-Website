import React from "react";
import styled from "styled-components";

const ProgressBar = ({ bgColor, progress }) => {
	// const [value, setValue] = React.useState(0);
	// React.useEffect(() => {
	// 	setTimeout(() => {
	// 		setValue(progress);
	// 	}, 2000);
	// }, [progress]);
	const ProgressContainer = styled.div`
		height: 20px;
		width: 100%;
		background-color: #e0e0de;
		border-radius: 50px;
		margin: 10px;
	`;
	const ProgressFiller = styled.div`
		height: 100%;
		width: ${progress};
		background-color: ${bgColor};
		border-radius: inherit;
		text-align: right;
		/* transition: width 5s ease-in-out;
		transition-delay: 0.5s; */
	`;

	const ProgressLabel = styled.span`
		/* padding: 5;
		color: white;
		/* font-weight: bold; */
	`;

	return (
		<ProgressContainer>
			<ProgressFiller>
				<ProgressLabel>{progress}</ProgressLabel>
			</ProgressFiller>
		</ProgressContainer>
	);
};

export default ProgressBar;
