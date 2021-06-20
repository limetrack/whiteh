import { forwardRef } from "react";
import PropTypes from "prop-types";
// material
import { useTheme } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

// ----------------------------------------------------------------------

const Logo = forwardRef(({ sx }, ref) => {
  const theme = useTheme();
  const PRIMARY_LIGHT = theme.palette.primary.light;
  const PRIMARY_MAIN = theme.palette.primary.main;
  const PRIMARY_DARK = theme.palette.primary.dark;

  return (
    <Box ref={ref} sx={{ width: 31, height: 22, transform: "scaleX(1.1)", cursor: "pointer", ...sx }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1055.02 745.06">
        <g>
          <path d="M960.37,5.89A134.27,134.27,0,0,0,793,94.15l-166.13,530c-12.44,32-33.74,60.19-62.08,76.66a6.05,6.05,0,0,0,0,10.42,245.33,245.33,0,0,0,30.16,15q10.13,4.2,20.78,7.54c117.79,36.93,242.49-19.12,295-126.78a245.87,245.87,0,0,0,13.76-34.58L1048.82,176C1071.07,105,1031.53,27.62,960.37,5.89Z" style={{ fill: PRIMARY_MAIN }}/>
          <path d="M603.25,572.35,728,174.48A134.28,134.28,0,0,0,471.72,94.15L370,418.68,310.86,607.32a200.66,200.66,0,0,1-22.93,49.33c-12,18.43-26.61,34.34-45.3,44.71l-.06,0a5.27,5.27,0,0,0-.13,9.15,243.53,243.53,0,0,0,31.29,15.64q10.11,4.2,20.78,7.54a245.69,245.69,0,0,0,208.94-29.19c36.13-23.69,69.61-58.73,87.35-97.59C595.89,595.79,598.12,586.29,603.25,572.35Z" style={{ fill: PRIMARY_MAIN }}/>
          <path d="M275.6,592.67l69.57-221.94a21.09,21.09,0,0,0,0-12.63l-82.74-264A134.27,134.27,0,1,0,6.19,174.48L130.9,572.35a245.64,245.64,0,0,0,64.3,103.91,12,12,0,0,0,14.71,1.46c23.81-14.92,41.29-33,54.1-57A162,162,0,0,0,275.6,592.67Z" style={{ fill: PRIMARY_MAIN }}/>
        </g>
      </svg>
    </Box>
  );
});

Logo.propTypes = {
  sx: PropTypes.object,
};

export default Logo;
