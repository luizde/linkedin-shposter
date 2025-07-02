/*
Using the provided template below, write a query that reads the data from your `property_liked_events_silver` table and enriches it with property information in order to create your gold table!

The property data used for this lab can be found in `sandbox_core_tech.zretreat_data_mesh_demo_2025.property`.

The following property columns are required for the dashboard included in this lab:
  - latitude
  - longitude

Other notable columns that you may want to use are:
  - full_address
  - price
  - sqft
  - bedrooms
  - bathrooms
  - description

You can find the full schema for the `property` table here: https://zg-core-tech-lab.cloud.databricks.com/explore/data/sandbox_core_tech/zretreat_data_mesh_demo_2025/property
*/

CREATE OR REFRESH MATERIALIZED VIEW property_liked_events_gold
TBLPROPERTIES ('delta.feature.timestampNtz' = 'supported') AS
SELECT
  event.event_id,
  event.user_id,
  event.liked_at,
  event.zpid
FROM ${catalog}.${schema}.property_liked_events_silver event