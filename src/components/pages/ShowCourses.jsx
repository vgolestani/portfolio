import {courses} from "../../constants/courses";
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Slide,
    Typography
} from "@mui/material";
import LinesEllipsis from "react-lines-ellipsis";

const ShowCourses = ({loading}) => {
  return(
      <>
          {
              courses.map((course, index) => (
                  <Grid size={{xs:12,sm:6,md:6,lg:4}} sx={{px:2, mb:2}}>
                      <Slide direction={"up"} in={loading} style={{
                          transitionDelay: loading ? `${index+3}99ms` : "0ms",
                      }}>
                          <Card sx={{maxWidth:400, backgroundColor:"steelblue"}}>
                              <CardActionArea>
                                  <CardMedia
                                      component={"img"}
                                      height={"250"}
                                      width={"200"}
                                      image={course.image}
                                      alt={course.title}
                                  />
                                  <CardContent>
                                      <Typography variant={"body1"} textAlign={"left"} gutterBottom>
                                          {course.title}
                                      </Typography>
                                      <Typography variant={"body2"} textAlign={"left"} color={"text.secondary"} gutterBottom>
                                          <LinesEllipsis
                                              text={course.info}
                                              maxLine='3'
                                              ellipsis='...'
                                              trimRight
                                              basedOn='letters'
                                          />
                                      </Typography>
                                  </CardContent>
                              </CardActionArea>
                              <CardActions>
                                  <Button href={course.link} size={"small"} color={"primary"} target={"_blank"}>اطلاعات بیشتر</Button>
                              </CardActions>
                          </Card>
                      </Slide>

                  </Grid>
              ))
          }
      </>
  )
}

export default ShowCourses;