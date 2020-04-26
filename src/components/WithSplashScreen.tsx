import React, { Component } from 'react'
import Loading from './shared/Loading'

const WithSplashScreen = (WrappedComponent: any) => {
  return class extends Component {
    state = {
      loading: true,
    }

    async componentDidMount() {
      try {
        // make requests here?
        setTimeout(() => {
          this.setState({
            loading: false,
          })
        }, 3000)
      } catch (err) {
        console.log(err)
        this.setState({
          loading: false,
        })
      }
    }

    render() {
      if (this.state.loading) return <Loading noBackground />

      return <WrappedComponent {...this.props} />
    }
  }
}

export default WithSplashScreen
