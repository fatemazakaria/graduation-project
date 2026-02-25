// SignUpPage.jsx
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";
import "./SignUpPage.css";

// ===== VALIDATION SCHEMA =====
const signUpSchema = z
  .object({
    firstName: z.string().min(1, { message: "الاسم الأول مطلوب" }),
    lastName: z.string().min(1, { message: "اسم العائلة مطلوب" }),
    email: z
      .string()
      .min(1, { message: "البريد الإلكتروني مطلوب" })
      .email({ message: "بريد إلكتروني غير صالح" }),
    userType: z.enum(["student", "teacher"], {
      required_error: "الرجاء اختيار نوع المستخدم",
    }),
    password: z
      .string()
      .min(8, { message: "كلمة المرور يجب أن تكون 8 أحرف على الأقل" })
      .regex(/.*[!@#$%^&*()_+{}|[\]\\:",'<>?,./].*/, {
        message: "يجب أن تحتوي كلمة المرور على حرف خاص واحد على الأقل",
      }),
    confirmPassword: z.string().min(1, { message: "تأكيد كلمة المرور مطلوب" }),
  })
  .refine((input) => input.password === input.confirmPassword, {
    message: "كلمات المرور غير متطابقة",
    path: ["confirmPassword"],
  });

const SignUpPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userType, setUserType] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth > 768 && window.innerWidth <= 1024
  );
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringLogin, setIsHoveringLogin] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024);
      setIsDesktop(window.innerWidth > 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data) => {
    console.log("بيانات التسجيل:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    alert("تم إنشاء الحساب بنجاح!");
  };

  // Container Styles
  const containerStyle = {
    width: "100%",
    minHeight: "100vh",
    fontFamily: "'Cairo',sans-serif",
    backgroundImage:
      "url('https://images.pexels.com/photos/655837/pexels-photo-655837.jpeg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    fontFamily: "'Cairo', sans-serif",
    padding: isMobile ? "20px" : isTablet ? "40px" : 0,
  };

  // Logo Styles
  const logoStyle = {
    position: "absolute",
    fontFamily: "Cairo",
    fontWeight: 700,
    lineHeight: "120%",
    textAlign: "center",
    color: "#FFFFFF",
    opacity: 1,
    zIndex: 10,
    ...(isMobile
      ? {
          top: "30px",
          right: "30px",
          width: "clamp(60px, 15vw, 80px)",
          height: "clamp(30px, 7vw, 40px)",
          fontSize: "clamp(20px, 6vw, 24px)",
        }
      : isTablet
      ? {
          top: "40px",
          right: "40px",
          width: "clamp(80px, 12vw, 100px)",
          height: "clamp(40px, 6vw, 50px)",
          fontSize: "clamp(28px, 4vw, 32px)",
        }
      : {
          top: "clamp(40px, 5vh, 65px)",
          right: "clamp(40px, 5vw, 1236px)",
          width: "clamp(100px, 8vw, 126px)",
          height: "clamp(50px, 4vh, 62px)",
          fontSize: "clamp(42px, 3.5vw, 52px)",
        }),
  };

  // Card Styles
  const glassCardStyle = {
    borderRadius: isMobile ? "20px" : "25px",
    background: "rgba(28, 28, 28, 0.35)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    position: "relative",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    ...(isMobile
      ? {
          width: "100%",
          minHeight: "auto",
          padding: "30px 25px",
        }
      : isTablet
      ? {
          width: "90%",
          maxWidth: "750px",
          minHeight: "auto",
          padding: "40px 35px",
        }
      : {
          width: "clamp(500px, 55vw, 750px)",
          minHeight: "clamp(620px, 68vh, 820px)",
          padding: "clamp(28px, 4vh, 38px) clamp(35px, 5vw, 50px)",
          margin: "20px auto",
        }),
  };

  // Header Styles
  const headerContainerStyle = {
    width: "100%",
    marginBottom: isMobile ? "30px" : isTablet ? "40px" : "40px",
    textAlign: "right",
  };

  const mainTitleStyle = {
    width: "100%",
    fontFamily: "Cairo",
    fontWeight: 700,
    lineHeight: "120%",
    textAlign: "right",
    color: "#F5FFF5",
    opacity: 1,
    ...(isMobile
      ? {
          fontSize: "clamp(28px, 8vw, 32px)",
          marginBottom: "clamp(8px, 2vh, 10px)",
        }
      : isTablet
      ? {
          fontSize: "clamp(36px, 6vw, 42px)",
          marginBottom: "clamp(10px, 2vh, 12px)",
        }
      : {
          fontSize: "clamp(28px, 2.8vw, 34px)",
          marginBottom: "clamp(8px, 1.5vh, 12px)",
        }),
  };

  const subtitleStyle = {
    width: "100%",
    fontFamily: "Cairo",
    fontWeight: 500,
    lineHeight: "140%",
    textAlign: "right",
    color: "#F5FFF5",
    opacity: 0.9,
    ...(isMobile
      ? {
          fontSize: "18px",
        }
      : isTablet
      ? {
          fontSize: "22px",
        }
      : {
          height: "auto",
          fontSize: "clamp(18px, 2vw, 22px)",
          lineHeight: "140%",
          marginBottom: "5px",
        }),
  };

  // Form Styles
  const formContainerStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: isMobile ? "20px" : isTablet ? "25px" : "20px",
    opacity: 1,
  };

  const nameFieldsContainerStyle = {
    ...(isMobile
      ? {
          display: "flex",
          flexDirection: "column",
          gap: "clamp(15px, 3vw, 20px)",
          width: "100%",
        }
      : isTablet
      ? {
          display: "flex",
          gap: "20px",
          width: "100%",
          flexWrap: "wrap",
        }
      : {
          display: "flex",
          gap: "clamp(15px, 2vw, 25px)",
          width: "100%",
          flexWrap: "nowrap",
        }),
  };

  const fieldContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    width: "100%",
    ...(isDesktop
      ? {
          flex: "1 1 auto",
          minWidth: isTablet ? "250px" : "200px",
        }
      : {}),
  };

  const fieldLabelStyle = {
    width: "100%",
    fontFamily: "Cairo",
    fontWeight: 700,
    lineHeight: "120%",
    textAlign: "right",
    color: "#F5FFF5",
    opacity: 1,
    ...(isMobile
      ? {
          fontSize: "14px",
          marginBottom: "8px",
        }
      : isTablet
      ? {
          fontSize: "15px",
          marginBottom: "10px",
        }
      : {
          fontSize: "clamp(14px, 1.5vw, 16px)",
          marginBottom: "8px",
        }),
  };

  const inputFieldStyle = {
    width: "100%",
    borderRadius: "8px",
    border: "1.5px solid #CCCCCC",
    fontFamily: "Cairo",
    color: "#333",
    backgroundColor: "#FFFFFF",
    textAlign: "right",
    outline: "none",
    transition: "border 0.2s ease",
    opacity: 1,
    ...(isMobile
      ? {
          height: "48px",
          padding: "10px 16px",
          fontSize: "14px",
        }
      : isTablet
      ? {
          height: "52px",
          padding: "10px 20px",
          fontSize: "15px",
        }
      : {
          height: "clamp(45px, 6vh, 52px)",
          padding: "8px 20px",
          fontSize: "clamp(14px, 1.5vw, 16px)",
        }),
  };

  const selectFieldStyle = {
    ...inputFieldStyle,
    cursor: "pointer",
    appearance: "none",
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 8.825L1.175 4 2.238 2.937 6 6.7l3.762-3.763L10.825 4z'/%3E%3C/svg%3E\")",
    backgroundRepeat: "no-repeat",
    ...(isMobile
      ? {
          backgroundPosition: "left 16px center",
          paddingLeft: "40px",
        }
      : {
          backgroundPosition: "left 24px center",
          paddingRight: "24px",
          paddingLeft: "50px",
        }),
  };

  const submitButtonStyle = {
    width: "100%",
    borderRadius: "8px",
    backgroundColor: isHovering ? "#2E7D32" : "#438846",
    color: "#FFFFFF",
    fontFamily: "Cairo",
    fontWeight: 700,
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 1,
    transform: isHovering ? "translateY(-2px)" : "translateY(0)",
    boxShadow: isHovering
      ? "0 4px 20px rgba(67, 136, 70, 0.4)"
      : "0 2px 10px rgba(67, 136, 70, 0.2)",
    ...(isMobile
      ? {
          height: "48px",
          padding: "8px 16px",
          fontSize: "16px",
          marginTop: "20px",
        }
      : isTablet
      ? {
          height: "52px",
          padding: "8px 20px",
          fontSize: "17px",
          marginTop: "25px",
        }
      : {
          height: "clamp(45px, 6vh, 52px)",
          padding: "8px 20px",
          fontSize: "clamp(16px, 1.5vw, 18px)",
          marginTop: "20px",
        }),
  };

  const loginLinkContainerStyle = {
    width: "100%",
    textAlign: "center",
    marginTop: isMobile ? "10px" : "15px",
    marginBottom: isDesktop ? "10px" : undefined,
  };

  const loginLinkTextStyle = {
    fontFamily: "Cairo",
    color: "#FFFFFF",
    opacity: 0.9,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    flexDirection: "row",
    flexWrap: "wrap",
    fontSize: isMobile ? "14px" : "16px",
  };

  const loginLinkStyle = {
    color: isHoveringLogin ? "#FFFFFF" : "#FFFFFF",
    textDecoration: "none",
    fontWeight: 700,
    cursor: "pointer",
    fontSize: isMobile ? "clamp(12px, 3vw, 14px)" : "clamp(14px, 2vw, 16px)",
    transition: "all 0.3s ease",
    marginRight: isMobile ? "clamp(5px, 2vw, 10px)" : "clamp(8px, 1.5vw, 10px)",
    whiteSpace: "nowrap",
  };

  const footerTextStyle = {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    fontFamily: "Amiri Quran",
    fontWeight: 300,
    color: "rgba(245, 255, 245, 0.7)",
    marginBottom: "clamp(8px, 2vh, 12px)",
    textAlign: "center",
    lineHeight: "1.6",
    ...(isMobile
      ? {
          bottom: "clamp(10px, 3vh, 20px)",
          fontSize: "clamp(16px, 4vw, 18px)",
          width: "90%",
          maxWidth: "400px",
          padding: "0 20px",
        }
      : isTablet
      ? {
          bottom: "clamp(20px, 4vh, 30px)",
          fontSize: "clamp(20px, 3vw, 22px)",
          width: "80%",
          maxWidth: "500px",
        }
      : {
          bottom: "clamp(15px, 3vh, 25px)",
          fontSize: "clamp(18px, 2vw, 22px)",
          width: "clamp(350px, 45vw, 500px)",
          maxWidth: "500px",
          padding: "10px 15px 0",
        }),
  };

  const errorMessageStyle = {
    color: "#FF6B6B",
    marginTop: "8px",
    textAlign: "right",
    fontFamily: "Cairo",
    fontSize: isMobile ? "12px" : "14px",
  };

  return (
    <div style={containerStyle}>
      <div style={logoStyle}>مِيرَاثاً</div>
      <div className="content-wrapper">
        <div style={glassCardStyle}>
          <div style={headerContainerStyle}>
            <h1 style={mainTitleStyle}>إنشاء حساب</h1>
            <p style={subtitleStyle}>
              ابدأ رحلتك مع العلم الذي يرفعك في الدنيا والآخرة.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} style={formContainerStyle}>
            <div style={nameFieldsContainerStyle}>
              <div style={fieldContainerStyle}>
                <label style={fieldLabelStyle}>الاسم الأول</label>
                <input
                  type="text"
                  {...register("firstName")}
                  style={{
                    ...inputFieldStyle,
                    borderColor: errors.firstName ? "#FF6B6B" : "#CCCCCC",
                  }}
                  placeholder="أدخل اسمك الأول"
                />
                {errors.firstName && (
                  <div style={errorMessageStyle}>
                    {errors.firstName.message}
                  </div>
                )}
              </div>

              <div style={fieldContainerStyle}>
                <label style={fieldLabelStyle}>اسم العائلة</label>
                <input
                  type="text"
                  {...register("lastName")}
                  style={{
                    ...inputFieldStyle,
                    borderColor: errors.lastName ? "#FF6B6B" : "#CCCCCC",
                  }}
                  placeholder="أدخل اسم العائلة"
                />
                {errors.lastName && (
                  <div style={errorMessageStyle}>{errors.lastName.message}</div>
                )}
              </div>
            </div>

            <div style={fieldContainerStyle}>
              <label style={fieldLabelStyle}>البريد الإلكتروني</label>
              <input
                type="email"
                {...register("email")}
                style={{
                  ...inputFieldStyle,
                  borderColor: errors.email ? "#FF6B6B" : "#CCCCCC",
                }}
                placeholder="example@email.com"
              />
              {errors.email && (
                <div style={errorMessageStyle}>{errors.email.message}</div>
              )}
            </div>

            <div style={fieldContainerStyle}>
              <label style={fieldLabelStyle}>نوع المستخدم</label>
              <select
                {...register("userType")}
                style={{
                  ...selectFieldStyle,
                  borderColor: errors.userType ? "#FF6B6B" : "#CCCCCC",
                }}
                value={userType}
                onChange={(e) => {
                  setUserType(e.target.value);
                  setValue("userType", e.target.value);
                }}
              >
                <option value="student">طالب</option>
                <option value="teacher">مدرس</option>
              </select>
              {errors.userType && (
                <div style={errorMessageStyle}>{errors.userType.message}</div>
              )}
            </div>

            <div style={fieldContainerStyle}>
              <label style={fieldLabelStyle}>كلمة المرور</label>
              <input
                type="password"
                {...register("password")}
                style={{
                  ...inputFieldStyle,
                  borderColor: errors.password ? "#FF6B6B" : "#CCCCCC",
                }}
                placeholder="أدخل كلمة المرور"
              />
              {errors.password && (
                <div style={errorMessageStyle}>{errors.password.message}</div>
              )}
            </div>

            <div style={fieldContainerStyle}>
              <label style={fieldLabelStyle}>تأكيد كلمة المرور</label>
              <input
                type="password"
                {...register("confirmPassword")}
                style={{
                  ...inputFieldStyle,
                  borderColor: errors.confirmPassword ? "#FF6B6B" : "#CCCCCC",
                }}
                placeholder="أعد إدخال كلمة المرور"
              />
              {errors.confirmPassword && (
                <div style={errorMessageStyle}>
                  {errors.confirmPassword.message}
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={submitButtonStyle}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {isSubmitting ? "جاري الإنشاء..." : "إنشاء حساب"}
            </button>
          </form>

          <div style={loginLinkContainerStyle}>
            <p style={loginLinkTextStyle}>
              <Link
                to="/login"
                style={loginLinkStyle}
                onMouseEnter={() => setIsHoveringLogin(true)}
                onMouseLeave={() => setIsHoveringLogin(false)}
              >
                تسجيل الدخول
              </Link>
              {" لديك حساب بالفعل؟"}
            </p>
          </div>
        </div>
      </div>

      <div style={footerTextStyle}>
        ﴿ ثُمَّ أَوْرَثْنَا الْكِتَابَ الَّذِينَ اصْطَفَيْنَا مِنْ عِبَادِنَا ﴾
      </div>
    </div>
  );
};

export default SignUpPage;
