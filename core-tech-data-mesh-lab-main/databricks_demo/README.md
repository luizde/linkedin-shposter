# Core Tech ZRetreat 2025 - Data Mesh Lab

---

Here you will find all required resources to complete the Databricks portion of today's Data Mesh lab!

This repo is a [Databricks Asset Bundle](https://docs.databricks.com/aws/en/dev-tools/bundles/), meaning that it is a collection of inter-related Databricks resources that are packaged together in a deployable project. This README will detail what is contained in this project and the development experience of working with it.

## What's Included?

- **Silver pipeline** used to clean and flatten property `property-liked` events data streamed in from the Event Portal
- **Gold pipeline** that enriches the event data with details on the property and user for use in recommendations
- **Dashboard** that visualizes the gold layer data in order to derive insights
- **Job** that orchestrates the refresh of the all of the above components (Not scheduled in this lab, but can be configured for scheduled refreshes)

## Organization
This project is organized in the following manner:
- `./databricks.yml` is used to define the bundle and configure each deployable environment. For this lab, the only target is `lab`, but in practice has targets for each of `lab`/`stage`/`prod`.
- `./src/queries` includes the queries that drive the silver and gold layer pipelines. Each pipeline uses Databricks `Materialized Views` to transform data from a source using simple SQL syntax.
- `./src/dashboards` includes the Property Liked Events Report dashboard that can be updated to explore and visualize the data output by your pipelines.
- `./resources` includes Databricks Asset Bundle resource definitions specifying the pipelines, dashboards, and jobs that should be provisioned as a part of this bundle.

### Development

- Click the **folder** icon in the left sidebar to open the file navigation menu.
- Development is only expected in the `./src` directory, as this includes the source code being executed in today's pipelines.
- `./src/dashboards/Property Liked Events Report` is a draft dashboard that can be modified directly in Databricks.
  - NOTE: This dashboard requires an update and uses data that is not yet available at the start of the lab, so be sure to revisit this after your first deployment and run!

### Deployment

- Click the **deployment rocket** 🚀 in the left sidebar to open the **Deployments** panel, then click **Deploy**.
- This will create each of the resources defined in this bundle prefixed with `[dev {username}]`. 
  - This enables each person completing this lab to have their own isolated instances of each of the packaged resources in this project.

#### Running the `property_liked_events_processing` Job

- To run your deployed property_liked_events_processing job, hover over `[dev {username}] property_liked_events_processing` in the *Jobs* section of the **Deployments** panel and click the **Run job** button.

#### Viewing the Property Liked Events Report

- As the final step of the `[dev {username}] property_liked_events_processing` job, your deployed `[dev {username}] Property Liked Events Report` will be automatically refreshed to pick up processed changes.
- Click on `property_liked_events_report` in the *Dashboards* section of the **Deployments** panel to see the published version of your dashboard. This can be shared with other members of the Core Tech Data Mesh lab, so feel free to play with the visualization options available to expand and grow your skills together!

### Cleanup

- At the conclusion of this lab, click the **deployment rocket** 🚀 in the left sidebar to open the **Deployments** panel, then click **Delete deployed resources** in the **'...'** dropdown.

## Additional Documentation

- [Pipeline development with DLT in Databricks](https://docs.databricks.com/aws/en/dlt/)
- [Orchestration using Databricks Jobs](https://docs.databricks.com/aws/en/jobs/)
- [AI/BI Dashboards](https://docs.databricks.com/aws/en/dashboards/)
- [Databricks Asset Bundles Configuration reference](https://docs.databricks.com/aws/en/dev-tools/bundles/reference)