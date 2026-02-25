.App {
  font-family: sans-serif;
  text-align: center;
}
/* src/index.css */
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&family=Amiri+Quran&display=swap");

* {
  font-family: Cairo, sans-serif !important;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* إزالة outline الأزرق من كل الحقول */
input:focus,
textarea:focus,
select:focus,
button:focus {
  outline: none !important;
  box-shadow: none !important;
}

/* إزالة التأثير الأزرق من MUI */
.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
  border-color: #cccccc !important;
  border-width: 1.5px !important;
}

.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
  border-color: #cccccc !important;
}
