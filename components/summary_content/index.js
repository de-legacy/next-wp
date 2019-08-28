import Link from 'next/link'
import styles from './summary_content.style'
import { Parser as HtmlToReactParser } from 'html-to-react';
const htmlToReactParser = new HtmlToReactParser();

const SummaryContent = (props) => {
  const { title, slug, excerpt, date } = props;

  return (
    <div className="summary-content">
      <div className="content-left">
        <h1 className="content-title">
          <Link href={`${slug}`}>
           <a>{ title }</a>
          </Link>
        </h1>

        <time>{ new Date(date).toDateString() }</time>
      </div>

      <div className="content-right">
        { htmlToReactParser.parse(excerpt) }
      </div>

      <style jsx>
        {styles}
      </style>
    </div>
  )
}

export default SummaryContent;
