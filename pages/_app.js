import App, { Container } from "next/app";
import { Provider } from "react-redux";
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import withReduxStore from '../lib/with-redux-store'


class NextWPBlogApp extends App {
  constructor(props) {
    super(props)
    this.persistor = persistStore(props.reduxStore)
  }

  // static async getInitialProps({ Component, router, ctx, req }) {
  //   const pageProps = Component.getInitialProps
  //     ? await Component.getInitialProps(ctx)
  //     : { };

  //   return { pageProps };
  // }

  // componentDidMount() {
  //   if (typeof localStorage.getItem('siteData') === 'undefined' || localStorage.getItem('siteData') === null) {
  //     site.getSiteInfo().then(siteData => {
  //       this.props.reduxStore.dispatch(setSiteInfo(siteData));
  //       localStorage.setItem('siteData', JSON.stringify(siteData));
  //     });
  //   }
  // }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <PersistGate
            loading={<Component {...pageProps} />}
            persistor={this.persistor}
          >
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(NextWPBlogApp);