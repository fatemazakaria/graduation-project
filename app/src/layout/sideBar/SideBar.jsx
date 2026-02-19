import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import "./sideBar.css";

import {CoursesContext} from "../../contexts/coursesContext";
import {TeachersContext} from "../../contexts/teachersContext";
import {useContext} from "react";
import { ClassNames } from "@emotion/react";

export default function SideBar() {
  const [courses] = useContext(CoursesContext);
  const [teachers] = useContext(TeachersContext);
  const coursesFilter = courses.map((Course) => {
    return (
      <>
        <ListItem className="listItem">
          <ListItemButton>
            <Typography className="listItemText">
              {Course.specializationName}
            </Typography>
          </ListItemButton>
        </ListItem>
        <Divider sx={{opacity: "1"}} />
      </>
    );
  });
  const teachersFilter = teachers.map((teacher) => {
    return (
      <>
        <ListItem className="listItem">
          <ListItemButton>
            <Typography className="listItemText">{teacher.name}</Typography>
          </ListItemButton>
        </ListItem>
        <Divider sx={{opacity: "1"}} />
      </>
    );
  });
  return (
    <>
      <div className="filters">
        <List>
          <Typography sx={{fontWeight: "700", fontSize: "31px"}}>
            الفئات
          </Typography>
          <ListItem className="listItem">
            <ListItemButton>
              <Typography className="listItemText">جميع الفئات</Typography>
            </ListItemButton>
          </ListItem>
          <Divider sx={{opacity: "1"}} />

          {coursesFilter}
          <ListItem className="listItem more-view">
            <ListItemButton>
              <Typography className="listItemText special">
                الأكثر مشاهدة
              </Typography>
            </ListItemButton>
          </ListItem>
          <Divider sx={{opacity: "1"}} />
          <ListItem className="listItem new">
            <ListItemButton>
              <Typography className="listItemText special">الجديدة</Typography>
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <Typography sx={{fontWeight: "700", fontSize: "31px"}}>
            المشايخ
          </Typography>
          <ListItem className="listItem">
            <ListItemButton >
              <Typography className="listItemText">
                جميع المشايخ
              </Typography>
            </ListItemButton>
          </ListItem>
          <Divider sx={{opacity: "1"}} />

          {teachersFilter}
        </List>
      </div>
    </>
  );
}
