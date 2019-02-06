import * as React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import Link from '../components/Link/Link';
import Icon from '../components/Icon/Icon';

const Contact = () => (
  <Layout>
    <SEO title='Contact' />
    <h1>Contact</h1>
    <p>Welcome to page 2</p>
    <Icon icon='github' />
    <Icon icon='linkedin' />
    <Icon icon='messenger' />
    <Icon icon='instagram' />
    <Icon icon='skype' />
  </Layout>
);

export default Contact;
