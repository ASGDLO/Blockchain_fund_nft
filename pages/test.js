import React from "react";
import { ThemeProvider } from "../START_Website_NEXT/node_modules/theme-ui";
import theme from "../START_Website_NEXT/src/theme";

import SEO from "../START_Website_NEXT/src/components/seo.js";
import Layout from "/home/ethan/blockchain/nft2/nft-marketplace/START_Website_NEXT/src/components/layout.js";
import Banner from "START_Website_NEXT/src/sections/banner.js";
import KeyFeature from "START_Website_NEXT/src/sections/feature.js";
import ServiceSection from "START_Website_NEXT/src/sections/service-section.js";
import Feature from "START_Website_NEXT/src/sections/feature.js";
import CoreFeature from "START_Website_NEXT/src/sections/core-feature.js";
import WorkFlow from "START_Website_NEXT/src/sections/workflow.js";
import Package from "START_Website_NEXT/src/sections/package.js";
import TeamSection from "START_Website_NEXT/src/sections/team-section.js";
import TestimonialCard from "START_Website_NEXT/src/sections/testimonial.js";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Home | Startup Landing" />
        <Banner />
        <KeyFeature />
        <ServiceSection />
        <Feature />
        <CoreFeature />
        <WorkFlow />
        <Package />
        <TeamSection />
        <TestimonialCard />
      </Layout>
    </ThemeProvider>
  );
}
