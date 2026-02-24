
import React, { useState } from 'react';
// @ts-ignore
import { Bell, Mail, ChevronDown, PlayCircle, CheckCircle2, Clock, Award, LayoutGrid, BookOpen, Menu, X } from 'lucide-react';

import '../styles/Dashboard.css'; // استيراد ملف الـ CSS
import Footer from 'components/Footer'; 
import '../styles/Footer.css';
import '../index.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('completed');
   const [isMenuOpen, setIsMenuOpen] = useState(false);
  const courses = [
    {
      id: 1,
      instructor: "الشيخ سمير مصطفى فرج",
      title: "العقيدة الأساسية - المسار الكامل",
      date: "تاريخ الإكمال: 15 مارس 2024",
      episodes: "عدد الحلقات: 10/10 مكتملة",
      duration: "المدة: 5 ساعات",
      progress: 100,
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&q=80"
    },
    {
      id: 2,
      instructor: "الشيخ سمير مصطفى فرج",
      title: "العقيدة الأساسية - المسار الكامل",
      date: "تاريخ الإكمال: 15 مارس 2024",
      episodes: "عدد الحلقات: 10/10 مكتملة",
      duration: "المدة: 5 ساعات",
      progress: 100,
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&q=80"
    },
    {
      id: 3,
      instructor: "الشيخ سمير مصطفى فرج",
      title: "العقيدة الأساسية - المسار الكامل",
      date: "تاريخ الإكمال: 15 مارس 2024",
      episodes: "عدد الحلقات: 10/10 مكتملة",
      duration: "المدة: 5 ساعات",
      progress: 100,
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&q=80"
    }
  ];

  return (
    <div className="dashboard-container">
      
      {/* Navbar */}
     {/* Navbar */}
      <nav className="navbar">
        <div className="nav-right">
          <div className="user-info">
            <img 
              src="https://avatar.iran.liara.run/public/girl" 
              alt="Profile" 
              className="avatar"
            />
            <div className="user-name">
              <span>مرحبا يارا عطية</span>
            </div>
            <ChevronDown size={16} color="#9ca3af" />
          </div>
          <div className="notification-box">
             <Bell size={20} color="#4b5563" />
             <span className="badge-dot"></span>
          </div>
          <Mail size={20} color="#4b5563" style={{cursor: 'pointer'}} />
        </div>

        {/* 3. زرار القائمة (بيظهر بس في الموبايل) */}
        <div className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
           {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* 4. القائمة نفسها (ضفنا كلاس active بناء على الحالة) */}
        <div className={`nav-center ${isMenuOpen ? 'active' : ''}`}>
           <a href="#" className="nav-link active">المنجزة</a>
           <a href="#" className="nav-link"><Clock size={16}/> اكتشف الدورات</a>
           <a href="#" className="nav-link"><LayoutGrid size={16}/> واصل التعلم</a>
        </div>

        <div className="logo">ميراثنا</div>
      </nav>

      {/* Main Content */}
      <main className="main-content">

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-text">
            <h1>فخورا بانجازاتك , يارا</h1>
            <p>جاهزة للمزيد من الانجازات , واصلي انجزاتك واجعلينا فخورين بك</p>
          </div>
          <div className="hero-image">
             <img 
               src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740" 
               alt="Character" 
             />
          </div>
        </section>

        {/* Stats Grid */}
        <section className="stats-layout">
          
          {/* Badge Card */}
          <div className="badge-card">
             <div className="badge-icon-bg">
                <Award size={64} color="#eab308" fill="#fef9c3" />
             </div>
             <h3 style={{color: '#eab308', fontWeight: 'bold', fontSize: '20px'}}>شارة المثابر</h3>
             <ul className="badge-list">
                <li>أكمل 3 كورسات كاملة</li>
                <li>أكمل 10 أيام مشاهدة متتالية</li>
                <li>تاريخ الفوز: 30 مارس 2024</li>
                <li>النوع: ذهبية</li>
             </ul>
          </div>

          {/* Numbers Grid */}
          <div className="numbers-grid">
            
            {/* Card 1 */}
            <div className="stat-card">
               <div>
                  <div className="stat-number green-text">5</div>
                  <div className="stat-label">الكورسات المكتملة</div>
               </div>
               <div className="stat-icon green-bg">
                  <CheckCircle2 size={32} color="#4E8B75" />
               </div>
            </div>

            {/* Card 2 */}
            <div className="stat-card">
               <div>
                  <div className="stat-number blue-text">15</div>
                  <div className="stat-label">أيام المشاهدة المتتالية</div>
               </div>
               <div className="stat-icon blue-bg">
                  <PlayCircle size={32} color="#3b82f6" />
               </div>
            </div>

            {/* Card 3 (Full Width) */}
            <div className="stat-card stat-full-width">
               <div>
                  <div className="stat-number purple-text">35</div>
                  <div className="stat-label">إجمالي ساعات المشاهدة</div>
               </div>
               <div className="stat-icon purple-bg">
                  <Clock size={32} color="#a855f7" />
               </div>
            </div>

          </div>
        </section>

        {/* Tabs */}
        <div className="tabs-container">
           <button 
             onClick={() => setActiveTab('completed')}
             className={`tab-btn ${activeTab === 'completed' ? 'active' : ''}`}
           >
             الدورات المكتملة
           </button>
           <button 
             onClick={() => setActiveTab('certificates')}
             className={`tab-btn ${activeTab === 'certificates' ? 'active' : ''}`}
           >
             الشهادات
           </button>
           <button 
             onClick={() => setActiveTab('badges')}
             className={`tab-btn ${activeTab === 'badges' ? 'active' : ''}`}
           >
             الشارات
           </button>
        </div>

        {/* Courses Grid */}
        <section className="courses-grid">
           {courses.map((course) => (
             <div key={course.id} className="course-card">
                <div className="course-image">
                   <img src={course.image} alt={course.title} />
                   <div className="course-overlay">
                      <BookOpen color="white" size={40} style={{opacity: 0.8}} />
                   </div>
                </div>
                
                <div className="course-content">
                   <div className="instructor-row">
                      <img src="https://avatar.iran.liara.run/public/boy" alt="Instructor" className="instructor-img" />
                      <span>{course.instructor}</span>
                   </div>
                   
                   <h3 className="course-title">{course.title}</h3>
                   
                   <div className="course-meta">
                      <div className="meta-row"><span>{course.date}</span></div>
                      <div className="meta-row"><span>{course.episodes}</span></div>
                      <div className="meta-row"><span>{course.duration}</span></div>
                      <div className="meta-row progress-text">
                         <span>نسبة المشاهدة: {course.progress}%</span>
                      </div>
                   </div>
                </div>
             </div>
           ))}
        </section>
         {/* Floating Button */}
      <div className="floating-btn-container">
        <button className="floating-btn">
           واصل التعلم
        </button>
      </div>

      </main>

     

    </div>
  );
};

export default Dashboard;