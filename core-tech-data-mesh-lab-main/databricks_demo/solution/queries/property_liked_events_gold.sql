-- This query creates a table `sandbox_core_tech.u_{your-username}.property_liked_events_gold` containing the enriched `property-liked` events data from the silver layer table.
-- Materialized views are managed tables that store the results of a provided query.
CREATE OR REFRESH MATERIALIZED VIEW property_liked_events_gold
TBLPROPERTIES ('delta.feature.timestampNtz' = 'supported') AS
SELECT 
  event.event_id,
  event.user_id,
  event.liked_at,
  property.*
FROM ${catalog}.${schema}.property_liked_events_silver event
JOIN ${catalog}.zretreat_data_mesh_demo_2025.property
  ON event.zpid = property.zpid