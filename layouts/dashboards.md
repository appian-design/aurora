---
status: "stable"
last_updated: "2024-02-05"
---

# Dashboards
Provide actionable insights from business data

![dashboards-first-example](https://github.com/user-attachments/assets/20b83725-caee-44a5-9028-a5dc1823db7c)


## Structure

![dashboards-structure-full-page](https://github.com/user-attachments/assets/5a2eb2b5-d15f-4701-9922-629579ce0048)

A dashboard aggregates data in order to highlight trends, statuses and alerts that enable users to take relevant action.

A dashboard’s structure should be governed by its purpose. When designing dashboards, think about what data to present, how to present it and what actions the user might take based on the data.

A dashboard is generally composed of one or more the following components:
* Filters (for parsing the data)
* Data representation (e.g.: KPIs, charts or tables)
* Actions

## Dashboard Design Checklist


### Filters

![dashboards-filters-example1](https://github.com/user-attachments/assets/13ff4669-fc3e-4a72-a7eb-76ec6d20a014)
Filters are placed on the side to signify its effect on both the grid and the KPIs.

![dashboards-filters-example2](https://github.com/user-attachments/assets/870c51e2-8dca-4183-b92f-28704b1bc193)
The grid and KPI filters are placed relative to what content they affect.

|Item|
|--- |
|For OOTB grids, use the out of the box record filter.|
|For other components that require filtering, use custom filters. Custom filter should always have a label with label position being set to "ABOVE"|
|All data used in filters should be visible on the component that it affects (e.g.: you should not have a grid filter for a data field that is not present in the grid.)|
|Ensure filters are placed at the correct hierarchy. A filter's location should clearly indicate which section of the interface they apply to.|
|Use a filter bar or sidebar for higher level filters|
|Use inline filters for filters that only affect one component of the interface|


### Data Representation

![dashboards-data-representation-example](https://github.com/user-attachments/assets/b2308982-88a9-4b33-8354-311e3df56cdb)
Combination of different data representations. Read more about Charts, KPIs, and Grids

|Item|
|--- |
|Read ASDS chart guidance to understand best practices when including charts in interfaces|
|Read ASDS KPI guidance to understand best practices when including KPIs in interfaces|
|Read ASDS Grids guidance to understand best practices when including grids in interfaces|
|If grid rows have links to a detailed view, links should be attached to the record identifier.|


### Actions

![dashboards-actions-example1](https://github.com/user-attachments/assets/f16e7868-8370-482c-ae45-67df27f3a6ff)
Action is in context with the data it will affect

![dashboards-actions-example2](https://github.com/user-attachments/assets/016a845d-c99a-444e-aee9-26be200975a3)
Edit Dashboard button is the most priminent action on the interface

|Item|
|--- |
|Place actions in context with the data that is used to help users determine whether or not to take action.|
|Make primary action the most heavily weighted visual component on the interface.|



