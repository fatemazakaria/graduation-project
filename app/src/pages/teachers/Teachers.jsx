import Container from "@mui/material/Container";
import TeacherCard from "../../Components/teacherCard/TeacherCard";
import "./Teachers.css";
import Typography from "@mui/material/Typography";
import {TeachersContext } from '../../contexts/teachersContext';
import { useContext, useState } from "react";
import SearchBar from "../../Components/searchBar/SearchBar";

export default function Teachers() {
const [teachers]=useContext(TeachersContext);

const teachersList =teachers.map((teacher)=>{
  return(<TeacherCard key={teacher.id} teacher={teacher}/>)

});




  return (
    <div
      style={{
        background:
          "linear-gradient(to right, white 0%, rgba(232, 245, 233, 1) 100%)",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
      }}
    >
      <Container className="container" maxWidth="xl" >
        <Typography
          className="header"
          sx={{
            fontWeight: "700",
            color: "#2F674F",
            fontSize: "49px",
            paddingTop: "100px",
            marginBottom: "50px",
          }}
          component="div"
        >
          قلوبٌ مؤمنة وعقولٌ عالمة
        </Typography>

        <Typography
          className="mainP"
          sx={{fontWeight: "500", marginBottom: "50px", fontSize: "24px"}}
          component="div"
        >
          يجتمع على منصتنا ثلة من المشايخ والعلماء الأفاضل، كلٌ في تخصصه، يجمعهم
          حب العلم ونشره، وإخلاص النية لله تعالى. هنا تلتقي بمن حملوا همَّ الدين
          واشتغلوا بنشره بلغة العصر.
        </Typography>
        <SearchBar/>


        <div
          className="teacherCardsList"
        >
          {teachersList}

        </div>
      </Container>
    </div>
  );
}
