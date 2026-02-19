import {useContext} from "react";
import CourseCard from "../../Components/courseCard/CourseCard";
import {Container, Divider, Grid, Typography} from "@mui/material";
import "./Courses.css";
import SearchBar from "../../Components/searchBar/SearchBar";
import {CoursesContext} from "../../contexts/coursesContext";
import SideBar from "../../layout/sideBar/SideBar";
export default function Courses() {
  const [courses] = useContext(CoursesContext);
  const coursesList = courses.map((course) => {
    return <CourseCard key={course.id} course={course} />;
  });

  return (
    <>
      <Container className="container" maxWidth="xl">
        <Typography
          sx={{
            fontWeight: "700",
            color: "#2F674F",
            fontSize: "49px",
            marginTop: "50px",
            marginBottom: "50px",
          }}
          component="div"
        >
          عين على الشرع... وعين على الواقع...
        </Typography>
        <SearchBar />
        <div className="main-content">
          <div style={{width: " 20% "}}>
            <SideBar />
          </div>
          <div
            style={{
              width: "80%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="coursesList">{coursesList}</div>
          </div>
        </div>
      </Container>
    </>
  );
}
