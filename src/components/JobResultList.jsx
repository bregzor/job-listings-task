import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { SearchContext } from "../context/SearchValueContext";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    display: "flex",
    flexDirection:"row",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

const CardListItem = styled.article`
  display: flex;
  flex-direction: column;
  background: #cacaca;
  margin-bottom: 20px;
  padding: 5%;
`;

export default function JobListItem() {
  const { resultData } = useContext(SearchContext);

  const classes = useStyles();

  const renderListItem = () => {
    return (
      <>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </>
    );
  };

  return (
    <>
      <List className={classes.root}>
    
        {
          resultData ? 
          resultData.map((job) => {
          return (
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                lineHeight: "140%",
              }}
              to={`/jobs/${job.id}`}
            >
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={job.company_logo} />
                </ListItemAvatar>
                <ListItemText
                  primary={job.type}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                          <h2>{job.title}</h2>
                      </Typography>
                      <a href={job.company_url}>Url</a>
                      <div style={{maxHeight:200, overflowY:"hidden"}} dangerouslySetInnerHTML={{ __html: job.description }} />
                    </React.Fragment>
                  }
                />
              </ListItem>
{/* 
              <CardListItem key={job.id}>
                <img src={job.company_logo} width={150} />
                <strong>{job.type}</strong>
                <h2>{job.title}</h2>
                <a href={job.company_url}>Url</a>
                <div dangerouslySetInnerHTML={{ __html: job.description }} />
              </CardListItem> */}
            </Link>
          );
        })
        : 
        <p>hej</p>
        }
      </List>
    </>
  );
}
