import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { CssBaseline, Skeleton, Slide } from '@mui/material'
import { Chats } from '@/views/chats'
import { Box } from '@mui/system'
import React from 'react'
import { setLoading } from '@/store/reducers/app'
import { User } from '@/views/user'
import { SubChat } from '@/views/subchat'
import { FullChat } from '@/views/chat'


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

const styles = {
  main: { display: "flex", alignItems: "center", height: "100%", position: "fixed", width: "100%" },
  subchat: {
    marginLeft: 2
  }
}

export default function Home() {
  const dispatch = useAppDispatch();
  const { isDarkMode, isLoading } = useAppSelector(state => state.app);
  const { activeChat } = useAppSelector(state => state.chat);

  React.useEffect(() => {
    const timeout = setTimeout(() => dispatch(setLoading(false)), 3000);

    return () => clearTimeout(timeout);
  }, [])

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Box sx={{ ...styles.main }}>
          <Chats />
          {isLoading ? <Skeleton animation="wave" sx={{ ...styles.subchat }}>
            <SubChat />
            <User />

          </Skeleton>
            :
            (
              <Slide in={true} direction="up">
                <Box sx={{ ...styles.subchat }}>
                  <SubChat />
                  <User />
                </Box>
              </Slide>
            )
          }

          {
            isLoading
              ?
              <Skeleton animation="wave" sx={{ ...styles.subchat }}>
                <FullChat />
              </Skeleton>
              :
              <Slide in={true} direction="left" unmountOnExit>
                <Box sx={{ ...styles.subchat }}>
                  <FullChat />
                </Box>
              </Slide>
          }
        </Box>

      </ThemeProvider>
    </>
  )
}
