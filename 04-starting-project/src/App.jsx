import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {

  const [ projectsState, setProjectsState ] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks:[]
  })

  const handleAddTask = (text) => {
    setProjectsState( prev => {
      const newTask = {
        text,
        projectId: prev.selectedProjectId,
        id: Math.random()
      }
      return {
        ...prev,
        tasks: [...prev.tasks, newTask]
      }
    })
  }

  const handleNewProject = () => {
    setProjectsState( prev => {
      return {
        ...prev,
        selectedProjectId: null
      }
    })
  }

  const handleSelectProject = (id) => {
    setProjectsState( prev => {
      return {
        ...prev,
        selectedProjectId: id
      }
    })
  }

  const handleCancelProject = () => {
    setProjectsState( prev => {
      return {
        ...prev,
        selectedProjectId: undefined
      }
    })
  }

  const handleAddProject = (projectData) => {
    setProjectsState( prev => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [...prev.projects, newProject]
      }
    })
  }

  const handleDeleteProject = () => {
    setProjectsState( prev => {      
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: prev.projects.filter((project) => project.id !== prev.selectedProjectId)
      }
    })
  }

  const selectedProject = projectsState.projects.find( project => project.id === projectsState.selectedProjectId)

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject}/>

  projectsState.selectedProjectId === null ? (content = <NewProject onAddProject={handleAddProject} onCancelProject={handleCancelProject}/>) : projectsState.selectedProjectId === undefined && (content = <NoProjectSelected onNewProject={handleNewProject}/>)
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar 
        onNewProject={handleNewProject} 
        onSelectProject={handleSelectProject}
        projects={projectsState.projects}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
