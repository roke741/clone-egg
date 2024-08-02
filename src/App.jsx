import React , {useState} from 'react';
import Container from './components/Container';
import Navbar from './components/Navbar';
import Content from './components/Content';

import temario from '../curso_full_stack/temario.json';

function App() {
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  console.log('data:', temario.data.course.name);
  const courseName = temario.data.course.name;
  const modules = temario.data.plan.modules;
  const currentModule = modules[currentModuleIndex];
  const sections = currentModule.sections;
  const currentSection = sections[currentSectionIndex];
  const steps = currentSection.steps;
  const currentStep = steps[currentStepIndex];

  // const fetchTemario = async () => {
  //   try {
  //     const response = await fetch('/curso_full_stack/temario.json');
  //     const json = await response.json();
  //     return json;
  //     //setCourseName(json.data.course.name);
  //     //console.log('data del json:', json.data.plan.modules);
  //     //setModulesCourse(json.data.plan.modules); //se guarda en modules usestate
  //     //console.log('data de state:', modulesCourse);
  //     //updateLeccion(leccionNumber);
  //   } catch (error) {
  //     console.error('Error fetching temario:', error);
  //   }
  // };

  const handleNextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else if (currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
      setCurrentStepIndex(0);
    } else if (currentModuleIndex < modules.length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1);
      setCurrentSectionIndex(0);
      setCurrentStepIndex(0);
    }
  };

  const handlePreviousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    } else if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
      setCurrentStepIndex(sections[currentSectionIndex - 1].steps.length - 1);
    } else if (currentModuleIndex > 0) {
      setCurrentModuleIndex(currentModuleIndex - 1);
      setCurrentSectionIndex(modules[currentModuleIndex - 1].sections.length - 1);
      setCurrentStepIndex(modules[currentModuleIndex - 1].sections[sections.length - 1].steps.length - 1);
    }
  };

  return (
    <div>
      <Container>
        <header className='sticky top-0 bg-[#f8f8f8]'>
          <div className='mt-7 mb-2 '>
            <h3 className='font-semibold pt-4 text-sm'>{courseName}</h3>
          </div>
          <Navbar  title={currentSection.title} subtitle={currentStep.title} actionNext={handleNextStep} actionPrevious={handlePreviousStep} />
        </header>
        
        <Content subtitle={currentStep.title} idContent={currentStep._id} />
      </Container>
    </div>
  );
}

export default App;
