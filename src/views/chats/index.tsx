import { useAppSelector } from "@/store/hooks"
import styled from "@emotion/styled"
import { Skeleton, Slide } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import { NavButtons } from "./modules/buttons.module"
import { Chat } from "./modules/chat.module"
import { SubChat } from "./modules/subchat.module"
import { chats } from "./static/static"


const styles = {
    main: {
        display: "flex",
        position: "fixed",
        height: "100%"
    },
    skeleton: {
        marginLeft: 2,
        marginTop: 10
    }
}

const StyledChats = styled(Box)(({ theme }) => (
    {
        width: "80px",
        background: "#202225",
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
                        <Box sx={{ display: "flex" }}>
                            <Skeleton animation="wave" variant="rounded" sx={{ ...styles.skeleton }}>
                                <Box>
                                    <StyledChats>
                                        <NavButtons />
                                        {chats.length && chats.map((item, key) => (
                                            <Chat chatData={item} key={key} />
                                        ))}
                                    </StyledChats>
                                </Box>
                            </Skeleton>
                            <Skeleton animation="wave" variant="rounded" sx={{ ...styles.skeleton }}>
                                <SubChat />
                            </Skeleton>
                        </Box>
                    )
                    :
                    (
                        <Slide in={true} direction="right">
                            <Box sx={{ ...styles.main }}>
                                <StyledChats>
                                    <NavButtons />
                                    <Box sx={{ height: "2px", background: "white", width: "20px", margin: "20px auto" }}></Box>
                                    {
                                        chats.length && chats.map((item, key) => (
                                            <Chat chatData={item} key={key} />
                                        ))
                                    }
                                </StyledChats>
                                <SubChat />
                            </Box>
                        </Slide>
                    )
            }
        </>
    )
}