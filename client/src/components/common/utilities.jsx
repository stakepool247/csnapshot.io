import Skeleton from '@mui/material/Skeleton'

export const generatorSkeleton = () => {
	const onlyText = {
		text: <Skeleton width="100%" variant="text" />,
		skeleton: true,
	}
	const iconWithText = {
		icon: <Skeleton animation="wave" variant="circular" width={24} height={24} />,
		text: <Skeleton animation="wave" width="100%" variant="text" />,
		skeleton: true,
	}
	const mainSkeleton = [
		{
			id: Math.random(),
			...iconWithText,
		},
		{
			id: Math.random(),
			...onlyText,
		},
		{
			id: Math.random(),
			...iconWithText,
		},
		{
			id: Math.random(),
			...onlyText,
		},
	]
	let datam = []
	for (let i = 1; i <= 5; i++) {
		datam.push(mainSkeleton)
	}

	return datam
}
