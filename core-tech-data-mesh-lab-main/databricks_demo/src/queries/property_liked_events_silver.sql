-- This query creates a table `sandbox_core_tech.u_{your-username}.property_liked_events_silver` containing the cleaned favorite events data from the Event Portal
-- Materialized views are managed tables that store the results of a provided query.
CREATE OR REFRESH MATERIALIZED VIEW property_liked_events_silver 
TBLPROPERTIES ('delta.feature.timestampNtz' = 'supported') AS
SELECT 
  CONCAT(trace_id, ':', trace_span_id) AS event_id,
  user_id,
  event_timestamp AS liked_at,
  event:zpid :: LONG
FROM sandbox_core_tech.product_analytics_events.core_tech_client_events
WHERE 
  event_domain    = 'core-tech' AND
  event_id        = 'property-liked' -- Replace with your event ID