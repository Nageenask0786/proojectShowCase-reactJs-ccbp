import {Item, Div, ProjectName, Image} from './styledComponents'

const ProjectItem = props => {
  const {projectDetails} = props
  const {name, imageUrl} = projectDetails
  return (
    <Item>
      <Image src={imageUrl} alt={name} />
      <Div>
        <ProjectName>{name}</ProjectName>
      </Div>
    </Item>
  )
}

export default ProjectItem
