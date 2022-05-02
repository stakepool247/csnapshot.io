import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import { alpha } from '@mui/material/styles'
import { Link, useLocation } from 'react-router-dom'
import { badge } from '../common/styles'
import { useState } from 'react'
import { pages } from '../../helper/common'

export default function Navbar() {
	const [drawer, setdrawer] = useState(false)
	const toggledrawer = () => setdrawer(v => !v)
	const location = useLocation()
	const pathName = location.pathname

	return (
		<AppBar
			sx={{ bgcolor: 'common.white', boxShadow: '0 1px 4px rgb(0 0 0 /10%)' }}
			component="nav"
			elevation={0}
			position="sticky"
		>
			<Container maxWidth="xl">
				<Toolbar
					sx={{
						bgcolor: 'common.white',
						py: { xs: 1.5, md: 3 },
						px: '0 !important',
					}}
				>
					<Box sx={{ flexGrow: 1 }}>
						<Link to="/">
							<Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
								<Box
									component="img"
									sx={{ width: { xs: 30, md: 40 }, height: { xs: 30, md: 40 } }}
									src="/images/driver.svg"
									alt="driver"
								/>
								<Typography component="span" variant="h2" color="common.black">
									cSnapshots.io
								</Typography>
							</Stack>
						</Link>
					</Box>
					<Box sx={{ display: { xs: 'block', md: 'none' } }}>
						<IconButton onClick={toggledrawer}>
							<MenuIcon />
						</IconButton>
						<Drawer open={drawer} anchor="left" onClose={toggledrawer}>
							<Stack
								spacing={1}
								sx={{
									maxWidth: 260,
									height: '100%',
									justifyContent: 'space-between',
								}}
							>
								<Box>
									<Stack
										direction="row"
										spacing={1}
										sx={{
											p: 2,
											alignItems: 'center',
											justifyContent: 'space-between',
										}}
									>
										<Link to="/">
											<img
												width="180"
												src="/images/Graph_Text_Subtext 1.png"
												alt="LOGO"
											/>
										</Link>
										<div>
											<IconButton onClick={toggledrawer}>
												<CloseIcon />
											</IconButton>
										</div>
									</Stack>
									<Divider />
									<Stack
										direction={{ xs: 'column', md: 'row' }}
										spacing={{ xs: 3, md: 5 }}
										component="ul"
										sx={{
											listStyle: 'none',
											pl: { xs: 3, md: 5 },
											pr: { xs: 5, md: 0 },
										}}
									>
										{pages.map(({ id, name, url }) => (
											<Box
												component="li"
												key={id}
												sx={{
													px: 0,
													minWidth: { xs: 200, md: 'auto' },
												}}
											>
												<Link to={url} onClick={toggledrawer}>
													<Box
														sx={{
															...badge,
															opacity: url === pathName ? '1' : '0',
														}}
														component="span"
													/>
													<Typography
														component="span"
														sx={{
															color:
																pathName === url
																	? 'primary.main'
																	: 'text.primary',
															'&:hover': {
																color: 'primary.main',
															},
														}}
													>
														{name}
													</Typography>
												</Link>
											</Box>
										))}
									</Stack>
								</Box>
								<Box>
									<Typography
										sx={{
											color: theme => alpha(theme.palette.text.primary, 0.5),
											p: 2,
										}}
									>
										Check out our StakePool247.io managed Cardano Stake Pool
										service: safe, affordable stake pool management.
									</Typography>
								</Box>
							</Stack>
						</Drawer>
					</Box>
					<Box sx={{ display: { xs: 'none', md: 'block' } }}>
						<Stack
							direction="row"
							spacing={5}
							component="ul"
							sx={{ listStyle: 'none' }}
						>
							{pages.map(({ id, name, url }) => (
								<Box component="li" key={id}>
									<Link to={url}>
										{url === pathName && (
											<Box sx={{ ...badge }} component="span" />
										)}
										<Typography
											component="span"
											sx={{
												color:
													pathName === url
														? 'primary.main'
														: 'text.primary',
												'&:hover': {
													color: 'primary.main',
												},
											}}
										>
											{name}
										</Typography>
									</Link>
								</Box>
							))}
						</Stack>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
