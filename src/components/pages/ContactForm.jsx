import {ReCAPTCHA} from "react-google-recaptcha";
import {
    Typography,
    CardContent,
    TextField,
    InputAdornment,
    CardActions,
    Button,
    Grid
} from "@mui/material";
import {
    Face6Rounded,
    SubjectRounded,
    EmailRounded,
} from "@mui/icons-material";
import {useTheme} from "@mui/material/styles";
import {contactValidationSchema} from "../../validations/contactValidation";
import {useFormik} from "formik";

const ContactForm = () => {
    const theme = useTheme();
    const contactInputNames = {
        fullname: "",
        email: "",
        subject: "",
        message: "",
        recaptcha: "",
    }

    const formik = useFormik({
        initialValues: contactInputNames,
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: contactValidationSchema,
    })

    return(
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <CardContent>
              <Grid container>
                  <Grid container spacing={2}>
                      <Grid size={{xs: 12, md: 6}}>
                          <TextField
                              fullWidth
                              size="small"
                              color="warning"
                              label="نام و نام خانوادگی"
                              name="fullname"
                              variant="outlined"
                              helperText={formik.touched.fullname ? formik.errors.fullname : null}
                              error={Boolean(formik.errors.fullname && formik.touched.fullname)}
                              value={formik.values?.fullname}
                              onChange={formik.handleChange}
                              InputProps={{
                                  endAdornment: (
                                      <InputAdornment postion="end">
                                          <Face6Rounded/>
                                      </InputAdornment>
                                  ),
                              }}
                          />
                      </Grid>
                      <Grid size={{xs: 12, md: 6}}>
                          <TextField
                              fullWidth
                              size="small"
                              color="warning"
                              label="آدرس ایمیل"
                              name="email"
                              variant="outlined"
                              helperText={formik.touched.email ? formik.errors.email : null}
                              error={Boolean(formik.errors.email && formik.touched.email)}
                              value={formik.values?.email}
                              onChange={formik.handleChange}
                              InputProps={{
                                  endAdornment: (
                                      <InputAdornment postion="end">
                                          <EmailRounded/>
                                      </InputAdornment>
                                  ),
                              }}
                          />
                      </Grid>
                      <Grid size={{xs: 12, md: 12}}>
                          <TextField
                              fullWidth
                              size="small"
                              color="warning"
                              label="عنوان"
                              name="subject"
                              variant="outlined"
                              helperText={formik.touched.subject ? formik.errors.subject : null}
                              error={Boolean(formik.errors.subject && formik.touched.subject)}
                              value={formik.values?.subject}
                              onChange={formik.handleChange}
                              InputProps={{
                                  endAdornment: (
                                      <InputAdornment postion="end">
                                          <SubjectRounded/>
                                      </InputAdornment>
                                  ),
                              }}
                          />
                      </Grid>
                      <Grid size={{xs: 12, md: 12}}>
                          <TextField
                              fullWidth
                              multiline
                              rows={6}
                              size="small"
                              color="warning"
                              label="متن پیام"
                              name="message"
                              variant="outlined"
                              helperText={formik.touched.message ? formik.errors.message : null}
                              error={Boolean(formik.errors.message && formik.touched.message)}
                              value={formik.values?.message}
                              onChange={formik.handleChange}
                          />
                      </Grid>
                  </Grid>
              </Grid>
          </CardContent>
          <CardActions
              sx={{
                  alignItems: "end",
                  flexDirection: "column",
              }}
          >
              <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                         style={{ display: "inline-block" }}
                         theme={theme.palette.mode}
                         hl={"fa"}
                         onChange={value => {
                             formik.setFieldValue("recaptcha", value);
                         }}
              />
              {
                  formik.errors.recaptcha && formik.touched.recaptcha && (
                      <Typography variant={"caption"} color={"error"}>
                          {formik.errors.recaptcha}
                      </Typography>
                  )
              }
              <Button
                  type="submit"
                  color="success"
                  variant="contained"
                  sx={{mt: 2}}
                  fullWidth
              >
                  ارسال کن
              </Button>
          </CardActions>
      </form>
  )
}

export default ContactForm