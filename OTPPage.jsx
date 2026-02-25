// ForgetPassword.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Link as MuiLink,
  Alert,
  InputAdornment,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LockIcon from "@mui/icons-material/Lock";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  fontFamily: "'Cairo',sans-serif",
  borderRadius: "20px",
  background: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.35)",
}));

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("البريد الإلكتروني مطلوب");
      return;
    }

    if (!validateEmail(email)) {
      setError("البريد الإلكتروني غير صالح");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSuccess("تم إرسال كود التحقق إلى بريدك الإلكتروني");

      setTimeout(() => {
        navigate("/verify-otp", { state: { email: email } });
      }, 2000);
    } catch (err) {
      setError("حدث خطأ، حاول مرة أخرى");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Cairo',sans-serif",

        py: 4,
      }}
    >
      <StyledPaper elevation={3}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <MuiLink
            component={Link}
            to="/login"
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#458843",
            }}
          >
            <ArrowBackIcon />
          </MuiLink>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ flex: 1, textAlign: "center" }}
          >
            هل نسيت كلمة السر؟
          </Typography>
        </Box>

        <Typography
          variant="body1"
          color="#000000"
          align="center"
          sx={{ mb: 4 }}
        >
          لا تقلق! سنرسل لك كود التحقق على بريدك الإلكتروني
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
            {error}
          </Alert>
        )}

        {success && (
          <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }}>
            {success}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="البريد الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              "& .MuiInputLabel-root": {
                color: "#000000", //  لون ثابت للـ label
                "&.Mui-focused": {
                  color: "#000000", //  نفس اللون عند focus
                },
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#FFFFFF",
                },
                "&:hover fieldset": {
                  borderColor: "#FFFFFF",
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon sx={{ color: "#458843" }} />
                </InputAdornment>
              ),
            }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            size="large"
            disabled={loading}
            disableRipple
            sx={{
              py: 2,
              fontSize: "1.1rem",
              borderRadius: 2,
              mt: 3,
              mb: 2,
              background: "#458843 !important",
            }}
          >
            {loading ? "جاري الإرسال..." : "تغيير كلمة السر"}
          </Button>
        </form>
        <Box sx={{ textAlign: "center", mt: 3 }}>
          <span
            onClick={() => navigate("/login")}
            style={{
              color: "#000000",
              cursor: "pointer",
              textDecoration: "none",
              fontSize: "0.875rem",
            }}
            onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
          >
            ← العودة إلى تسجيل الدخول
          </span>
        </Box>
      </StyledPaper>
    </Container>
  );
};

export default ForgetPassword;
