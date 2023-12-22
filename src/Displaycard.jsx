import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import './App.css';


const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const Displaycard = ({data}) => {
  return (
    <div className="card">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {data.tickets[0].id}
          </Typography>
          <Typography variant="h5" component="div">
            {data.tickets[0].title}
          </Typography>
          <Typography variant="h5" component="div">
            {data.tickets[0].tag}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Displaycard;
