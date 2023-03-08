import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { CssBaseline, Typography } from '@mui/material'
import { Chats } from '@/views/chats'
import { Box } from '@mui/system'
import React from 'react'
import { setLoading } from '@/store/reducers/app'


const lightTheme = createTheme({
  palette: {
    mode: "light"
  }
})

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
})

export default function Home() {
  const dispatch = useAppDispatch();
  const { isDarkMode } = useAppSelector(state => state.app);

  React.useEffect(() => {
    const timeout = setTimeout(() => dispatch(setLoading(false)), 3000);

    return () => clearTimeout(timeout);
  }, [])

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <main>
          <header>
            <Box sx={{ padding: "0px 12px", background: "#202225" }}>
              <Typography fontWeight="bold" fontSize={14}>Discord</Typography>
            </Box>
          </header>
          <Chats />
        </main>
      </ThemeProvider>
    </>
  )
}
