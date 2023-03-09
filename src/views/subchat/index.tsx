
import { useAppSelector } from "@/store/hooks"
import styled from "@emotion/styled"
import { Accordion, AccordionDetails, AccordionSummary, Box, Grow, IconButton, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import { withTheme } from "@emotion/react";
import { User } from "@/views/user";
import NothingImage from "@/assets/nothing.png";
import Image from "next/image";

const StyledSubChat = styled(withTheme(Box))(({ theme }) => ({
    background: "#2F3136",
    width: 300,
    borderRadius: 10
}))

const styles = {
    chatImg: {
        width: "100%",
        height: 170,
        borderRadius: 10
    },
    chatName: {
        fontWeight: "bold",
        fontSize: 18,
        marginLeft: 1
    },
    empty: {
        textAlign: "center"
    },
    subChats: {
        borderRadius: 2,
        cursor: "pointer",
        transition: "all .3s",
        ":hover": {
            background: "#404249"
        }
    },

    chatNameAndAdd: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0px 8px"
    }
}

export const SubChat: React.FC = () => {
    const { activeChat } = useAppSelector(state => state.chat);
    const [openSubChat, setOpenSubChat] = useState<boolean>(false);

    useEffect(() => {
        const timeout = setTimeout(() => setOpenSubChat(true), 200);


        setOpenSubChat(false)
        return () => clearTimeout(timeout);
    }, [activeChat])

    return (
        <>
            <StyledSubChat>
                {activeChat
                    ?
                    (<>
                        <Grow in={openSubChat} unmountOnExit>
                            <Box  >
                                <img src={activeChat.avatar} style={{ ...styles.chatImg }} />
                                <Box sx={{ ...styles.chatNameAndAdd }}>
                                    <Typography sx={{ ...styles.chatName }}>
                                        {activeChat.name}
                                    </Typography>
                                    <IconButton>
                                        <AddIcon />
                                    </IconButton>
                                </Box>
                                <Box sx={{ marginTop: 2 }}>
                                    {activeChat.subChats.map((item: any, key: number) => (
                                        <Box key={key} sx={{ ...styles.subChats }}>
                                            <Accordion sx={{ background: "none", boxShadow: "none" }}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                >
                                                    <Typography fontSize={14}>{item.name}</Typography>
                                                </AccordionSummary>
                                                {item.chats.map((item1: any, key1: number) => (
                                                    <AccordionDetails key={key1} >
                                                        <Typography fontSize={14} fontWeight="bold">
                                                            #{item1}
                                                        </Typography>
                                                    </AccordionDetails>
                                                ))}
                                            </Accordion>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </Grow>

                    </>)
                    :
                    (
                        <Box sx={{ ...styles.empty }}>
                            <Image src={NothingImage} width={170} alt="nothing" />
                        </Box>
                    )
                }
            </StyledSubChat>
        </>
    )
}