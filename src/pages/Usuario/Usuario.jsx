import { Box, Container, Grid, Paper } from "@mui/material";
import AppBarGeneral from "../../components/appBarGeneral";

export default function Usuario(){
    return (
        <>
            <Box>
                <Paper
                elevation={24}
                sx={{ backgroundColor: "#f9f8f8", margin: "20px", padding: "20px" }}
                >
                    <AppBarGeneral />
                    <h1>Usuários</h1>
                </Paper>
            </Box>
        </>
    );
}