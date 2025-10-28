---
status: "stable"
last_updated: "2025-08-29"
---

# Colors

## Palette

The following is the complete color palette with named colors and their corresponding hex codes:

{% for color_family, color_list in data.colors.colors.items() %}
### {{ color_family.title() }}
{% for color in color_list %}
- <span class="color-chip" style="background-color: {{ color.hex }};"></span>{{ color.name }}: {{ color.hex }}
{% endfor %}

{% endfor %}
## Branding

When using these colors in SAIL, note that you should expect them to change based on the client's branding.

| Label | Default Color | Notes |
|-------|--------------|-------|
| Accent | Blue 3 | Used to highlight key interface elements. Avoid grayscale colors (black, white, and gray) that are similar to colors used for interface elements and green/red that are similar to colors used to indicate positive/negative values. |
| Default Background | #FAFAFC | Used for the page background color. |
| Dark Background | Blue 5 | Used to differentiate a page in dark mode, e.g. in portal backgrounds or reports. |
| Light Background | #E7F1FF | Used for secondary page backgrounds or content areas that need visual separation from the default background. |
| Navigation Bar | Blue 5 | Used for the background color of the site header behind the corporate logo and site tabs. Select a color with sufficient contrast against the text color. |
| Loading Bar | Blue 3 | Appears at the top of the site and gives users an idea of how long it will take the system to load a page or process an action. Usually set to the accent color. Select a color with sufficient contrast against the navigation bar color to ensure that users notice it. |
| Selected Highlight | #FFFFFF | Identifies the selected tab on sites. Select a color with sufficient contrast against the navigation bar color so that users can easily tell which tab is highlighted. |
| Email Header | Blue 5 | |
| Email Accent | Blue 3 | |

## Cards

Refer to Pattern Library > Cards for more guidance on card styling.

| Label | Default Styling | Notes |
|-------|----------------|-------|
| Card Shape | Semi-Rounded | Valid values: "SQUARED", "SEMI_ROUNDED", "ROUNDED". |
| Card Shadows | False | Determines if card shadows are shown. Valid values: true, false. Should be false if card is against a white background. |
| Card Borders | True | Determines if card borders are shown. Valid values: true, false. Should be true if card is against a white background. |
| Card Border Color | #EDEEFA | Used for the card border color. |
| Card Background | #FFFFFF | Used for the card background color. |
| Card Decorative Bar (Active) | Blue 3 | Used for clickable or active cards. |
| Card Decorative Bar (Informational) | Blue 3 | Used for static reference cards. |

## Stamps

| Label | Default Color | Notes |
|-------|--------------|-------|
| Stamp Primary Foreground | #FFFFFF | Used for the icon and/or text color. |
| Stamp Primary Background | #6C6C75 | Used for the background color. |
| Stamp Secondary Foreground | #2E2E35 | Used for the icon and/or text color in upcoming wizard steps. |
| Stamp Secondary Background | #EDEDF2 | Used for the background color in upcoming wizard steps. |
| Stamp Accent Foreground | #FFFFFF | Used for the icon and/or text color in completed or active wizard steps. |
| Stamp Accent Background | Blue 3 | Used for the background color in completed or active wizard steps. |

## Neutral Colors

| Label | Default Color | Notes |
|-------|--------------|-------|
| Neutral Foreground | #2E2E35 | Used for the tag text color. |
| Neutral Background | #EDEDF2 | Used for the tag background color. |
| Dividers | #DCDCE5 | |

## Semantic Colors

Used for message banners, colored tags, reference cards and icons.

| Label | Default Color |
|-------|--------------|
| Info Background | Sky 0 |
| Info Accent | Sky 35 |
| Positive Background | Green 0 |
| Positive Accent | Green 4 |
| Warning Background | Orange 0 |
| Warning Accent | Orange 35 |
| Negative Background | Red 0 |
| Negative Accent | Red 35 |

## Typography

| Label | Default Color |
|-------|--------------|
| Primary Text | Gray 5 |
| Secondary Text | Gray 4 |

## Charts

| Label | Default Colors | Notes |
|-------|---------------|-------|
| Primary Accent | Blue 3 | Used for progress bars, gauges or charts with only one color assigned. |
| Event History (Monotone) | #DCDCE5 | Default for stamps in an event history component. Used when event history component is embedded within a crowded interface. |
| Event History (Soft Theme) | #E9EDFC<br>Orange 1<br>Green 1<br>Purple 1<br>Yellow 1<br>#FFE7E7<br>Teal 1 | Used for stamps in an event history component only when event history component is on its own interface. Avoid using multiple colors if on a crowded interface. |
| Scaled Charts | #08088D<br>Blue 3<br>Teal 3<br>Green 3<br>Yellow 3<br>Orange 3<br>Red 4 | Used for charts where color is used to convey numeric meaning in a sequential order. |
| Categorical Charts (Standard) | Blue 3<br>Purple 3<br>Orange 3<br>Teal 3<br>Yellow 3 | Used for charts where color is used to differentiate between objects with non-numeric meaning. The standard palette is optimized to be more visually distinct for users with color vision deficiencies and can be used for charts that require up to 5 colors. |
| Categorical Charts (Expanded) | Blue 3<br>Purple 3<br>Orange 3<br>Teal 2<br>#AFBFF8<br>Purple 4<br>Teal 3<br>Orange 2 | Used for charts where color is used to differentiate between objects with non-numeric meaning. The expanded palette provides additional colors for charts that require more than 5 colors. |
| Reference Lines | #2E2E35<br>#6C6C75 | |
