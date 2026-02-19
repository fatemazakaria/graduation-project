import "./CourseCard.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import {ArrowForward} from "@mui/icons-material";
import {Avatar} from "@mui/material";
import { auto } from "@popperjs/core";

export default function CourseCard({course}) {
  return (
    <Card className="course-card">
      <CardMedia
        sx={{height: "50%"}}
        image={course.image}
        title={course.title}
      />
      <CardContent className="cardContent" sx={{padding: "20px",margin:'auto'}}>
        <div>
          <Typography
            className="teacher-name"
            sx={{
              color: "text.secondary",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar
              className="avatar"
              alt="teacher image"
              src="/public/images/teacherImg.png"
            />
            {course.TeacherInstructor}
          </Typography>
          <Typography className="course-title" gutterBottom component="div">
            {course.title}
          </Typography>

          <Typography
            className="specialization-name"
            sx={{color: "text.secondary", marginTop: "10px"}}
          >
            {course.specializationName}
          </Typography>
        </div>
        <div
          style={{
            marginTop: "10px",
            width: "286px",
          }}
        >
          <Button
            className="showMore"
            variant="contained"
            startIcon={<ArrowForward className="icon" />}
            
          >
            سجل مجاناً
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
