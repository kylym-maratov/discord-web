import { Avatar, ButtonGroup, IconButton, Stack, Typography } from "@mui/material"
import { Box } from "@mui/system"
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import HeadsetOffIcon from '@mui/icons-material/HeadsetOff';
import MicOffIcon from '@mui/icons-material/MicOff';
import React from "react";

const user = {
    name: "Kylym Maratov",
    isOnline: false
}

const styles = {
    main: {
        position: "fixed",
        bottom: "0px",
        padding: 1,
        background: "#404249",
        width: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    }
}

function stringToColor(string: string) {
    let hash = 0;
    let i;


    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }


    return color;
}

function stringAvatar(name: string) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

export const User: React.FC = () => {
    const [mute, setMute] = React.useState<{ micro: boolean, head: boolean }>({
        micro: false,
        head: false
    })

    function muteMicro() {
        setMute({ ...mute, micro: !mute.micro })
    }

    function muteHead() {
        setMute({ ...mute, head: !mute.head })
    }

    return (
        <Box sx={{ ...styles.main }}>
            <Box sx={{ display: "inherit", alignItems: "inherit" }}>
                <Avatar {...stringAvatar(user.name)} />
                <Typography fontWeight="bold" fontSize={14} marginLeft={1}>@{user.name}</Typography>
            </Box>
            <ButtonGroup>
                <IconButton type="button" onClick={muteHead} >
                    {mute.head ? <HeadsetOffIcon sx={{ color: "red", fontSize: 20 }} /> : <HeadphonesIcon sx={{ fontSize: 20 }} />}
                </IconButton>
                <IconButton type="button" onClick={muteMicro}  >
                    {mute.micro ? <MicOffIcon sx={{ color: "red", fontSize: 20 }} /> : <KeyboardVoiceIcon sx={{ fontSize: 20 }} />}
                </IconButton>
                <IconButton type="button" ><SettingsIcon sx={{ fontSize: 20 }} /></IconButton>
            </ButtonGroup>
        </Box>
    )
}