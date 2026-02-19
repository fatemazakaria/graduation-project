import { Container } from '@mui/material';
import './Header.css';
import { Link } from 'react-router-dom';
import { ClassNames } from '@emotion/react';
function Header() {
  return (
    <>
    <Container className="container h" maxWidth="xl">
      <div className="h1">
        <span className="h2">ميراثاً</span>
      </div>
      <nav className="h3" dir="rtl">
        <Link to="/" className="h33">الرئيسية</Link>
        <Link to="courses" className="h333">الدورات</Link>
        <Link to="teachers" className="h333">هيئة التدريس</Link>
        <Link to="lessonViewer" className="h333">من نحن</Link>
        <Link to="contactUs" className="h333"> اتصل بنا</Link>
      </nav>

      
      <div className="h4" >
        
        <Link to="login" className="h5">تسجيل الدخول</Link>
       
      </div>
    </Container>
    </>
  );
}

export default Header;

