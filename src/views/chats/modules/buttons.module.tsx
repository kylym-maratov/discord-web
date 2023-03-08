import { Box, IconButton } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
const styles = {
    main: {
        display: "flex",
        justifyContent: "center",
        marginTop: 2,
        alignItem: "center"
    },
    btnIcon: {
        fontSize: 35
    },

}


export const NavButtons: React.FC = () => {
    return (
        <Box sx={{ ...styles.main }}>
            <Box sx={{ width: "64%" }}>
                <IconButton type="button" sx={{ background: "black" }}>
                    <SearchIcon sx={{ ...styles.btnIcon }} />
                </IconButton>
                <IconButton type="button" sx={{ background: "orange" }}>
                    <AddIcon sx={{ ...styles.btnIcon }} />
                </IconButton>
            </Box>
        </Box>
    )
}