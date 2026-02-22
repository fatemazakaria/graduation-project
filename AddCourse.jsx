import React from 'react';
import {
  Box, Drawer, AppBar, Toolbar, Typography, List, ListItem, ListItemIcon, ListItemText,
  TextField, Button, Grid, Avatar, Badge, InputAdornment, CssBaseline, MenuItem
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

// استيراد الأيقونات
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FolderIcon from '@mui/icons-material/Folder';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import  { useRef, useState, useEffect } from 'react';


// إعداد دعم اللغة العربية RTL
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

// إعداد الألوان والخطوط
const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'Cairo, Tajawal, sans-serif', // يفضل استخدام خطوط عربية مثل Cairo
  },
  palette: {
    primary: {
      main: '#367b58', // درجة اللون الأخضر لمنصة ميراثنا
    },
    background: {
      default: '#fdfdfd',
    },
  },
});

const drawerWidth = 260;

function AddCourse() {
  const fileInputRef = useRef(null);
  
  // حالة لحفظ ملف الصورة (لو هتحتاجيه في الرفع للسيرفر)
  const [selectedImage, setSelectedImage] = useState(null);
  // حالة لحفظ رابط معاينة الصورة
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleBoxClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      
      // إنشاء رابط مؤقت لمعاينة الصورة
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
    }
  };

  // تنظيف الرابط المؤقت من الذاكرة لما المكون يتشال (أفضل ممارسة)
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);
  return (
     
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex', direction: 'rtl' }}>
          <CssBaseline />

          {/* الشريط العلوي */}
          <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1, bgcolor: '#fff', color: '#000', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', width: drawerWidth }}>
                {/* يمكنك استبدال النص بصورة اللوجو الخاص بك */}
                <Typography variant="h5" sx={{ color: '#367b58', fontWeight: 'bold' }}>
               مِيرَاثاً
                </Typography>
              </Box>

              <TextField
                placeholder="ابحث عن الدورة المناسبة لك"
                variant="outlined"
                size="small"
                sx={{ width: '40%', bgcolor: '#f9f9f9', borderRadius: 2, '& fieldset': { borderRadius: 10 } }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography variant="body2">مرحباً، اسم المٌعلِّم</Typography>
                  <Avatar alt="User" src="/path-to-avatar.jpg" />
                </Box>
                <Badge badgeContent={1} color="primary">
                  <NotificationsNoneIcon color="action" />
                </Badge>
                <Badge badgeContent={2} color="primary">
                  <MailOutlineIcon color="action" />
                </Badge>
              </Box>
            </Toolbar>
          </AppBar>

          {/* القائمة الجانبية */}
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', borderLeft: 'none', borderRight: '1px solid #eaeaea' },
            }}
          >
            <Toolbar />
            <Box sx={{ overflow: 'auto', display: 'flex', flexDirection: 'column', height: '100%', pt: 2 }}>
              <List>
                <ListItem button>
                  <ListItemIcon><DashboardIcon /></ListItemIcon>
                  <ListItemText primary="لوحة التحكم الرئيسية" />
                </ListItem>
                <ListItem button sx={{ bgcolor: '#f0f0f0', borderRadius: '4px', mx: 1, width: 'auto' }}>
                  <ListItemIcon><FolderIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="إدارة الدورات" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon><AssessmentIcon /></ListItemIcon>
                  <ListItemText primary="الإختبارات" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon><ChatBubbleOutlineIcon /></ListItemIcon>
                  <ListItemText primary="الرسائل" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon><NotificationsNoneIcon /></ListItemIcon>
                   <Badge badgeContent={10} color="primary" sx={{ mr: 0, fontSize: '20px' }} />
                  <ListItemText primary="الإشعارات" />
                 
                </ListItem>
                <ListItem button>
                  <ListItemIcon><SettingsIcon /></ListItemIcon>
                  <ListItemText primary="الإعدادات" />
                </ListItem>
              </List>
            <Box sx={{ flexGrow: 1 }} /> {/* هذا الصندوق يملأ المساحة الفارغة بين القائمة وباقي المحتوى */}
              <List>
                <ListItem button sx={{ color: 'text.secondary' }} >
                  <ListItemIcon><LogoutIcon /></ListItemIcon>
                  <ListItemText primary="تسجيل خروج" />
                </ListItem>
                
              </List>
             </Box>
          </Drawer>

          {/* محتوى الصفحة الرئيسي */}
          <Box component="main" sx={{ flexGrow: 1, p: 4, bgcolor: '#fdfdfd' }}>
            <Toolbar />
            
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
              اضافة دورة جديدة
            </Typography>

            {/* أزرار التنقل (Tabs) */}
            <Box sx={{ display: 'flex', gap: 2, mb: 4, borderBottom: '1px solid #eee', pb: 2 }}>
              <Typography sx={{ bgcolor: '#367b58', color: '#fff', px: 3, py: 1, borderRadius: 10, cursor: 'pointer' }}>
                المعلومات الاساسية
              </Typography>
              <Typography sx={{ color: 'text.secondary', px: 3, py: 1, cursor: 'pointer' }}>المحتوى</Typography>
              <Typography sx={{ color: 'text.secondary', px: 3, py: 1, cursor: 'pointer' }}>كتب الدورة</Typography>
              <Typography sx={{ color: 'text.secondary', px: 3, py: 1, cursor: 'pointer' }}>شهادات الدورة</Typography>
            </Box>

            {/* النموذج */}
            <Grid container spacing={4} sx={{ mb: 3 }}>
              {/* الحقول النصية والقوائم المنسدلة */}
              <Grid item xs={12} md={8}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2" sx={{ mb: 1 }}>اسم الدورة</Typography>
                    <TextField fullWidth placeholder="اكتب اسم الدورة..." size="small" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2" sx={{ mb: 1 }}>المدة</Typography>
                    <TextField select fullWidth value="" size="small" helperText=" ">
                      <MenuItem value="">4 أسابيع</MenuItem>
                      <MenuItem value="">8 أسابيع</MenuItem>
                      <MenuItem value="">12 أسبوع</MenuItem>

                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2" sx={{ mb: 1 }}>اسم المعلم</Typography>
                    <TextField select fullWidth value="" size="small" helperText="">
                      <MenuItem value=""> المعلم الاول </MenuItem>
                      <MenuItem value="">  المعلم الثاني</MenuItem>
                      <MenuItem value=""> المعلم الثالث</MenuItem>
                      <MenuItem value=""> المعلم الرابع</MenuItem>
                      
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2" sx={{ mb: 1 }}>المستوى</Typography>
                    <TextField select fullWidth value="" size="small" helperText=" ">
                      <MenuItem value="">مبتدئ</MenuItem>
                      <MenuItem value="">متوسط</MenuItem>
                      <MenuItem value="">متقدم</MenuItem>
                    </TextField>
                  </Grid>
                </Grid>
              </Grid>

              {/* رفع الصورة */}
              
             <div 
      className="upload-box" 
      onClick={handleBoxClick} 
      style={{ 
        cursor: 'pointer',
        /* تأكدي إن المربع له طول وعرض محددين و overflow: hidden عشان الصورة متخرجش براه */
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {/* عرض الصورة لو موجودة، وإلا عرض الأيقونة والنص */}
      {previewUrl ? (
        <img 
          src={previewUrl} 
          alt="Preview" 
          style={{ 
            width: '500px', 
            height: '300px', 
             // عشان الصورة تملأ المربع بشكل متناسق
          }} 
        />
      ) : (
        
     <div 
      className="upload-box" 
      onClick={handleBoxClick} 
      style={{ 
        cursor: 'pointer',
        width: '250px', /* عرض المربع، تقدري تعدليه */
        height: '300px', /* طول المربع */
        border: '2px dashed #b0b0b0', /* الإطار المنقط */
        borderRadius: '12px', /* دوران الحواف */
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fafafa',
        margin: '10px auto'
      }}
    >
      {/* عرض الصورة لو موجودة، وإلا عرض الأيقونة والنص */}
      {previewUrl ? (
        <img 
          src={previewUrl} 
          alt="Preview" 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover' // عشان الصورة تملأ المربع بشكل متناسق
          }} 
        />
      ) : (
        <div className="upload-content" style={{ textAlign: 'center', color: '#777' }}>
           {/* أيقونة السحابة (SVG) */}
           <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '15px' }}>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
           </svg>
           <h3 style={{ margin: '0', fontSize: '18px', color: '#555', fontWeight: 'normal' }}>ارفع صورة الدورة</h3>
        </div>
      )}

      {/* الـ Input المخفي */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </div>
      )}

      {/* الـ Input المخفي */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </div>
  



            </Grid>

            {/* الحقول النصية المتعددة الأسطر */}
            <Typography variant="subtitle2" sx={{ mb: 1 }}>ماذا ستتعلم</Typography>
            <TextField fullWidth multiline rows={4} placeholder="ادخل ماذا سيتعلم..." sx={{ mb: 3 }} />

            <Typography variant="subtitle2" sx={{ mb: 1 }}>الوصف</Typography>
            <TextField fullWidth multiline rows={4} placeholder="اكتب وصف الدورة..." sx={{ mb: 4 }} />

            {/* زر الإرسال */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Button variant="contained" size="large" sx={{ px: 8, bgcolor: '#367b58', borderRadius: 10 }}>
                التالي
              </Button>
            </Box>

          </Box>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}
export default AddCourse;

//  const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function Header() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };
//   function Header() {
//   return (
//     <header className="h">
//       {/* جزء الشعار (اليمين) */}
//       <div className="h1">
//         {/* Placeholder للشعار - استبدله بـ <img src="..." alt="Logo" /> */}
//         <span className="h2">ميراثاً</span>
//       </div>

//       {/* جزء الروابط (الوسط) */}
//       <nav className="h3" dir="rtl">
//         <a href="#about" className="h33">الرئيسية</a>
//         <a href="#courses" className="h333">من نحن</a>
//         <a href="#teachers" className="h333">هيئة التدريس</a>
//         <a href="#contact" className="h333"> اتصل بنا</a>
//       </nav>

//       {/* جزء تسجيل الدخول (اليسار) */}
//       <div className="h4" >
        
//         <a href="#login" className="h5">تسجيل الدخول</a>
       
//       </div>
//     </header>
//   );
// }


//   return (
    
//       <AppBar>
//       <Container >
//         <Toolbar disableGutters>
//     <Button variant="contained" sx={{backgroundColor:'#20a711', color:'white'}}>تسجيل الدخول</Button>
          
          
          

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{ display: { xs: 'block', md: 'none' } }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
          
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button                         
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white',display:'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>
//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
   
//   )
// }
// export default Header;