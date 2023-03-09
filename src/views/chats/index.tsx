import { useAppSelector } from "@/store/hooks"
import styled from "@emotion/styled"
import { Skeleton, Slide } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import { NavButtons } from "./modules/buttons.module"
import { Chat } from "./modules/chat.module"
import { chats } from "./static/chats"

const styles = {
    hr: {
        height: "2px", background: "white", width: "20px", margin: "20px auto"
    }
}

const StyledChats = styled(Box)(() => (
    {
        width: "80px",
        background: "#202225",
        borderRadius: 10,
        marginLeft: 10
    }
))

export const Chats: React.FC = () => {
    const { isLoading } = useAppSelector(state => state.app);

    return (
        <>
            {
                isLoading
                    ?
                    (
                        <Skeleton animation="wave" variant="rounded" sx={{ marginLeft: 1 }}>
                            <Box>
                                <StyledChats>
                                    <NavButtons />
                                    {chats.length && chats.map((item, key) => (
                                        <Chat chatData={item} key={key} />
                                    ))}
                                </StyledChats>
                            </Box>
                        </Skeleton>
                    )
                    :
                    (
                        <Slide in={true} direction="right">
                            <StyledChats>
                                <NavButtons />
                                <Box sx={{ ...styles.hr }}></Box>
                                {
                                    chats.length && chats.map((item, key) => (
                                        <Chat chatData={item} key={key} />
                                    ))
                                }
                            </StyledChats>
                        </Slide>
                    )
            }
        </>
    )
}