
import React, { useEffect, useState } from "react";
import {
    Snackbar,
    Typography,
    Box,
    Paper,
    Stack,
} from "@mui/material";


import Button from "../../reusecore/Button";
import styled from "styled-components";

const StyledContainer = styled.div`
   .paper-container {
   background-color: ${props => props.theme.elevationColor};
   color: ${props => props.theme.text};
   }
`


const CookieConsent = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie_consent");
        if (!consent) {
            setOpen(true);
        }
    }, []);

    const handleResponse = () => {
        localStorage.setItem("cookie_consent", response);
        setOpen(false);
    };

    return (
        <Snackbar
            open={open}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
            <StyledContainer>
                <Paper
                    elevation={6}
                    sx={{
                        p: 2,
                        maxWidth: 620,
                        borderRadius: 2,
                    }}
                    className="paper-container"
                >
                    <Stack spacing={2}>
                        <Typography variant="body2" >
                            We use cookies to enhance your browsing experience. By clicking
                            "Accept", you consent to our use of cookies. Read more in our{" "}
                            <a href="/company/legal/privacy" target="_blank" rel="noopener noreferrer">
                                Privacy Policy
                            </a>
                            .
                        </Typography>

                        <Box display="flex" justifyContent="flex-end" gap={1}>
                            <Button
                                variant="outlined"
                                size="small"
                                $outlined
                                onClick={() => handleResponse("declined")}
                            >
                                Decline
                            </Button>
                            <Button
                                variant="contained"
                                size="small"
                                $secondary
                                onClick={() => handleResponse("accepted")}
                            >
                                Accept
                            </Button>
                        </Box>
                    </Stack>
                </Paper>
            </StyledContainer>
        </Snackbar>
    );
};

export default CookieConsent;

