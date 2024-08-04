import React , {useState} from 'react';
import Container from './components/Container';
import Navbar from './components/Navbar';
import Content from './components/Content';
import MenuLeft from './components/MenuLeft';

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
    <div className='flex flex-col h-screen'>
      <MenuLeft />
      <Container>
        <header className='sticky top-0 bg-[#f8f8f8]'>
          <div className='mt-4 mb-2 flex items-center pt-4 gap-4'>
            <button className="hover:bg-gray-200 " >
              <svg  className="h-4" 
              role="img" xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 512 512"><path fill="currentColor" d="M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z"></path></svg>
            </button>
            <h3 className='font-semibold  text-sm'>{courseName}</h3>
          </div>
          <Navbar  title={currentSection.title} subtitle={currentStep.title} actionNext={handleNextStep} actionPrevious={handlePreviousStep} />
        </header>
        
        <Content subtitle={currentStep.title} idContent={currentStep._id} />
      </Container>
    </div>
  );
}

export default App;
