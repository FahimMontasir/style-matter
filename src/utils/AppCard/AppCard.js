import React from 'react';
import { Card, makeStyles, Typography, Avatar, CardHeader, CardMedia, CardContent } from '@material-ui/core';
import { motion } from "framer-motion"

const AppCard = ({ avatarUrl, avatarTitle, imageUrl, title, description, onClick, money }) => {
  const classes = useStyle();
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
    >
      <Card
        onClick={onClick}
        className={classes.root} elevation={4}>
        {avatarUrl && <CardHeader
          avatar={
            <Avatar aria-label="">
              <img src={avatarUrl} alt="" className={classes.avatar} />
            </Avatar>
          }
          title={avatarTitle}
          subheader="customer"

        />}
        {imageUrl && <CardMedia
          className={classes.media}
          title="Paella dish">
          <img
            className={classes.image}
            src={imageUrl} alt="service" />
        </CardMedia>
        }
        <CardContent>
          <Typography variant="h6" color="primary">{title}</Typography>
          <Typography variant="body2" className={classes.description}>{description}</Typography>
          {money && <Typography variant="body1" color="secondary">${money}</Typography>}
        </CardContent>
      </Card>
    </motion.div>

  )
}
export default AppCard;

const useStyle = makeStyles((theme) => ({
  root: {
    width: 270,
    margin: 10,
    cursor: "pointer"
  },
  avatar: {
    width: "100%"
  },
  image: {
    marginTop: 15,
    width: 200,
    height: 200,
    borderRadius: 100
  },
  description: {
    height: 60
  }
}));