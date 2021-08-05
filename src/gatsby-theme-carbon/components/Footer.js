import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = ({ buildTime }) => (
  <>
    <p>
      Apache Licensed, 2021
    </p>
  </>
);

const links = {
  firstCol: [
    { href: 'https://github.com/stevemar/open-source-cloud-guide-carbon', linkText: 'Carbon' }  ]
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
