import {Component} from 'react'

import Loader from 'react-loader-spinner'

import {
  Select,
  AppContainer,
  Ul,
  LoaderContainer,
  FailureView,
  FailureImage,
  Head,
  Description,
  Button,
} from './styledComponents'
import ProjectItem from '../ProjectItem'
import Header from '../Header'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

const apiStatusConstants = {
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
  failure: 'FAILURE',
}

class Projects extends Component {
  state = {
    category: categoriesList[0].id,
    projectList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getProjectsData()
  }

  getProjectsData = async () => {
    const {category} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const apiUrl = `https://apis.ccbp.in/ps/projects?category=${category}`
    const response = await fetch(apiUrl)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)

      const updatedData = data.projects.map(each => ({
        name: each.name,
        imageUrl: each.image_url,
        id: each.id,
      }))

      this.setState({
        projectList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  getCategory = id => {
    this.setState({category: id}, this.getProjectsData)
  }

  onRetry = () => {
    this.getProjectsData()
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4656a1" width="50" height="50" />
    </LoaderContainer>
  )

  renderProjectsView = () => {
    const {projectList} = this.state
    return (
      <Ul>
        {projectList.map(each => (
          <ProjectItem projectDetails={each} key={each.id} />
        ))}
      </Ul>
    )
  }

  renderHomeFailureView = () => (
    <FailureView className="failure-view">
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
        alt="failure view"
      />
      <Head>Oops! Something Went Wrong</Head>
      <Description>
        We cannot seem to find the page you are looking for
      </Description>
      <Button type="button" onClick={this.onRetry}>
        Retry
      </Button>
    </FailureView>
  )

  renderFinalView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProjectsView()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.failure:
        return this.renderHomeFailureView()
      default:
        return null
    }
  }

  render() {
    const {category} = this.state
    console.log(category)

    return (
      <AppContainer>
        <Header />
        <Select
          onChange={event => this.getCategory(event.target.value)}
          value={category}
        >
          {categoriesList.map(each => (
            <option key={each.id} value={each.id}>
              {each.displayText}
            </option>
          ))}
        </Select>
        {this.renderFinalView()}
      </AppContainer>
    )
  }
}

export default Projects
