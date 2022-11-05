import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Community() {
  const [expanded, setExpanded] = React.useState(false);
  const [likeCount, setLikeCount] = React.useState(0);
  const [currentColor, setCurrentColor] = React.useState("gray");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const likeHandler = () => {
    if (currentColor === "gray") {
        setCurrentColor("red"); 
        setLikeCount(likeCount + 1);
    } else {
        setCurrentColor("gray");
        setLikeCount(likeCount - 1);
    }
  }

  return (
    <Box sx={{ flexGrow: 2 }}>
        <Grid align="center" justify="center" spacing={2}>

            <Grid item lg={4} md={6} sm={12} className="pt-5">
                <Card sx={{ maxWidth: 550, marginBottom: 5 }}>
                    <CardHeader
                        avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">K</Avatar>}
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                        }
                        title="Kiranpal Singh"
                        subheader="Oct 13, 2022 "
                        align="left"
                    />
                    <CardMedia
                        component="img"
                        height="100"
                        image="https://i0.wp.com/film-bunker.com/wp-content/uploads/2019/11/https___hypebeast.com_image_2019_09_dr-stone-documentary-hypebeast-exclusive-clip-00.jpg?fit=900%2C600&ssl=1"
                        alt="Cat"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        This impressive caption is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        </IconButton>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 550, marginBottom: 5  }}>
                    <CardHeader
                        avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">K</Avatar>}
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                        }
                        title="Kiranpal Singh"
                        subheader="Oct 13, 2022"
                        align="left"
                    />
                    <CardMedia
                        component="img"
                        height="100"
                        image="https://cdn.realsport101.com/images/ncavvykf/epicstream/5ea135606a956d7c42a3be45d565bc2d49736b3a-760x400.jpg"
                        alt="Cat"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        This impressive caption is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        </IconButton>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 550, marginBottom: 5  }}>
                    <CardHeader
                        avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">K</Avatar>}
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                        }
                        title="Kiranpal Singh"
                        subheader="Oct 13, 2022"
                        align="left"
                    />
                    <CardMedia
                        component="img"
                        height="100"
                        image="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/529a5634d48bc7956bd483407bdcc15bfe6dc92bd2df4e4c03905879a994510d._RI_V_TTW_.png"
                        alt="Cat"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        This impressive caption is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        {likeCount}
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon sx={{color: currentColor}} onClick={likeHandler} />
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    </Box>
  );
}
