
import React, { useEffect, useState } from "react";
import {
    Snackbar,
    Typography,
    Box,
    Paper,
    Stack,
} from "@mui/material";


import Button from "../../reusecore/Button";

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
            <Paper
                elevation={6}
                sx={{
                    p: 2,
                    maxWidth: 420,
                    borderRadius: 2,
                }}
            >
                <Stack spacing={2}>
                    <Typography variant="body1" fontWeight="500">
                        🍪 We value your privacy
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
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
        </Snackbar>
    );
};

export default CookieConsent;

