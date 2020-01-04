import * as React from 'react';
import {Layout, Header, Sidebar, Content} from 'baseui/layout';

export default () => {
  return (
    <Layout>
      <Header>Header content</Header>
      <Layout>
        <Sidebar collapsible>Menu content</Sidebar>
        <Content>Main content placeholder</Content>
      </Layout>
    </Layout>
  );
};