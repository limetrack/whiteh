// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';// layouts
import MainLayout from "src/layouts/main";
// components
import Page from 'src/components/Page';
import { AboutHero, AboutWhat, AboutTeam, AboutVision, AboutTestimonials } from 'src/components/_external-pages/about';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));

// ----------------------------------------------------------------------

export default function About() {
  return (
    <MainLayout>
      <RootStyle title="About us | Minimal-UI">
        <AboutHero />
        <AboutWhat />
        <AboutVision />
        <Divider orientation="vertical" sx={{ my: 10, mx: 'auto', width: 2, height: 40 }} />
        <AboutTeam />
        <AboutTestimonials />
      </RootStyle>
    </MainLayout>
  );
}
