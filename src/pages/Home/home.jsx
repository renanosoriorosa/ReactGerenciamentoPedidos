import { Box, Grid, Paper } from "@mui/material";
import AppBarGeneral from "../../components/appBarGeneral";
import { styled } from '@mui/material/styles';

const ContentBox = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
  }));

export default function Home(){
    
    return (
        <>
            <ContentBox>
                <Grid container spacing={3}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Box>
                            <Paper
                            elevation={24}
                            sx={{ backgroundColor: "#f9f8f8", margin: "20px", padding: "20px" }}
                            >
                                <AppBarGeneral />
                                <h1>Home</h1>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </ContentBox>
        </>
    );
}