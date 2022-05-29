import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import { RecoilRoot } from 'recoil';


import '../styles/cat-animation.scss';
import '../styles/navbar.scss';
import '../styles/globals.scss';
import '../styles/content.scss';
import '../styles/contact.scss';
import '../styles/about.scss';
import '../styles/skill.scss';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS

function MyApp({ Component, pageProps }) {
    return <RecoilRoot>
        <Component {...pageProps} />
    </RecoilRoot>


}

export default MyApp
