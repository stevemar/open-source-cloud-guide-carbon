import React from 'react';
import { HomepageBanner, FeatureCard, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';
import BannerImage from '../../images/banner.jpg';

const FirstLeftText = () => <h2>About this guide
  <a className={calloutLink}
      href="/about">
      See the about page →
  </a>
</h2>;

const FirstRightText = () => (
  <p> This guide will provide comprehensive learning for hybrid cloud and multicloud developers.
  As well as an agnostic view of how various clouds are using open source in their offerings.</p>
);

const SecondLeftText = () => <p>
  <h3>Survey says ...</h3><br></br>
  <p>According to our <strong>O'Reilly Survey</strong>, Developers who want to develop cloud applications should work on honing their OSS skills (which underly every major cloud platform) instead of only focusing on building skills for a proprietary cloud.</p>
  <a className={calloutLink}
      href="https://developer.ibm.com/blogs/oreilly-open-source-skill-survey-blog">
      Read the full survey →
  </a>
</p>;

const SecondRightText = () => (
  <>
  <p><strong>94%</strong> of respondents rate open source software equal to or better than proprietary software.</p>
  <br></br>
  <p><strong>70%</strong> of respondents prefer choosing a cloud provider that is based on open source.</p>
  <br></br>
  <p><strong>65%</strong> of respondents agree completely that contributions to open source projects impress potential employers and result in better professional opportunities.</p>
  <br></br>
  </>
);

const BannerText = () => <h1>Open Source Cloud Guide</h1>;

const customProps = {
  Banner: (
    <>
      <FeatureCard
        color="dark"
        href="/about"
        title="Start the guide"
        subTitle="Ready to roll?"
        actionIcon="arrowRight"
        className="homepage-feature"
      >
        <HomepageBanner renderText={BannerText} image={BannerImage} />
      </FeatureCard>
    </>
  ),
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
