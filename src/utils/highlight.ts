import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark-reasonable.css';

hljs.configure({
  languages: ['javascript', 'jsx', 'typescript', 'tsx', 'sh', 'bash', 'html', 'scss', 'css', 'json'],
});

if (typeof window !== 'undefined') {
  // @ts-ignore
  window.hljs = hljs;
}
