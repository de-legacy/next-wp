// import React, { PureComponent } from 'react'
// import HeadContent from '../../layouts/parts/headContent'
// import IndexLayout from 'layouts/indexLayout'
// import { getPosts } from 'actions/postsAction'
// import LoadingNotice from '../../components/loading_notice';

// export default class Blog extends PureComponent {
//   componentDidMount(){
//     this.props.getPosts();
//   }

//   render() {
//     const isStatusExists = typeof this.props.posts !== 'undefined' 
//       && typeof this.props.posts.meta !== 'undefined' ? this.props.posts.meta.status : 'loading';

//     return (
//       <>
//         <HeadContent title="Welcome to my site">
//           <meta name="keywords" content="React,Next,JavaScript" />
//         </HeadContent>

//         <IndexLayout>
//           <LoadingNotice status={isStatusExists}>
//             { JSON.stringify(this.props.posts) }
//           </LoadingNotice>
//         </IndexLayout>
//       </>
//     )
//   }
// }
