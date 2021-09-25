import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Banner from '../../images/banner.jpg';

const FirstLeftText = () => <p>About this guide
  <a className={calloutLink}
      href="/about">
      See the about page →
  </a>
</p>;

const FirstRightText = () => (
  <p> This guide will provide comprehensive learning for hybrid cloud and multicloud developers.
  As well as an agnostic view of how various clouds are using open source in their offerings.</p>
);

const SecondLeftText = () => <p>O'Reilly survey
<a className={calloutLink}
      href="https://developer.ibm.com/blogs/oreilly-open-source-skill-survey-blog">
      Read the full survey →
  </a>
</p>;

const SecondRightText = () => (
  <p>
    <i>Developers who want to develop cloud applications should work on honing their OSS skills (which underly every major cloud platform) instead of only focusing on building skills for a proprietary cloud.</i>
  </p>
);

const BannerText = () => <h1>Open Source Cloud Guide</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Banner} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
