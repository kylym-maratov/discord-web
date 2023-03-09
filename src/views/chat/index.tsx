import { useAppSelector } from "@/store/hooks"
import { Button, FormControl, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"


const styles = {
    main: {
        width: 1000,
        height: 600,
        background: "#2F3136",
        borderRadius: 5,
        padding: 2
    }
}

const messages = [
    {
        message: "Hello!",
        date: new Date().toTimeString()
    },
    {
        message: "Hello!",
        date: new Date().toTimeString()
    },
    {
        message: "Hello!"
    }
]

export const FullChat: React.FC = () => {
    const { activeChat } = useAppSelector(state => state.chat);

    return (
        <Box sx={{ ...styles.main }}>
            <Box>
                <Typography fontWeight="bold">
                    {activeChat?.name || "Chat"}
                </Typography>
            </Box>
            <Box sx={{ height: 480 }}>
                {messages.map((item, key) => (
                    <Box key={key} sx={{ borderRadius: 5, width: 200, background: "#404249", padding: 2 }} >
                        <Typography >
                            {item.message}
                        </Typography>
                    </Box>
                ))}
            </Box>
            <Box sx={{ display: "flex" }}>
                <TextField type="text" variant="outlined" fullWidth placeholder="message" />
                <Button type="button" variant="contained">send</Button>
            </Box>
        </Box>
    )
}