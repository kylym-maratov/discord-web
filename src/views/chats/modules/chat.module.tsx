import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setActiveChat } from "@/store/reducers/chat";
import styled from "@emotion/styled";
import { Avatar, Badge, Box } from "@mui/material"

interface Props {
    chatData: {
        id: number;
        name: string;
        avatar: string;
        isOnline: boolean;
        messageCount: number;
        subChats: any;
    }
}

const styles = {
    main: {
        display: "flex", marginTop: 2
    },
    chat: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
    },

    badge: {
        fontSize: 10,
        fontWeight: "bold",
        background: "blue",
        padding: 0.6,
        borderRadius: "100%",
        border: "2px solid black",
        color: "white",
        textAlign: "center"
    }
}

const StyledSelected = styled(Box)(() => ({
    width: "4px",
    height: "30px",
    background: "white",
    borderRadius: 20,
    margin: "auto 0px"
}))

const StyledAvatar = styled(Avatar)(() => ({
    width: 55,
    height: 55,
    cursor: "pointer",
    borderRadius: 20,
    transition: "all .3s",
    ":hover": {
        borderRadius: 16
    }
}))

export const Chat: React.FC<Props> = ({ chatData }) => {
    const dispatch = useAppDispatch();
    const { activeChat } = useAppSelector(state => state.chat);

    function setActive() {
        dispatch(setActiveChat(chatData));
    }

    return (
        <Box sx={{ ...styles.main }}>
            {chatData.id === activeChat?.id && <StyledSelected />}
            <Box sx={{ ...styles.chat }}>
                <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={
                        chatData.messageCount > 0
                        &&
                        <Box sx={{ ...styles.badge }}>
                            {chatData.messageCount}
                        </Box>
                    }
                >
                    <StyledAvatar
                        alt={chatData.name}
                        src={chatData.avatar}
                        onClick={setActive}
                    >
                    </StyledAvatar>
                </Badge>
            </Box>
        </Box>
    )
}

