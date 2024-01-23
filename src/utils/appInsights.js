"use client"

import { ApplicationInsights } from '@microsoft/applicationinsights-web';

const appInsights = new ApplicationInsights({
  config: {
    instrumentationKey: process.env.APPLICATION_INSIGHTS_INSTRUMENTATION_KEY,
    connectionString: process.env.APPLICATION_INSIGHTS_CONNECTION_STRING,
  }
});

appInsights.loadAppInsights();
appInsights.trackPageView();

export default appInsights;
