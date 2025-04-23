import Header from "./components/mainSections/Header";
import HeroSection from "./components/sections/HeroSection";
import Navigation from "./components/sections/Navigation";
import Page from "./components/mainSections/Page";
import TwitterLove from "./components/sections/TwitterLove";
import TwitterTestiminials from "./components/mainSections/TwitterTestiminials";
import Companies from "./components/sections/Comapanies";
import CohortLiveClassesAndStudentsFeedBAck from "./components/mainSections/CohortLiveClassesAndStudentsFeedBAck";
import LiveCourses from "./components/sections/LiveCourses";
import StudentsFeedback from "./components/sections/StudentsFeedback";
import UdemyAndCohortBenifits from "./components/mainSections/UdemyAndCohortBenifits";
import UdemyCourses from "./components/sections/UdemyCourses";
import CohortBenifits from "./components/sections/CohortBenifits";
import WhyChaiCodeMainSection from "./components/mainSections/WhyChaiCodeMainSection";
import WhyChaiCodeSectionCard  from "./components/sections/WhyChaiCodeSection";
import TopicCloudSocials from "./components/mainSections/TopicCloudSocials";
import TopicAndSocialSection from "./components/sections/TopicAndSocialSection";
import DiscordFreeApi from "./components/mainSections/DiscordFreeApi";
import DiscordSection from "./components/sections/DiscordSection";
import FreeApi from "./components/sections/FreeApi";
import FooterSection from "./components/mainSections/FooterSection";
import FooterMain from "./components/sections/Footer";


function App() {
  return <Page>
    <Header>
      <Navigation/>
      <HeroSection/>
    </Header>

  <TwitterTestiminials>
    <TwitterLove/>
    <Companies/>
  </TwitterTestiminials>


  <CohortLiveClassesAndStudentsFeedBAck>
    <LiveCourses/>
    <StudentsFeedback/>
  </CohortLiveClassesAndStudentsFeedBAck>


  <UdemyAndCohortBenifits>
    <UdemyCourses/>
    <CohortBenifits/>
  </UdemyAndCohortBenifits>


  <WhyChaiCodeMainSection>
    <WhyChaiCodeSectionCard/>
  </WhyChaiCodeMainSection>


  <TopicCloudSocials>
    <TopicAndSocialSection/>
  </TopicCloudSocials>

  <DiscordFreeApi>
    <DiscordSection/>
    <FreeApi/>
  </DiscordFreeApi>


  <FooterSection>
    <FooterMain/>
  </FooterSection>

  </Page>

}

export default App;
