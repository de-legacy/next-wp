import App, { Container } from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import initStore from "../store/index";
import site from '../api/siteApi';
import { setSiteInfo } from '../actions/siteAction';


class NextWPBlogApp extends App {
  static async getInitialProps({ Component, router, ctx, req }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : { };

    return { pageProps };
  }

  componentDidMount() {
    if (typeof localStorage.getItem('siteData') === 'undefined' || localStorage.getItem('siteData') === null) {
      site.getSiteInfo().then(siteData => {
        this.props.store.dispatch(setSiteInfo(siteData));
        localStorage.setItem('siteData', JSON.stringify(siteData));
      });
    }
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(initStore)(NextWPBlogApp);