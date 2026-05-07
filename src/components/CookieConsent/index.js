import React, { useEffect, useState } from "react";
import { Snackbar, Typography, Box, Paper, Stack } from "@mui/material";

import { Link } from "gatsby";
import Button from "../../reusecore/Button";
import styled from "styled-components";

const StyledContainer = styled.div`
  .paper-container {
    background-color: ${(props) => props.theme.elevationColor};
    color: ${(props) => props.theme.text};
  }
`;

const STORAGE_KEY = "cookie_consent";

const CookieConsent = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const timer = window.setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, "declined");
      setOpen(false);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [open]);

  const handleResponse = (response) => {
    localStorage.setItem(STORAGE_KEY, response);
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
            p: 1.5,
            maxWidth: 520,
            borderRadius: 2,
          }}
          className="paper-container"
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            alignItems={{ xs: "stretch", sm: "center" }}
          >
            <Typography variant="body2" sx={{ flex: 1, mb: 0 }}>
              We use cookies to enhance your browsing experience. By clicking
              "Accept", you consent to our use of cookies. Read more in our{" "}
              <Link
                to="/company/legal/privacy"
                target="_self"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </Link>{" "}
              or visit our{" "}
              <Link
                to="/company/legal"
                target="_self"
                rel="noopener noreferrer"
              >
                Trust Center
              </Link>
              .
            </Typography>

            <Box
              display="flex"
              justifyContent="flex-end"
              gap={1}
              flexShrink={0}
            >
              <Button
                variant="outlined"
                size="small"
                $outlined
                onClick={() => handleResponse("declined")}
                style={{ minWidth: 92, padding: "10px 14px", fontSize: 14 }}
              >
                Decline
              </Button>
              <Button
                variant="contained"
                size="small"
                $secondary
                onClick={() => handleResponse("accepted")}
                style={{ minWidth: 92, padding: "10px 14px", fontSize: 14 }}
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
