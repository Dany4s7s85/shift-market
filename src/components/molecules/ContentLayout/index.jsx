import Grid from 'components/atoms/Grid';
import Heading from 'components/atoms/Heading';
import React from 'react';
import { ContentLayoutHolder, ContentHead } from './ContentLayout.styles';

function ContentLayout({ title, buttons, settings, children, noOfButtons }) {
  return (
    <ContentLayoutHolder settings={settings}>
      <ContentHead>
        <Heading level={2}>{title}</Heading>
        <Grid xs={noOfButtons} gap={20}>
          {buttons ?? null}
        </Grid>
      </ContentHead>
      {children}
    </ContentLayoutHolder>
  );
}

export default ContentLayout;
