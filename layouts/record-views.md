---
status: "stable"
last_updated: "2024-12-19"
---

# Record Views

Display information about a record in an interface

![](https://github.com/user-attachments/assets/de8b7955-d549-4a3c-b578-2c5f0f013030)

## Overview

Record views help users to easily scan for relevant record details and actions. They provide a structured way to display comprehensive information about a specific record while maintaining usability and visual hierarchy.

By default, each record type will have at least three views: Summary, News and Related Actions. The views are displayed as tabs under the record header. The Summary view is displayed by default when the user clicks on a record item from the record list. A record type could also have up to 20 additional customizable views to display information sourced from the record type.

### Key Principles
- **Scannable Design**: Use visual hierarchy and clear section headers to help users quickly find relevant information
- **Action Accessibility**: Place actions contextually where users expect to find them
- **Information Density**: Balance comprehensive information with readability
- **Consistent Patterns**: Apply consistent design patterns across all record views

## Design Patterns

### Basic Record View with Cards

This pattern uses the following techniques to create an easy-to-scan record view design:

- **Flush header** to differentiate it from page contents
- **Content cards** contrasted against a transparent background  
- **Clear section headers** for logical information grouping
- **Large label and value text** for easy reading and to fill up the page

**Best Practice**: Set a header background color in record view configurations to establish a bolder header style that stands out more from the view contents.

![Basic record view with cards pattern](https://docs.appian.com/suite/help/25.3/sail/ds-images/image34.png)

### Basic Record View (Alternative)

This record view design focuses on showing data from a record and its related records:

- **Middle column cards** show record field values from the subject record and some of its one-to-one related records
- **Right column cards** show lists of one-to-many related records
- **Mixed layouts** within cards for different content types

**Best Practice**: Try not to mix different column counts or field label positions within one card as this could create visual misalignment. However, lengthier values, such as description fields, may look best when they span the full width of the card alongside shorter values that are arranged into multiple columns.

![Alternative record view pattern](https://docs.appian.com/suite/help/25.3/sail/ds-images/image72.png)

## Design

![](https://github.com/user-attachments/assets/7f797f36-e1e9-4615-a2b9-9c5e079f3bf4)

![](https://github.com/user-attachments/assets/18d041b7-aceb-4875-ab1f-ff0916cbdcd9)

The progress bar at the top immediately presents status. Also, notice the use of a two column layout with the wider column presenting important information and relevant metadata presented in the second and narrower column.

![](https://github.com/user-attachments/assets/9b4a3380-8bc0-4739-aa12-d778332cb24d)

A mix of horizontal and vertical tabs used to balance information density. Local action are presented as links in-context (on top of each card section).

![](https://github.com/user-attachments/assets/b7800b9c-5eb1-49e7-ac0b-018ada8f3d78)

The button label in the record view matches the verb in the form header. Also, the submit button label in the footer matches the verb in the form header.

## Planning and Strategy

**Note:**
- We recommend using at most 6 views in a record. 
- Before designing the views, set up a planning session with your PM. Establish how to group data in the views. Identify data elements that are related and how to meaningfully label that group in a section.
- Before designing a record view, set up a planning session with your PM to identify the essential data elements to showcase in the summary versus non-essential data elements that can be surfaced in a different view

## Design Guidelines Checklist

### Related Actions - Global Actions
|Item|Type|Details|
|--- |--- |--- |
|Place global actions next to the record header. Global actions affect the entire record. Examples include: "Update", "Update Status", Delete", "Export".|Related Actions|Global actions should be immediately accessible and clearly distinguished from local actions|
|Limit global actions as much as possible. A good rule of thumb is to not use more than 3 global actions.|Related Actions|Prevents cognitive overload and maintains clean header design|
|Avoid using icons in global actions.|Related Actions|Text labels provide clearer context for record-level operations|
|Display global actions on views where there is relevant content. Else, hide the action.|Related Actions|Context-sensitive display improves usability and reduces clutter|

### Related Actions - Local Actions  
|Item|Type|Details|
|--- |--- |--- |
|Place local actions next to where the data resides on the view. Examples include: "Update Team" for a Contract Record View with a section that has a list of teams.|Related Actions|Contextual placement makes actions discoverable when users need them|
|Use an icon for a local action if generally recognizable. Examples include Update, Delete or Create. Else, use a button with a label.|Related Actions|Icons save space for common actions; labels provide clarity for specific actions|
|Be consistent with local actions - either use "icon + label" or just "label". Avoid mixing the two styles.|Related Actions|Consistency creates predictable user experience across the interface|
|Don't display multiple related actions within a single location unless using a menu pattern|Related Actions|Prevents overcrowding and maintains clean section design|

### Action Labeling and Forms
|Item|Type|Details|
|--- |--- |--- |
|Start each action label with a verb. Example: "Update Status" instead of "Status"|Related Actions|Action-oriented language makes purpose clear to users|
|Use a display name that the user can clearly understand. Avoid using terms like "Manage <Record>" or "View Details".|Related Actions|Specific, descriptive labels improve usability and reduce confusion|
|Avoid unnecessary terms in the action label if the view name or record header is in immediate context. Example: for a record's global action, use "Update" instead of "Update <Record Name>".|Related Actions|Reduces redundancy and keeps labels concise|
|The action form header should match the action Display Name (button label)|Related Actions|Consistency between trigger and destination improves user confidence|
|The submit action of the form should match the form header. Example: If the form header is "Update Status", then the submit action of the form should state "Update"|Related Actions|Maintains consistent language throughout the user journey|
|Use a dialog size that matches the form content. Avoid using a Large dialog size for sparse form content.|Related Actions|Appropriate sizing improves visual balance and user focus|

### Views Configuration and Layout
|Item|Type|Details|
|--- |--- |--- |
|Treat Summary views as a Category 1 - Marketable UI|Views|Summary views require highest design quality as primary user touchpoint|
|Set the record header color to match the page background color (white or Default Background - #fafafc)|Views|Creates visual cohesion and proper contrast with content cards|
|Set the same page background color for all record view tabs|Views|Maintains consistency across different views of the same record|
|Set the record header to fixed if the user needs to know which tab they are in when scrolling in the view|Views|Provides context and navigation reference during scrolling|
|Avoid using the News view|Views|News view pattern is deprecated in favor of more specific content organization|
|Avoid using the Related Actions view unless you only have a summary view. If you only have a summary view, use the Related Actions view.|Views|Prevents redundant navigation; actions should be contextually placed|

### Content Organization and Hierarchy
|Item|Type|Details|
|--- |--- |--- |
|Place record progress or status at the top of the summary view|Views|Status information is critical for user decision-making and should be immediately visible|
|Use the summary view for immediate comprehension. Keep the content to the minimum information needed to highlight essential data, progress and actions.|Views|Summary should provide quick understanding without overwhelming detail|
|Use other record views to highlight data that is of intermittent importance. Examples include: Audit history, list of documents, list of users etc.|Views|Secondary views handle detailed or specialized information|
|Avoid using more than 6 record views in a record. Use a combination of Record Views and Tabs as Side Navigation to balance information density.|Views|Prevents tab overflow and maintains navigable interface|

### Layout Structure
|Item|Type|Details|
|--- |--- |--- |
|Depending on the information to display, use a one column or two column layout|Views|Layout should match content complexity and user scanning patterns|
|When using one column layout, center the component and set the width based on the amount of information to display. Use blank a!columnLayout()s to establish gutters on either side of the component.|Views|Centered layouts with appropriate gutters improve readability|
|When using two column layouts, set two different column widths for the content. The primary content should be wider (usually WIDE) than the second content column (usually NARROW_PLUS or MEDIUM).|Views|Establishes clear visual hierarchy between primary and secondary content|
|When using two column layouts, include high priority information in the primary and wider content area and move secondary priority information (e.g.: record metadata) to the second and narrower column.|Views|Prioritizes most important information in the primary visual flow|
|Avoid using three column layouts|Views|Three columns can create cramped layouts and poor mobile experience|

### Design Quality and Standards
|Item|Type|Details|
|--- |--- |--- |
|Unless agreed upon with your PM as a Category 1 - Marketable UI, treat other views as Category 2 - Usability Focused UIs.|Views|Establishes appropriate design investment level for different view types|
|Unless tagged as Category 1, use out of the box Appian SAIL components to display other views|Views|Maintains consistency and reduces development overhead for secondary views|
|Use content cards contrasted against transparent background for better visual separation|Views|Improves scannability and creates clear content boundaries|
|Implement clear section headers for logical information grouping|Views|Helps users navigate and understand information architecture|

## Development

### Record View

```
a!localVariables(
  local!status: "Active",
  local!isPrivate,
  local!opportunityStage: 1,
  local!sealedBid,
  local!hasAMorCW,
  local!hasLinkedSolicitation: true,
  local!hasLinkedEvaluation: true,
  local!documents: {
    a!flatten(
      a!forEach(
        enumerate(4),
        {
          a!map(name: "Document.pdf", type: "Required"),
          a!map(
            name: "Another Document.pdf",
            type: "Additional"
          )
        }
      )
    )
  },
  local!KPIs: {
    a!map(
      label: "Status",
      contents: local!status,
      backgroundColor: if(
        local!status = "Active",
        "#E3FBDF",
        local!status = "Draft",
        "#EDEEFA",
        "#EDEDF2"
      ),
      textColor: if(
        local!status = "Active",
        "#117C00",
        local!status = "Draft",
        "#152B99",
        "#2E2E35"
      )
    ),
    a!map(
      label: "Type",
      contents: if(
        local!status = "Draft",
        "-",
        "Combined Synopsis/Solicitation"
      ),

    ),
    a!map(
      label: "Opportunity Stage",
      contents: if(
        local!sealedBid,
        choose(
          local!opportunityStage,
          "Accepting Questions and Responses",
          "Accepting Responses",
          "Awaiting Unsealing",
          "Awaiting Unsealing",
          "Reviewing Responses"
        ),
        choose(
          local!opportunityStage,
          "Accepting Questions and Responses",
          "Accepting Responses",
          "Reviewing Responses"
        )
      ),

    ),
    a!map(
      label: "Sealed Bid",
      contents: if(
        local!status = "Draft",
        "-",
        {
          a!richTextIcon(
            icon: if(
              local!sealedBid,
              "check-circle",
              "times-circle"
            ),
            color: if(local!sealedBid, "#1CC101", "#6C6C75")
          ),
          if(local!sealedBid, " Yes", " No")
        }
      ),
      backgroundColor: "#E3FBDF",
      contentColor: "#1CC101"
    ),
    a!map(
      label: "Opportunity Visibility",
      contents: {
        if(
          local!status = "Draft",
          "-",
          {
            a!richTextIcon(
              icon: if(local!isPrivate, "lock", "globe-alt"),
              color: "#6C6C75"
            ),
            if(local!isPrivate, " Private", " Public")
          }
        )
      },
      backgroundColor: "#EDEDF2",
      contentColor: "#6C6C75"
    )
  },
  local!responseOverview: {
    a!map(
      label: "Submitted",
      count: if(local!status = "Draft", 0, 128),
      icon: "check",
      contentColor: "#117C00",
      backgroundColor: "#E3FBDF"
    ),
    a!map(
      label: "Interested",
      count: if(local!status = "Draft", 0, 325),
      icon: "tasks-alt",
      contentColor: "#790DA1",
      backgroundColor: "#F2E9FF"
    ),
    a!map(
      label: "In Progress",
      count: if(local!status = "Draft", 0, 31),
      icon: "spinner",
      contentColor: "#152B99",
      backgroundColor: "#EDEEFA"
    ),
    a!map(
      label: if(
        local!sealedBid,
        "Clarification",
        "Resubmission"
      ) & " Requested",
      count: if(local!status = "Draft", 0, 0),
      icon: "file-upload",
      contentColor: "#856C00",
      backgroundColor: "#FFF6C9"
    ),

  },
  local!keyDates: {
    a!map(
      label: "Questions Due",
      contents: if(
        local!status = "Draft",
        "- ",
        "July 15, 2025 • 2:00 PM EST"
      )
    ),
    a!map(
      label: "Responses Due",
      contents: if(
        local!status = "Draft",
        "- ",
        "Aug 15, 2025 • 2:00 PM EST"
      )
    ),
    a!map(
      label: "Posted Date",
      contents: if(local!status = "Draft", "-", "Mar 1, 2025")
    ),
    a!map(
      label: "SAM.gov Posted Date",
      contents: "-"
    )
  },
  local!details: {
    a!map(
      label: "Department / Agency",
      contents: "Department of Defense (DOD) - United States Army Contracting Command (ACC)"
    ),
    a!map(
      label: "Address",
      contents: "Army Cyber Command,
35200 3rd Ave
Augusta, Georgia 30905"
    )
  },
  local!description: "The U.S. Government is seeking qualified vendors to provide Cybersecurity Incident Response Support to strengthen its ability to detect, mitigate, and respond to cybersecurity incidents. As cyber threats continue to evolve, this effort will enhance the security posture of federal networks and critical systems. The selected vendor will work closely with government cybersecurity teams to identify vulnerabilities, contain threats, and implement best practices for cyber defense.

Key responsibilities include incident detection and analysis, where the contractor will monitor network traffic, identify anomalies, and assess potential security breaches. In the event of an attack, the team will provide incident containment and mitigation strategies to isolate affected systems and prevent further damage. Additionally, forensic analysis and threat hunting will be conducted to uncover malicious activities, analyze malware, and determine root causes of security incidents.

Beyond immediate incident response, the contractor will assist in remediation and recovery efforts, ensuring that affected systems are restored securely and that proper security controls are in place to prevent recurrence. This includes providing recommendations for security hardening, implementing patches, and improving threat intelligence sharing. The vendor will also be responsible for creating detailed incident reports and documentation, summarizing response actions, lessons learned, and long-term security improvements.

This effort requires on-site and remote support, depending on the nature of the incident and agency requirements. Personnel assigned to the contract must hold relevant cybersecurity certifications such as CISSP, CEH, or GCFA and demonstrate experience with federal security frameworks, including NIST 800-61, FISMA, and CISA directives. The selected vendor should be capable of working in high-pressure environments, responding to real-time cyber threats, and collaborating with multiple government stakeholders.

With the increasing sophistication of cyberattacks targeting government infrastructure, this initiative is critical to strengthening national cybersecurity resilience. The government is looking for a vendor that not only responds to incidents but also proactively enhances cyber defense strategies. Vendors with a strong track record in federal cybersecurity incident response are encouraged to submit proposals demonstrating their expertise, technical approach, and past performance in similar engagements.",
  local!instructions: "Interested vendors must submit a comprehensive proposal detailing their approach to Cybersecurity Incident Response Support. The Technical Proposal should outline the vendor’s methodology for detecting, analyzing, and mitigating cybersecurity incidents. It must also include the qualifications of key personnel, relevant certifications such as CISSP, CEH, or GCFA, and experience working within federal cybersecurity frameworks like NIST 800-61, FISMA, and CISA directives. Vendors should demonstrate their ability to provide both on-site and remote support, as well as their capability to respond to a wide range of cyber threats.

Additionally, proposals should address the vendor’s ability to support proactive threat hunting, cloud security incident response, and supply chain risk assessments. As threats continue to evolve, the government requires a contractor that can not only respond to incidents but also identify and mitigate potential vulnerabilities before they are exploited. Vendors should highlight their experience in monitoring multi-cloud environments, securing software supply chains, and implementing advanced threat detection techniques.

The Past Performance section should highlight the vendor’s experience supporting federal agencies in cybersecurity incident response. Offerors should provide summaries of previous engagements, showcasing their ability to respond to cyber incidents effectively, implement security improvements, and collaborate with government cybersecurity teams. Client references or performance evaluations from similar projects will strengthen the proposal. Demonstrated success in handling complex cyber threats, particularly within government or critical infrastructure environments, will be a key evaluation factor.

A Price Proposal must also be included, providing a detailed breakdown of labor categories, hourly rates, and total estimated costs. The government seeks cost-effective solutions that balance affordability with high-quality cybersecurity expertise. All proposals will be evaluated based on technical capability, past performance, and price reasonableness to ensure the selection of the most qualified vendor for this critical cybersecurity initiative.",
  local!updates: {
    a!map(
      title: "Clarification - Incident Response Scope Expansion",
      postedOn: "Jun 30, 2024",
      type: "Question and Answer",
      documents: 2,
      description: "This update clarifies the scope of work regarding cybersecurity incident response requirements. The scope now includes detailed requirements for proactive threat hunting and monthly security posture reporting. Additionally, all personnel are now required to have Top Secret clearance instead of the originally stated Secret clearance. This update provides further specificity on the contractor’s responsibilities in real-time threat detection and intelligence sharing."
    ),
    a!map(
      title: "Amendment 01 - Extension of Proposal Submission Deadline",
      postedOn: "Jun 5, 2024",
      type: "Amendment",
      documents: 3,
      description: "This amendment extends the proposal submission deadline by two weeks, from November 30, 2024, to December 14, 2024, at 5:00 PM EST. This extension provides additional time for vendors to address questions and incorporate recent clarifications regarding the contract’s technical requirements."
    ),
    a!map(
      title: "Resubmissions - Additional Requirements",
      postedOn: "Jun 1, 2024",
      type: "Proposal Resubmission",
      documents: 0,
      description: "This update clarifies the scope of work regarding cybersecurity incident response requirements. The scope now includes detailed requirements for proactive threat hunting and monthly security posture reporting. Additionally, all personnel are now required to have Top Secret clearance instead of the originally stated Secret clearance. This update provides further specificity on the contractor’s responsibilities in real-time threat detection and intelligence sharing."
    ),
    a!map(
      title: "Clarification - Incident Response Scope Expansion",
      postedOn: "May 28, 2024",
      type: "Question and Answer",
      documents: 1,
      description: "This update clarifies the scope of work regarding cybersecurity incident response requirements. The scope now includes detailed requirements for proactive threat hunting and monthly security posture reporting. Additionally, all personnel are now required to have Top Secret clearance instead of the originally stated Secret clearance. This update provides further specificity on the contractor’s responsibilities in real-time threat detection and intelligence sharing."
    ),
    a!map(
      title: "Clarification - Incident Response Scope Expansion",
      postedOn: "May 15, 2024",
      type: "Question and Answer",
      documents: 0,
      description: "This update clarifies the scope of work regarding cybersecurity incident response requirements. The scope now includes detailed requirements for proactive threat hunting and monthly security posture reporting. Additionally, all personnel are now required to have Top Secret clearance instead of the originally stated Secret clearance. This update provides further specificity on the contractor’s responsibilities in real-time threat detection and intelligence sharing."
    ),

  },
  local!attachments: {
    a!map(
      name: "Statement of Work (SOW)",
      date: "Mar 5, 2025",
      type: "Required",
      file: "PDF"
    ),
    a!map(
      name: "Performance Work Statement (PWS)",
      date: "Mar 5, 2025",
      type: "Required",
      file: "DOCX"
    ),
    a!map(
      name: "Pricing Template",
      date: "Mar 5, 2025",
      type: "Required",
      file: "XSLX"
    ),
    a!map(
      name: "Technical Proposal Template",
      date: "Mar 5, 2025",
      type: "Required",
      file: "PDF"
    ),
    a!map(
      name: "Past Performance Template",
      date: "Mar 5, 2025",
      type: "Required",
      file: "PDF"
    ),
    a!map(
      name: "Key Personnel Resume Template",
      date: "Mar 5, 2025",
      type: "Additional",
      file: "PDF"
    )
  },
  local!showUpdateDetails: false,
  a!headerContentLayout(
    contents: {
      a!columnsLayout(
        alignVertical: "BOTTOM",
        columns: {
          a!columnLayout(
            contents: a!sectionLayout(
              label: "HD940225R0010 | Cybersecurity Incident Response Support Services",
              labelSize: "MEDIUM_PLUS",
              labelColor: "STANDARD",
              marginAbove: "LESS",
              marginBelow: "NONE"
            ),
            width: "WIDE"
          ),
          a!columnLayout(
            contents: a!buttonArrayLayout(
              buttons: {
                a!buttonWidget(
                  label: "update opportunity",
                  size: "SMALL",
                  showWhen: local!status = "Draft"
                ),
                a!buttonWidget(
                  label: "amend notice",
                  size: "SMALL",
                  showWhen: local!status = "Active"
                ),
                a!buttonWidget(
                  label: "close opportunity",
                  size: "SMALL",
                  showWhen: local!status = "Active"
                ),
                a!buttonWidget(
                  label: "mark as uninterested",
                  size: "SMALL",
                  showWhen: local!status = "Interested"
                )
              },
              align: "END",
              marginBelow: "NONE"
            )
          )
        },
        marginBelow: "NONE"
      ),
      {
        a!cardGroupLayout(
          labelPosition: "COLLAPSED",
          marginAbove: "STANDARD",
          cardWidth: if(
            a!isPageWidth("DESKTOP_NARROW"),
            "NARROW_PLUS",
            "NARROW"
          ),
          cards: a!forEach(
            local!KPIs,
            a!cardLayout(
              shape: "SEMI_ROUNDED",
              borderColor: "#EDEDF2",
              padding: "STANDARD",
              contents: {
                a!richTextDisplayField(
                  labelPosition: "COLLAPSED",
                  preventWrapping: true,
                  value: a!richTextItem(text: fv!item.label, color: "#6C6C75"),
                  marginBelow: "EVEN_LESS"
                ),
                a!richTextDisplayField(
                  showWhen: fv!index <> 1,
                  labelPosition: "COLLAPSED",
                  preventWrapping: true,
                  value: a!richTextItem(text: fv!item.contents, size: "MEDIUM"),
                  marginBelow: "NONE"
                ),
                a!tagField(
                  labelPosition: "COLLAPSED",
                  marginBelow: "NONE",
                  showWhen: fv!index = 1,
                  tags: a!tagItem(
                    text: fv!item.contents,
                    backgroundColor: fv!item.backgroundColor,
                    textColor: fv!item.textColor
                  )
                )
              },
              showWhen: if(local!status = "Draft", fv!index <> 3, true)
            )
          )
        ),
        a!columnsLayout(
          stackWhen: {
            "PHONE",
            "TABLET_PORTRAIT",
            "TABLET_LANDSCAPE"
          },
          columns: {
            a!columnLayout(
              contents: {
                a!columnsLayout(
                  marginBelow: "MORE",
                  stackWhen: {
                    "DESKTOP_NARROW",
                    "TABLET_PORTRAIT",
                    "PHONE"
                  },
                  columns: {
                    a!forEach(
                      { 1, 2 },
                      a!columnLayout(
                        contents: {
                          a!headingField(
                            text: "Key Dates",
                            size: "SMALL",
                            headingTag: "H2",
                            fontWeight: "SEMI_BOLD",
                            marginAbove: "LESS",
                            marginBelow: "LESS",
                            showWhen: fv!index = 1
                          ),
                          a!sideBySideLayout(
                            stackWhen: "NEVER",
                            showWhen: fv!index = 2,
                            items: {
                              a!sideBySideItem(
                                item: a!headingField(
                                  text: "Response Overview",
                                  size: "SMALL",
                                  headingTag: "H2",
                                  fontWeight: "SEMI_BOLD",
                                  marginBelow: "NONE"
                                )
                              ),
                              a!sideBySideItem(
                                width: "MINIMIZE",
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(
                                      text: { "View Responses" },
                                      link: a!recordLink(
                                        dashboard: "",
                                        /* get the URL stub for the vendors tab */
                                        openLinkIn: "SAME_TAB"
                                      ),
                                      linkStyle: "STANDALONE"
                                    )
                                  }
                                )
                              )
                            },
                            alignVertical: "MIDDLE",
                            marginBelow: "LESS",
                            marginAbove: "LESS"
                          ),
                          a!cardLayout(
                            shape: "SEMI_ROUNDED",
                            padding: "STANDARD",
                            borderColor: "#EDEDF2",
                            height: if(
                              a!isPageWidth(
                                {
                                  "DESKTOP_NARROW",
                                  "TABLET_PORTRAIT",
                                  "PHONE"
                                }
                              ),
                              "AUTO",
                              "SHORT_PLUS"
                            ),
                            contents: if(
                              fv!index = 1,
                              a!columnsLayout(
                                columns: {
                                  a!forEach(
                                    { 1, 2 },
                                    a!columnLayout(
                                      contents: a!forEach(
                                        if(
                                          fv!index = 1,
                                          { local!keyDates[1], local!keyDates[3] },
                                          { local!keyDates[2], local!keyDates[4] }
                                        ),
                                        {
                                          a!richTextDisplayField(
                                            labelPosition: "COLLAPSED",
                                            value: {
                                              a!richTextItem(text: fv!item.label, color: "#6C6C75"),
                                              char(10),
                                              a!richTextItem(text: fv!item.contents, style: "STRONG")
                                            },
                                            marginBelow: if(
                                              a!isPageWidth(
                                                {
                                                  "DESKTOP_NARROW",
                                                  "TABLET_PORTRAIT",
                                                  "PHONE"
                                                }
                                              ),
                                              if(fv!isLast, "NONE", "STANDARD"),
                                              if(fv!isLast, "NONE", "MORE")
                                            )
                                          )
                                        }
                                      )
                                    )
                                  )
                                }
                              ),
                              {
                                a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  showWhen: local!sealedBid,
                                  value: {
                                    a!richTextItem(
                                      text: "Unsealed by James Bennett on Aug 15, 2025 2:31 PM EST",
                                      showWhen: and(
                                        local!sealedBid,
                                        local!opportunityStage = 5
                                      ),
                                      color: "#6C6C75"
                                    ),
                                    a!richTextItem(
                                      text: "Proposals can be unsealed starting Aug 15, 2025 2:00 PM EST",
                                      showWhen: and(
                                        local!sealedBid,
                                        local!opportunityStage = 4
                                      ),
                                      color: "#6C6C75"
                                    ),
                                    a!richTextItem(
                                      text: "Proposals are sealed until Aug 15, 2025 2:00 PM EST",
                                      showWhen: and(
                                        local!sealedBid,
                                        local!opportunityStage < 4
                                      ),
                                      color: "#6C6C75"
                                    )
                                  }
                                ),
                                a!columnsLayout(
                                  columns: {
                                    a!forEach(
                                      { 1, 2 },
                                      a!columnLayout(
                                        contents: a!forEach(
                                          if(
                                            fv!index = 1,
                                            {
                                              local!responseOverview[1],
                                              local!responseOverview[2]
                                            },
                                            {
                                              local!responseOverview[3],
                                              local!responseOverview[4]
                                            }
                                          ),
                                          a!sideBySideLayout(
                                            marginBelow: if(fv!isLast, "NONE", "STANDARD"),
                                            marginAbove: if(fv!isFirst, "NONE", "LESS"),
                                            items: {
                                              a!sideBySideItem(
                                                width: "MINIMIZE",
                                                item: a!stampField(
                                                  labelPosition: "COLLAPSED",
                                                  size: "TINY",
                                                  backgroundColor: fv!item.backgroundColor,
                                                  icon: fv!item.icon,
                                                  contentColor: fv!item.contentColor
                                                )
                                              ),
                                              a!sideBySideItem(
                                                item: a!richTextDisplayField(
                                                  labelPosition: "COLLAPSED",
                                                  value: {
                                                    a!richTextItem(text: fv!item.label, color: "#6C6C75"),
                                                    char(10),
                                                    a!richTextItem(text: fv!item.count, style: "STRONG")
                                                  },
                                                  marginBelow: "NONE"
                                                )
                                              )
                                            }
                                          )
                                        )
                                      )
                                    )
                                  },
                                  marginBelow: if(fv!isLast, "NONE", "STANDARD")
                                )
                              }
                            )
                          )
                        }
                      )
                    )
                  }
                ),
                a!headingField(
                  text: "Classification",
                  size: "SMALL",
                  headingTag: "H2",
                  fontWeight: "SEMI_BOLD",
                  marginAbove: "LESS",
                  marginBelow: "LESS"
                ),
                a!cardLayout(
                  contents: {
                    a!columnsLayout(
                      columns: {
                        a!columnLayout(
                          contents: {
                            a!richTextDisplayField(
                              labelPosition: "COLLAPSED",
                              value: {
                                a!richTextItem(
                                  text: "Original Set Aside",
                                  color: "#6C6C75"
                                )
                              },
                              marginBelow: "EVEN_LESS"
                            ),
                            a!richTextDisplayField(
                              labelPosition: "COLLAPSED",
                              value: {
                                a!richTextBulletedList(
                                  items: {
                                    "SBP Partial Small Business Set-Aside (FAR 19.5)",
                                    "HZC Historically Underutilized Business (HUBZone) Set-Aside (FAR 19.13)",
                                    "EDWOSB Economically Disadvantaged WOSB (EDWOSB) Program Set-Aside (FAR 19.15)"
                                  }
                                )
                              }
                            )
                          }
                        ),
                        a!columnLayout(
                          contents: {
                            a!richTextDisplayField(
                              labelPosition: "COLLAPSED",
                              value: {
                                a!richTextItem(text: "Codes", color: "#6C6C75")
                              },
                              marginBelow: "EVEN_LESS"
                            ),
                            a!sideBySideLayout(
                              items: {
                                a!sideBySideItem(
                                  item: a!richTextDisplayField(
                                    labelPosition: "COLLAPSED",
                                    value: {
                                      a!richTextItem(text: "PSC", size: "SMALL", style: "STRONG")
                                    },
                                    marginBelow: "NONE"
                                  ),
                                  width: "MINIMIZE"
                                ),
                                a!sideBySideItem(
                                  item: a!tagField(
                                    labelPosition: "COLLAPSED",
                                    tags: a!tagItem(
                                      text: "D399",
                                      backgroundColor: "#EDEDF2",
                                      textColor: "#2E2E35"
                                    ),
                                    size: "SMALL"
                                  )
                                )
                              },
                              marginBelow: "EVEN_LESS"
                            ),
                            a!richTextDisplayField(
                              labelPosition: "COLLAPSED",
                              value: "IT and Telecom - Other IT and Telecommunications"
                            ),
                            a!sideBySideLayout(
                              items: {
                                a!sideBySideItem(
                                  item: a!richTextDisplayField(
                                    labelPosition: "COLLAPSED",
                                    value: {
                                      a!richTextItem(
                                        text: "NAICS",
                                        size: "SMALL",
                                        style: "STRONG"
                                      )
                                    },
                                    marginBelow: "NONE"
                                  ),
                                  width: "MINIMIZE"
                                ),
                                a!sideBySideItem(
                                  item: a!tagField(
                                    labelPosition: "COLLAPSED",
                                    tags: a!tagItem(
                                      text: "541519",
                                      backgroundColor: "#EDEDF2",
                                      textColor: "#2E2E35"
                                    ),
                                    size: "SMALL"
                                  )
                                )
                              },
                              marginAbove: "LESS",
                              marginBelow: "EVEN_LESS"
                            ),
                            a!richTextDisplayField(
                              labelPosition: "COLLAPSED",
                              value: "Other Computer Related Services"
                            )
                          }
                        )
                      },
                      spacing: "SPARSE",
                      showDividers: not(a!isPageWidth("PHONE")),
                      showWhen: local!status <> "Draft"
                    ),
                    a!richTextDisplayField(
                      labelPosition: "COLLAPSED",
                      align: "CENTER",
                      value: "No classification available",
                      showWhen: local!status = "Draft",
                      marginBelow: "MORE"
                    )
                  },
                  height: "AUTO",
                  style: "NONE",
                  shape: "SEMI_ROUNDED",
                  padding: "STANDARD",
                  marginBelow: "MORE",
                  borderColor: "#EDEDF2"
                ),
                a!sideBySideLayout(
                  items: {
                    a!sideBySideItem(
                      item: a!headingField(
                        text: "Attachments",
                        size: "SMALL",
                        headingTag: "H2",
                        fontWeight: "SEMI_BOLD",
                        marginBelow: "NONE"
                      )
                    ),
                    a!sideBySideItem(
                      width: "MINIMIZE",
                      item: a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: a!richTextItem(
                          text: {
                            "View All (",
                            if(local!status = "Draft", 0, 10),
                            ")"
                          },
                          link: a!recordLink(
                            dashboard: "",
                            /* get the URL stub for the attachments tab */
                            openLinkIn: "SAME_TAB"
                          ),
                          linkStyle: "STANDALONE"
                        )
                      )
                    )
                  },
                  alignVertical: "MIDDLE",
                  marginBelow: "LESS",
                  marginAbove: "LESS"
                ),
                a!cardGroupLayout(
                  labelPosition: "COLLAPSED",
                  cardWidth: "NARROW_PLUS",
                  marginBelow: "MORE",
                  spacing: "DENSE",
                  cards: a!forEach(
                    local!attachments,
                    a!cardLayout(
                      borderColor: "#EDEDF2",
                      shape: "SEMI_ROUNDED",
                      padding: "STANDARD",
                      contents: {
                        a!sideBySideLayout(
                          marginBelow: "NONE",
                          items: {
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: a!richTextItem(
                                  text: fv!item.name,
                                  link: a!dynamicLink(),
                                  linkStyle: "STANDALONE"
                                ),
                                preventWrapping: true,
                                marginBelow: "NONE"
                              )
                            ),
                            a!sideBySideItem(
                              width: "MINIMIZE",
                              item: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                align: "RIGHT",
                                value: a!richTextIcon(
                                  icon: "download",
                                  link: a!dynamicLink(),
                                  linkStyle: "STANDALONE",
                                  altText: "Download " & fv!item.name
                                )
                              )
                            )
                          }
                        ),
                        a!richTextDisplayField(
                          labelPosition: "COLLAPSED",
                          preventWrapping: true,
                          marginBelow: "EVEN_LESS",
                          value: a!richTextItem(text: fv!item.date, color: "#6C6C75")
                        ),
                        a!tagField(
                          labelPosition: "COLLAPSED",
                          size: "SMALL",
                          tags: {
                            a!tagItem(
                              text: fv!item.type,
                              textColor: if(
                                fv!item.type = "Required",
                                "#152B99",
                                "#2E2E35"
                              ),
                              backgroundColor: if(
                                fv!item.type = "Required",
                                "#EDEEFA",
                                "#EDEDF2"
                              )
                            ),
                            a!tagItem(
                              text: fv!item.file,
                              textColor: "#2E2E35",
                              backgroundColor: "#EDEDF2"
                            )
                          }
                        )
                      }
                    )
                  ),
                  showWhen: local!status <> "Draft"
                ),
                a!headingField(
                  text: "Description",
                  size: "SMALL",
                  headingTag: "H2",
                  fontWeight: "SEMI_BOLD",
                  marginAbove: "LESS",
                  marginBelow: "LESS"
                ),
                a!cardLayout(
                  padding: "STANDARD",
                  borderColor: "#EDEDF2",
                  marginBelow: "MORE",
                  shape: "SEMI_ROUNDED",
                  contents: a!localVariables(
                    local!showMore: false,
                    a!richTextDisplayField(
                      labelPosition: "COLLAPSED",
                      value: {
                        a!richTextItem(
                          text: left(local!description, 800) & "... ",
                          showWhen: not(local!showMore)
                        ),
                        a!richTextItem(
                          text: local!description & " ",
                          showWhen: local!showMore
                        ),
                        a!richTextItem(
                          text: if(local!showMore, "Less", "More"),
                          link: a!dynamicLink(
                            value: not(local!showMore),
                            saveInto: local!showMore
                          ),
                          linkStyle: "STANDALONE",
                          style: "STRONG"
                        )
                      }
                    )
                  )
                ),
                a!headingField(
                  text: "Instructions",
                  size: "SMALL",
                  headingTag: "H2",
                  fontWeight: "SEMI_BOLD",
                  marginAbove: "LESS",
                  marginBelow: "LESS"
                ),
                a!cardLayout(
                  padding: "STANDARD",
                  borderColor: "#EDEDF2",
                  marginBelow: "MORE",
                  shape: "SEMI_ROUNDED",
                  contents: {
                    a!localVariables(
                      local!showMore: false,
                      a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: left(local!instructions, 800) & "... ",
                            showWhen: not(local!showMore)
                          ),
                          a!richTextItem(
                            text: local!instructions & " ",
                            showWhen: local!showMore
                          ),
                          a!richTextItem(
                            text: if(local!showMore, "Less", "More"),
                            link: a!dynamicLink(
                              value: not(local!showMore),
                              saveInto: local!showMore
                            ),
                            linkStyle: "STANDALONE",
                            style: "STRONG"
                          )
                        },
                        showWhen: local!status <> "Draft"
                      )
                    ),
                    a!richTextDisplayField(
                      labelPosition: "COLLAPSED",
                      align: "CENTER",
                      value: "No instructions available",
                      showWhen: local!status = "Draft",
                      marginBelow: "MORE"
                    )
                  }
                )
              }
            ),
            a!columnLayout(
              contents: {
                a!sideBySideLayout(
                  items: {
                    a!sideBySideItem(
                      item: a!headingField(
                        text: "Updates",
                        size: "SMALL",
                        headingTag: "H2",
                        fontWeight: "SEMI_BOLD",
                        marginBelow: "NONE"
                      )
                    ),
                    a!sideBySideItem(
                      showWhen: not(local!status = "Draft"),
                      width: "MINIMIZE",
                      item: a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: a!richTextItem(
                          text: { "Create Update" },
                          link: a!dynamicLink(),
                          linkStyle: "STANDALONE"
                        )
                      )
                    )
                  },
                  alignVertical: "MIDDLE",
                  marginBelow: "LESS",
                  marginAbove: "LESS",
                  spacing: "DENSE"
                ),
                a!cardLayout(
                  contents: if(
                    local!showUpdateDetails,
                    {
                      a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: {
                          a!richTextItem(
                            text: {
                              a!richTextIcon(icon: "arrow-left"),
                              " Back to all updates"
                            },
                            link: a!dynamicLink(
                              value: false,
                              saveInto: local!showUpdateDetails
                            ),
                            linkStyle: "STANDALONE"
                          )
                        }
                      ),
                      a!columnsLayout(
                        alignVertical: "MIDDLE",
                        columns: {
                          a!columnLayout(
                            width: "EXTRA_NARROW",
                            contents: a!cardLayout(
                              shape: "SEMI_ROUNDED",
                              style: "#F5F5F7",
                              showBorder: false,
                              contents: a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                align: "CENTER",
                                marginAbove: "STANDARD",
                                marginBelow: "STANDARD",
                                value: a!richTextIcon(
                                  icon: a!match(
                                    value: local!updates[1].type,
                                    equals: "Question and Answer",
                                    then: "commenting",
                                    equals: "Proposal Resubmission",
                                    then: "file-upload",
                                    default: "quote-left"
                                  ),
                                  color: "#6C6C75"
                                )
                              )
                            )
                          ),
                          a!columnLayout(
                            contents: {
                              a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: a!richTextItem(
                                  text: local!updates[1].title,
                                  style: "STRONG"
                                ),
                                marginBelow: "NONE"
                              ),
                              a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                marginBelow: "NONE",
                                value: {
                                  a!richTextItem(
                                    text: concat(
                                      " ",
                                      local!updates[1].type,
                                      " • ",
                                      local!updates[1].postedOn
                                    ),
                                    color: "#6C6C75"
                                  )
                                },
                                preventWrapping: true
                              )
                            }
                          )
                        }
                      ),
                      a!localVariables(
                        local!desc: local!updates[1].description,
                        local!show: true,
                        {
                          if(
                            local!show,
                            a!richTextDisplayField(
                              labelPosition: "COLLAPSED",
                              marginBelow: "STANDARD",
                              value: {
                                left(local!desc, 85),
                                "... ",
                                a!richTextItem(
                                  text: "More",
                                  link: a!dynamicLink(
                                    saveInto: a!save(local!show, not(local!show))
                                  ),
                                  linkStyle: "STANDALONE",
                                  color: "ACCENT",
                                  style: "STRONG"
                                )
                              }
                            ),
                            a!richTextDisplayField(
                              labelPosition: "COLLAPSED",
                              marginBelow: "STANDARD",
                              value: {
                                local!desc,
                                " ",
                                a!richTextItem(
                                  text: "Less",
                                  link: a!dynamicLink(
                                    saveInto: a!save(local!show, not(local!show))
                                  ),
                                  linkStyle: "STANDALONE",
                                  color: "ACCENT",
                                  style: "STRONG"
                                )
                              }
                            )
                          )
                        }
                      ),
                      a!gridField(
                        label: "Update Attachments",
                        data: local!documents,
                        columns: {
                          a!gridColumn(value: fv!row.name, ),
                          a!gridColumn(
                            width: "ICON",
                            value: a!richTextDisplayField(
                              labelPosition: "COLLAPSED",
                              value: a!richTextIcon(
                                icon: "download",
                                linkStyle: "STANDALONE",
                                link: a!dynamicLink()
                              )
                            )
                          )
                        }
                      )
                    },
                    {
                      a!forEach(
                        local!updates,
                        {
                          a!columnsLayout(
                            marginAbove: if(fv!isFirst, "NONE", "STANDARD"),
                            alignVertical: "MIDDLE",
                            stackWhen: "NEVER",
                            columns: {
                              a!columnLayout(
                                width: "EXTRA_NARROW",
                                contents: a!cardLayout(
                                  shape: "SEMI_ROUNDED",
                                  style: "#F5F5F7",
                                  showBorder: false,
                                  contents: a!richTextDisplayField(
                                    labelPosition: "COLLAPSED",
                                    align: "CENTER",
                                    marginAbove: "STANDARD",
                                    marginBelow: "STANDARD",
                                    value: a!richTextIcon(
                                      icon: a!match(
                                        value: fv!item.type,
                                        equals: "Question and Answer",
                                        then: "commenting",
                                        equals: "Proposal Resubmission",
                                        then: "file-upload",
                                        default: "quote-left"
                                      ),
                                      color: "#6C6C75",
                                      /*size: "MEDIUM"*/

                                    )
                                  )
                                )
                              ),
                              a!columnLayout(
                                contents: {
                                  a!richTextDisplayField(
                                    labelPosition: "COLLAPSED",
                                    value: a!richTextItem(text: fv!item.title, style: "STRONG"),
                                    /*preventWrapping: true,*/
                                    marginBelow: "NONE"
                                  ),
                                  a!richTextDisplayField(
                                    labelPosition: "COLLAPSED",
                                    marginBelow: "NONE",
                                    value: {
                                      a!richTextItem(
                                        text: concat(
                                          " ",
                                          fv!item.type,
                                          " • ",
                                          fv!item.postedOn
                                        ),
                                        color: "#6C6C75"
                                      )
                                    },
                                    preventWrapping: true
                                  )
                                }
                              )
                            }
                          ),
                          a!localVariables(
                            local!desc: fv!item.description,
                            local!show: true,
                            {
                              if(
                                local!show,
                                a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  marginBelow: if(fv!item.documents = 0, "STANDARD", "LESS"),
                                  value: {
                                    left(local!desc, 85),
                                    "... ",
                                    a!richTextItem(
                                      text: "More",
                                      link: a!dynamicLink(
                                        saveInto: a!save(local!show, not(local!show))
                                      ),
                                      linkStyle: "STANDALONE",
                                      color: "ACCENT",
                                      style: "STRONG"
                                    )
                                  }
                                ),
                                a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  marginBelow: if(fv!item.documents = 0, "STANDARD", "LESS"),
                                  value: {
                                    local!desc,
                                    " ",
                                    a!richTextItem(
                                      text: "Less",
                                      link: a!dynamicLink(
                                        saveInto: a!save(local!show, not(local!show))
                                      ),
                                      linkStyle: "STANDALONE",
                                      color: "ACCENT",
                                      style: "STRONG"
                                    )
                                  }
                                )
                              )
                            }
                          ),
                          a!sideBySideLayout(
                            showWhen: fv!item.documents <> 0,
                            items: {
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(
                                      text: "View Documents",
                                      link: a!dynamicLink(
                                        value: true,
                                        saveInto: local!showUpdateDetails
                                      ),
                                      linkStyle: "STANDALONE"
                                    )
                                  }
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(
                                item: a!tagField(
                                  labelPosition: "COLLAPSED",
                                  tags: {
                                    a!tagItem(
                                      text: "2",
                                      backgroundColor: "#EDEDF2",
                                      textColor: "#2E2E35"
                                    )
                                  },
                                  size: "SMALL"
                                )
                              )
                            }
                          ),
                          a!horizontalLine(
                            showWhen: not(fv!isLast),
                            marginAbove: "LESS",
                            marginBelow: "LESS"
                          )
                        }
                      )
                    }
                  ),
                  height: "AUTO",
                  style: "NONE",
                  shape: "SEMI_ROUNDED",
                  padding: "STANDARD",
                  marginBelow: "MORE",
                  borderColor: "#EDEDF2",

                ),
                a!headingField(
                  text: "Solicitation",
                  size: "SMALL",
                  headingTag: "H2",
                  fontWeight: "SEMI_BOLD",
                  showWhen: local!hasAMorCW,
                  marginAbove: "LESS",
                  marginBelow: "LESS"
                ),
                a!cardLayout(
                  contents: {
                    a!sideBySideLayout(
                      items: {
                        a!sideBySideItem(
                          item: a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: a!richTextItem(
                              text: "Cybersecurity Incident Response Support Services for the U.S. Army",
                              style: "STRONG"
                            ),
                            preventWrapping: true,
                            marginBelow: "NONE"
                          )
                        ),
                        a!sideBySideItem(
                          item: a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: a!richTextIcon(icon: "external-link"),
                            preventWrapping: true,
                            marginBelow: "NONE"
                          ),
                          width: "MINIMIZE"
                        )
                      },
                      showWhen: local!hasLinkedSolicitation,
                      marginBelow: "EVEN_LESS"
                    ),
                    a!richTextDisplayField(
                      labelPosition: "COLLAPSED",
                      value: a!richTextItem(text: "HD940225R0010", color: "#6C6C75"),
                      showWhen: local!hasLinkedSolicitation
                    ),
                    a!richTextDisplayField(
                      labelPosition: "COLLAPSED",
                      align: "CENTER",
                      value: "No solicitation available",
                      showWhen: not(local!hasLinkedSolicitation),
                      marginBelow: "MORE"
                    )
                  },
                  link: if(
                    local!hasLinkedSolicitation,
                    a!dynamicLink(),
                    {}
                  ),
                  showWhen: local!hasAMorCW,
                  shape: "SEMI_ROUNDED",
                  padding: "STANDARD",
                  marginBelow: "MORE",
                  borderColor: "#EDEDF2"
                ),
                a!sideBySideLayout(
                  marginBelow: "LESS",
                  items: {
                    a!sideBySideItem(
                      item: a!headingField(
                        text: "Evaluation",
                        size: "SMALL",
                        headingTag: "H2",
                        fontWeight: "SEMI_BOLD",
                        marginBelow: "NONE"
                      )
                    ),
                    a!sideBySideItem(
                      item: a!richTextDisplayField(
                        labelPosition: "COLLAPSED",
                        value: a!richTextItem(
                          text: "Create Evaluation",
                          link: a!dynamicLink(),
                          linkStyle: "STANDALONE"
                        )
                      ),
                      width: "MINIMIZE",
                      showWhen: not(local!hasLinkedEvaluation)
                    )
                  },
                  alignVertical: "MIDDLE",
                  marginAbove: "LESS"
                ),
                a!cardLayout(
                  contents: {
                    a!sideBySideLayout(
                      items: {
                        a!sideBySideItem(
                          item: a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: a!richTextItem(
                              text: "Cybersecurity Incident Response Support Services for the U.S. Army",
                              style: "STRONG"
                            ),
                            preventWrapping: true,
                            marginBelow: "NONE"
                          )
                        ),
                        a!sideBySideItem(
                          item: a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: a!richTextIcon(icon: "external-link"),
                            preventWrapping: true,
                            marginBelow: "NONE"
                          ),
                          width: "MINIMIZE"
                        )
                      },
                      showWhen: local!hasLinkedEvaluation,
                      marginBelow: "EVEN_LESS"
                    ),
                    a!richTextDisplayField(
                      labelPosition: "COLLAPSED",
                      value: a!richTextItem(text: "HD940225R0010", color: "#6C6C75"),
                      showWhen: local!hasLinkedEvaluation
                    ),
                    a!richTextDisplayField(
                      labelPosition: "COLLAPSED",
                      align: "CENTER",
                      value: "No evaluation available",
                      showWhen: not(local!hasLinkedEvaluation),
                      marginBelow: "MORE"
                    )
                  },
                  link: if(
                    local!hasLinkedEvaluation,
                    a!dynamicLink(),
                    {}
                  ),
                  shape: "SEMI_ROUNDED",
                  padding: "STANDARD",
                  marginBelow: "MORE",
                  borderColor: "#EDEDF2"
                ),
                a!headingField(
                  text: "Details",
                  size: "SMALL",
                  headingTag: "H2",
                  fontWeight: "SEMI_BOLD",
                  marginAbove: "LESS",
                  marginBelow: "LESS"
                ),
                a!cardLayout(
                  contents: {
                    a!forEach(
                      local!details,
                      {
                        a!richTextDisplayField(
                          labelPosition: "COLLAPSED",
                          value: a!richTextItem(text: fv!item.label, color: "#6C6C75"),
                          marginBelow: "EVEN_LESS",
                          showWhen: local!status <> "Draft"
                        ),
                        a!richTextDisplayField(
                          labelPosition: "COLLAPSED",
                          value: fv!item.contents,
                          showWhen: local!status <> "Draft"
                        )
                      }
                    ),
                    a!richTextDisplayField(
                      labelPosition: "COLLAPSED",
                      align: "CENTER",
                      value: "No details available",
                      showWhen: local!status = "Draft",
                      marginBelow: "MORE"
                    )
                  },
                  shape: "SEMI_ROUNDED",
                  padding: "STANDARD",
                  marginBelow: "STANDARD",
                  borderColor: "#EDEDF2"
                )
              },
              width: "MEDIUM"
            )
          },
          spacing: "SPARSE"
        )
      }
    },
    backgroundColor: "#FAFAFC"
  )
)
```
