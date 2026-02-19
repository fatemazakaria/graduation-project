import "./App.css";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Home from "./pages/home/Home.jsx";
import {TeachersContext} from "./contexts/teachersContext";
import {CoursesContext} from "./contexts/coursesContext";
import {v4 as uuid} from "uuid";
import {useContext, useState} from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Courses from "./pages/courses/Courses";
import Teachers from "./pages/teachers/Teachers";
import Root from "./pages/Root";
import LessonViewer from "./pages/lessonViewer/LessonViewer";

const initialTeachers = [
  {
    id: uuid(),
    name: "الشيخ سمير مصطفى ",
    specialization: "مادة السيرة",
    rating: 4.8,
    students: 1250,
    image: "/public/images/teacherImg.png",
    description: "متخصص في علوم العقيدة ",
  },

  {
    id: uuid(),
    name: "الشيخ انس السلطان",
    specialization: "مادة العقيدة",
    rating: 4.8,
    students: 1250,
    image: "/public/images/انس السلطان.jpeg",
    description: "متخصص في علوم العقيدة ",
  },
  {
    id: uuid(),
    name: "الشيخ علاء حامد",
    specialization: "مادة الفقه",
    rating: 4.8,
    students: 1250,
    image: "/public/images/علاء حامد.jpeg",
    description: "متخصص في علوم العقيدة ",
  },
  {
    id: uuid(),
    name: "الشيخ سمير مصطفى ",
    specialization: "مادة التوحيد",
    rating: 4.8,
    students: 1250,
    image: "/public/images/teacherImg.png",
    description: "متخصص في علوم العقيدة ",
  },
  {
    id: uuid(),
    name: "الشيخ سمير مصطفى ",
    specialization: "مادة العقيدة",
    rating: 4.8,
    students: 1250,
    image: "/public/images/teacherImg.png",
    description: "متخصص في علوم العقيدة ",
  },
  {
    id: uuid(),
    name: "الشيخ علاء حامد",
    specialization: "مادة الفقه",
    rating: 4.8,
    students: 1250,
    image: "/public/images/course.jpeg",
    description: "متخصص في علوم العقيدة ",
  },
];
const initialCourses = [
  {
    id: uuid(),
    title: "مادة السيرة",
    TeacherInstructor:"الشيخ سمير مصطفى " ,
    specializationName:" العقيدة",
    image: "/public/images/course3.jpeg",
  },

  {
     id: uuid(),
    title: "مادة السيرة",
    TeacherInstructor:"الشيخ سمير مصطفى " ,
    specializationName:" السيرة",
    image: "/public/images/course2.jpeg",

  },
  {
     id: uuid(),
    title: "مادة السيرة",
    TeacherInstructor:"الشيخ سمير مصطفى " ,
    specializationName:" التفسير",
    image: "/public/images/course3.jpeg",
  },
  {
     id: uuid(),
    title: "مادة السيرة",
    TeacherInstructor:"الشيخ سمير مصطفى " ,
    specializationName:" الحديث",
    image: "/public/images/teacherImg.png",
  },
  {
     id: uuid(),
    title: "مادة السيرة",
    TeacherInstructor:"الشيخ سمير مصطفى " ,
    specializationName:" التاريخ",
    image: "/public/images/course.jpeg",
  },
  {
     id: uuid(),
    title: "مادة السيرة",
    TeacherInstructor:"الشيخ سمير مصطفى " ,
    specializationName:" السيرة",
    image: "/public/images/course2.jpeg",
  },
];

const intialSpecialization = [{id: uuid(), name: "العقيدة", description: ""}];

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="teachers" element={<Teachers />} />
      <Route path="courses" element={<Courses />} />
      <Route path="lessonViewer" element={<LessonViewer />} />
    </Route>
  )
);

const theme = createTheme({
  // palette: {
  //   primary: {main: "#66BB6A", light: "#8EEE93", dark: "#438846"},
  //   secondary: {main: "#FFD54F", light: "#FFE89E", dark: "##997B1A"},
  //   // @ts-ignore
  //   tripartite: {main: "#81D4FA", light: "#BBE9FF", dark: "#5DA6C7"},
  // },
  typography: {
    // @ts-ignore
    fontFamily: ["cairo"],
  },
});

function App() {
  const teachers = useState(initialTeachers);
  const courses=useState(initialCourses)

  return (
    <div style={{direction: "rtl"}}>
      <CoursesContext value={courses}>
      <TeachersContext.Provider value={teachers}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </TeachersContext.Provider>
      </CoursesContext>
    </div>
  );
}

export default App;
