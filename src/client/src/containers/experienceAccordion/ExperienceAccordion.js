import React, {useState} from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";
import ProjectCard from "../../components/ProjectCard/ProjectCard.js";
import { projectsHeader, projects, socialMediaLinks } from "../../portfolio.js";


function ExperienceAccordion(props) {
  const theme = props.theme;
 const [renderI, setRenderI] = useState(false)

  return (
    <div className="experience-accord">
      <ThemeProvider theme={theme.name === "light" ? LightTheme : DarkTheme}>
        <Accordion onChange={({ expanded }) => console.log(expanded)}>
          {props.sections.map((section) => {
            return (
              <Panel
                className="accord-panel"
                title={section["title"]}
                key={section["title"]}
                
              >
                {section["experiences"].map((experience) => {
                  return (
                    <ExperienceCard experience={experience} theme={theme} />
                  );
                })}
              </Panel>
            );
          })}
            <Panel
                className="accord-panel2"
                title={"Projects"}
                key={"title2"}
              >
      <div className="repo-cards-div-main">
        {projects.data.map((repo) => {
          return <ProjectCard repo={repo} theme={theme} />;
        })}
      </div>
                     </Panel>
                 <Panel
                className="accord-panel3"
                title={"Interactive Draggable Workflow"}
                key={"title3"}
                onChange={()=> setRenderI(true)}
              >
                <div className="iFrame-Contain">
        {renderI ? <AyeFrames /> : null}
                </div>
                </Panel>
                <Panel
                className="accord-panel3"
                title={"Cases"}
                key={"title4"}
                onChange={()=> setRenderI(true)}
              >
                <div className="iFrame-Contain">
        {renderI ? <AyeFrames /> : null}
                </div>
                </Panel>
        </Accordion>
      </ThemeProvider>
    </div>
  );
}

class AyeFrames extends React.Component {
  render() {
    return <div dangerouslySetInnerHTML={{ __html: "<iframe style='width: 80vw; height: 80vh; background-color:#e4e4e4;'  src='https://visual-argo-workflows.vercel.app/' />"}} />;
  }
}


export default ExperienceAccordion;
