import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import ColorLensIcon from "@mui/icons-material/ColorLens";

const Navbar = ({ handleTheme }) => {
  return (
    <AppBar color="secondary">
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }} variant="h6">
          Redux Todo
        </Typography>
        <Button
          onClick={handleTheme}
          endIcon={<ColorLensIcon />}
          variant="contained"
          size="small"
        >
          Change Theme
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
