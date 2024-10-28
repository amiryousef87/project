import React from "react";
import ReactPlayer from "react-player";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const attractions = [
  {
    name: "حرم امام رضا",
    description: "حرم امام رضا یکی از مهم‌ترین جاذبه‌های گردشگری مشهد است.",
    image:
      "../src/assess/Imam_reza_shrine_in_Mashhad_(Longitudinal_Cropped).jpg",
  },
  {
    name: "پارک ملت",
    description: "پارک ملت یکی از بزرگ‌ترین پارک‌های مشهد است.",
    image:
      "../src/assess/272099_645811_Thumbnail--درب-تئاتر-شهر-بوستان-ملت-.png",
  },
  {
    name: "موزه آستان قدس",
    description: "موزه آستان قدس حاوی آثار ارزشمند تاریخی است.",
    image: "../src/assess/10.jpg",
  },
  // اطلاعات سایر جاذبه‌ها در اینجا اضافه می‌شوند.
];

const App = () => {
  const handleTourClick = () => {
    // لینک به تور 360 درجه مشهد
    window.location.href = "https://www.example.com/virtual-tour";
  };

  return (
    <Box sx={{ position: "relative", overflow: "hidden", height: "100vh" }}>
      {/* اضافه کردن تصویر به عنوان پس‌زمینه */}
      <Box
        component="img"
        src="../src/assess/mashhad-attractions3.jpg" // آدرس تصویر پس‌زمینه
        alt="Background"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />

      {/* محتوای روی تصویر */}
      <Box
        sx={{
          padding: 4,
          backgroundColor: "rgba(255, 255, 255, 0.8)", // پس‌زمینه سفید با کمی شفافیت
          zIndex: 1,
        }}
      >
        <Typography
          variant="h2"
          align="center"
          sx={{ color: "#333", marginBottom: 4 }}
        >
          جاذبه‌های گردشگری مشهد
        </Typography>

        <Grid container spacing={3}>
          {attractions.map((attraction, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ boxShadow: 4 }}>
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {attraction.name}
                  </Typography>
                  <Typography>{attraction.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", marginTop: 4 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleTourClick}
            sx={{ padding: "10px 20px", borderRadius: "20px" }}
          >
            تور 360 درجه
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
