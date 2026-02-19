import {
  Button,
  Collapse,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import "./LessonViewer.css";
import React from "react";
import {
  Check,
  CheckCircle,
  ExpandLess,
  ExpandMore,
  LockOutline,
  StarBorder,
  
} from "@mui/icons-material";

export default function LessonViewer() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Container className="course-container container" maxWidth="xl">
        <div className="lessons-structure">
          <List>
            <ListItemButton onClick={handleClick}>
              <i className="fa-thin fa-circle-dashed"></i>
              <Typography
                sx={{fontSize: "20px", fontWeight: "700", marginLeft: "20px"}}
              >
                المستوى الاول
              </Typography>
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{pl: 4}}>
                  <Typography sx={{marginLeft: "20px", fontSize: "16px"}}>
                    الدرس الاول
                  </Typography> 
                  <CheckCircle sx={{color: "rgba(67, 136, 70, 1)"}} />
                </ListItemButton>
              </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{pl: 4}}>
                  <Typography sx={{marginLeft: "20px"}}>
                    الدرس الثانى
                  </Typography>
                  <ListItemIcon>
                    <CheckCircle />
                  </ListItemIcon>
                </ListItemButton>
              </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{pl: 4}}>
                  <Typography sx={{marginLeft: "20px"}}>
                    {" "}
                    الدرس الثالث
                  </Typography>
                  <ListItemIcon>
                    <LockOutline />
                  </ListItemIcon>
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={handleClick}>
              <Typography
                sx={{fontSize: "20px", fontWeight: "700", marginLeft: "20px"}}
              >
                المستوى الثانى
              </Typography>
              {open ? <ExpandLess /> : <ExpandMore />}
              <LockOutline></LockOutline>
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{pl: 4}}>
                  <Typography sx={{marginLeft: "20px"}}>الدرس الاول</Typography>
                  <ListItemIcon>
                    <LockOutline />
                  </ListItemIcon>
                </ListItemButton>
              </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{pl: 4}}>
                  <Typography sx={{marginLeft: "20px"}}>
                    الدرس الثانى
                  </Typography>
                  <ListItemIcon>
                    <LockOutline />
                  </ListItemIcon>
                </ListItemButton>
              </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{pl: 4}}>
                  <Typography sx={{marginLeft: "20px"}}>
                    {" "}
                    الدرس الثالث
                  </Typography>
                  <ListItemIcon>
                    <LockOutline />
                  </ListItemIcon>
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={handleClick}>
              <Typography
                sx={{fontSize: "20px", fontWeight: "700", marginLeft: "20px"}}
              >
                المستوى الثالث
              </Typography>
              {open ? <ExpandLess /> : <ExpandMore />}
              <LockOutline></LockOutline>
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{pl: 4}}>
                  <Typography sx={{marginLeft: "20px"}}>الدرس الاول</Typography>
                  <ListItemIcon>
                    <LockOutline />
                  </ListItemIcon>
                </ListItemButton>
              </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{pl: 4}}>
                  <Typography sx={{marginLeft: "20px"}}>
                    الدرس الثانى
                  </Typography>
                  <ListItemIcon>
                    <LockOutline />
                  </ListItemIcon>
                </ListItemButton>
              </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{pl: 4}}>
                  <Typography sx={{marginLeft: "20px"}}>
                    {" "}
                    الدرس الثالث
                  </Typography>
                  <ListItemIcon>
                    <LockOutline />
                  </ListItemIcon>
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </div>

        <div className="lesson-content">
          <video width="750" height="460" controls>
            <source src="images/awesome-video.mp4" type="video/mp4"></source>
          </video>
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: "700",
              color: "rgba(37, 85, 40, 1)",
              margin: "10px",
            }}
          >
            الايمان طريق النصر
          </Typography>
          <Typography sx={{fontSize: "20px", margin: "30px"}}>
            درس “الإيمان طريق النصر” يركّز على أن الإيمان بالله تعالى هو الأساس
            الذي يُمهد لتحقق النصر في الدنيا والآخرة، ولا يتحقق النجاح الحقيقي
            إلا بالارتباط القوي بالله وطاعته.
          </Typography>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "20px",
              margin: "10px",
              color: "#438846",
            }}
          >
            ماذا تعلمت من هذا الدرس؟
          </Typography>
          <List>
            <ListItem>
              <Check
                sx={{
                  color: "rgba(37, 85, 40, 1)",
                  marginLeft: "10px",
                  fontSize: "30px",
                }}
              />
              <Typography sx={{fontSize: "20px"}}>
                الإيمان بالله هو الأساس الحقيقي للنصر وليس القوة المادية وحدها.
              </Typography>
            </ListItem>
            <ListItem>
              <Check
                sx={{
                  color: "rgba(37, 85, 40, 1)",
                  marginLeft: "10px",
                  fontSize: "30px",
                }}
              />
              <Typography sx={{fontSize: "20px"}}>
                الإيمان بالله هو الأساس الحقيقي للنصر وليس القوة المادية وحدها.
              </Typography>
            </ListItem>
            <ListItem>
              <Check
                sx={{
                  color: "rgba(37, 85, 40, 1)",
                  marginLeft: "10px",
                  fontSize: "30px",
                }}
              />
              <Typography sx={{fontSize: "20px"}}>
                الإيمان بالله هو الأساس الحقيقي للنصر وليس القوة المادية وحدها.
              </Typography>
            </ListItem>
            <ListItem>
              <Check
                sx={{
                  color: "rgba(37, 85, 40, 1)",
                  marginLeft: "10px",
                  fontSize: "30px",
                }}
              />
              <Typography sx={{fontSize: "20px"}}>
                الإيمان بالله هو الأساس الحقيقي للنصر وليس القوة المادية وحدها.
              </Typography>
            </ListItem>
          </List>
          <div
            style={{
              display: "flex",
              alignItems: "end",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                margin: "10px",
                color: "rgba(37, 85, 40, 1)",
              }}
            >
              ماذا طبقت من هذا الدرس
            </Typography>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              placeholder="اكتب رسالتك"
              style={{width: "400px", height: "60px", marginBottom: "20px"}}
            />
            <Button
              variant="contained"
              sx={{backgroundColor: "#255528", color: "white", width: "400px"}}
            >
              ارسال
            </Button>
          </div>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#255528",
              color: "white",
              width: "100%",
              marginTop: "50px",
              marginBottom: "50px",
            }}
          >
            الدخول للأختبار
          </Button>
        </div>
      </Container>
    </>
  );
}
