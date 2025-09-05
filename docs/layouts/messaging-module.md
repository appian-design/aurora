---
status: "stable"
last_updated: "2025-09-05"
---

# Messaging Module

## Design
![](https://github.com/user-attachments/assets/c4a563e1-fb73-4ac3-8233-44b4182c5f9d)

### Guidance

- Put the number of unread messages next to the site tab name (i.e. “Messages (3)”)
- Messages should be truncated at 300 characters 
- For the site tab the user will only see threads in which they are a sender or recipient

### Empty State

#### No Messages Found On Search

![](https://github.com/user-attachments/assets/5d207b88-d8a3-4ab2-be13-8d2706354c96)

If the user searched for a message and no messages are found.

#### No Messages Received / Sent

![](https://github.com/user-attachments/assets/7d442db6-72cd-4ed5-b001-cff0c55325ed)

A simple message to let the user know they have have no received or sent messages.

#### Smart Summary Error State

![](https://github.com/user-attachments/assets/32e83b3c-f523-4999-8760-8d59e062650b)

Show this error state if the AI Smart Summary feature encounters any issues.

### Accessibility

#### Accessibility Text
- Specify "Selected" in the `accessibilityText` parameter of the Tab’s `a!cardLayout` to ensure screen readers identify the selected tab.
- Specify "Selected" in the `accessibilityText` parameter of the message’s `a!cardLayout` in the message list column to ensure screen readers identify the selected message.
- Ensure accessibility text of 'opens in a new window' for the `external-link` icon in the body of the message underneath the subject of the message.
- The 'View Full Message / View Less' links have accessibility text of the 'Name of the sender, date/time the message was sent.'
- 'View All' links needs accessibility text of the # of attachments (i.e. '5 attachments').

#### Captions
Ensure captions are on the pagination arrows of the list of messages.

## Development

### Example

```
a!localVariables(
  local!showHeaderFooter: false,
  local!summaryError: false,
  local!showEmptyList: 1,
  {
    a!cardLayout(
      contents: {
        a!sideBySideLayout(
          items: {
            a!sideBySideItem(
              item: a!richTextDisplayField(
                labelPosition: "COLLAPSED",
                value: a!richTextItem(
                  text: "Inbox",
                  size: "LARGE",
                  style: "STRONG"
                )
              ),
              width: "AUTO"
            ),
            a!sideBySideItem(
              item: a!buttonArrayLayout(
                buttons: {
                  a!buttonWidget(
                    label: "Compose Message",
                    saveInto: {
                      a!save(local!showHeaderFooter, true)
                      
                    },
                    style: "SOLID"
                  )
                },
                marginAbove: "EVEN_LESS"
              ),
              width: "MINIMIZE"
            )
          },
          marginAbove: "MORE",
          marginBelow: "NONE"
        ),
        /*Compose Message Form Here*/
        /* ----------- */
        a!cardLayout(
          contents: {
            a!columnsLayout(
              columns: {
                /*MESSAGES LIST*/
                a!columnLayout(
                  contents: {
                    /*SEARCH*/
                    a!sideBySideLayout(
                      items: {
                        a!sideBySideItem(
                          item: a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: { a!richTextIcon(icon: "search"), "  " }
                          ),
                          width: "MINIMIZE"
                        ),
                        a!sideBySideItem(
                          item: a!textField(
                            label: "Search Messages",
                            labelPosition: "COLLAPSED",
                            placeholder: "Search by Message Subject or Opportunity Title",
                            value: "Overdue request for proposals",
                            refreshAfter: "UNFOCUS",
                            validations: {}
                          ),
                          width: "AUTO"
                        ),
                        a!sideBySideItem(
                          item: a!buttonArrayLayout(
                            buttons: {
                              a!buttonWidget(
                                label: "Search",
                                size: "SMALL",
                                width: "MINIMIZE",
                                style: "OUTLINE",
                                color: "SECONDARY"
                              )
                            },
                            align: "START",
                            marginBelow: "NONE"
                          ),
                          width: "MINIMIZE"
                        )
                      },
                      alignVertical: "MIDDLE",
                      spacing: "DENSE",
                      marginAbove: "STANDARD",
                      marginBelow: "MORE"
                    ),
                    choose(
                      local!showEmptyList,
                      {
                        /*INBOX MESSAGE BODY*/
                        a!localVariables(
                          local!inboxListPagingInfo: a!pagingInfo(
                            startIndex: 1,
                            batchSize: 6,
                            sort: a!sortInfo(field: "user", ascending: true)
                          ),
                          local!inboxDetails: {
                            {
                              id: 1,
                              subject: "Attach New Documents",
                              people: "Julie Daniel, Reueben Humphrey, Merrick Kranz",
                              count: 9,
                              opportunity: "2031JW0000000043 | IT Operations Support",
                              receivedOn: "",
                              receivedTime: "3:20 PM",
                              isRead: true,
                              attachmentsPresent: true,
                              numOfAttachments: 5,
                              messageSelected: null()
                            },
                            {
                              id: 2,
                              subject: "Request for Proposals Needed",
                              people: "Julie Daniel, Reueben Humphrey, Eve Villa, Aubrey Cain, Angel Pierce",
                              count: 10,
                              opportunity: "F019--Bird Abatement Services at VA Central California Health Care System",
                              receivedOn: "",
                              receivedTime: "2:30 PM",
                              isRead: false,
                              attachmentsPresent: true,
                              numOfAttachments: 2,
                              messageSelected: null()
                            },
                            {
                              id: 3,
                              subject: "Strategic RFI for Advanced Integrated C4ISR Solutions to Enhance Net-Centricity in Multifaceted Battlespace Environments",
                              people: "Angel Pierce",
                              count: 4,
                              opportunity: "AMD 0001: Saudi Personal Service Contract (PSC) for Monitoring Construction Projects",
                              receivedOn: "",
                              receivedTime: "2:10 PM",
                              isRead: false,
                              attachmentsPresent: true,
                              numOfAttachments: 3,
                              messageSelected: null()
                            },
                            {
                              id: 4,
                              subject: "Request to Add Required Documents",
                              people: "Julie Daniel, Eve Villa",
                              count: 10,
                              opportunity: "DA10--AP4783 Software-Electronic Health Records-Image Sharing-VISN22",
                              receivedOn: "Oct 4",
                              isRead: false,
                              attachmentsPresent: false,
                              numOfAttachments: 5,
                              messageSelected: null()
                            },
                            {
                              id: 5,
                              subject: "New Description Added",
                              people: "Reueben Humphrey",
                              count: 7,
                              opportunity: "Q999--FY23: Locum Tenens Services- Infectious Diseases Physicians",
                              receivedOn: "Sep 23",
                              isRead: false,
                              attachmentsPresent: false,
                              numOfAttachments: 5,
                              messageSelected: null()
                            },
                            {
                              id: 6,
                              subject: "Request to Update Details",
                              people: "Aubrey Cain, Angel Pierce",
                              count: 6,
                              opportunity: "R606--Court Reporter Services Western States Network Consortium (WSNC)",
                              receivedOn: "Sep 22",
                              isRead: true,
                              attachmentsPresent: true,
                              numOfAttachments: 5,
                              messageSelected: null()
                            },
                            {
                              id: 7,
                              subject: "Request to check newly attached documents ",
                              people: "Eve Villa",
                              count: 14,
                              opportunity: "6515--Yakima CBOC Equipment Expansion/Replacement",
                              receivedOn: "Sep 21",
                              isRead: true,
                              attachmentsPresent: true,
                              numOfAttachments: 5,
                              messageSelected: null()
                            },
                            {
                              id: 8,
                              subject: "Request for Proposals Needed",
                              people: "Reueben Humphrey",
                              count: 14,
                              opportunity: "Design-Build for the Potter Stewart U.S. Courthouse Elevator Modernization",
                              receivedOn: "Sep 21",
                              isRead: true,
                              attachmentsPresent: false,
                              numOfAttachments: 5,
                              messageSelected: null()
                            },
                            {
                              id: 9,
                              subject: "New attachments added",
                              people: "Julie Daniel, Aubrey Cain",
                              count: 4,
                              opportunity: "AMD 0001: Saudi Personal Service Contract (PSC) for Monitoring Construction Projects",
                              receivedOn: "Sep 20",
                              receivedTime: "2:10 PM",
                              isRead: true,
                              attachmentsPresent: true,
                              numOfAttachments: 5,
                              messageSelected: null()
                            },
                            {
                              id: 10,
                              subject: "Request to add required documents",
                              people: "Angel Pierce",
                              count: 10,
                              opportunity: "DA10--AP4783 Software-Electronic Health Records-Image Sharing-VISN22",
                              receivedOn: "Sep 20",
                              isRead: true,
                              attachmentsPresent: false,
                              numOfAttachments: 5,
                              messageSelected: null()
                            },
                            {
                              id: 11,
                              subject: "New description added",
                              people: "Eve Villa, Aubrey Cain, Angel Pierce",
                              count: 7,
                              opportunity: "Q999--FY23: Locum Tenens Services- Infectious Diseases Physicians",
                              receivedOn: "Sep 18",
                              isRead: true,
                              attachmentsPresent: true,
                              numOfAttachments: 5,
                              messageSelected: null()
                            },
                            
                          },
                          local!pagedInboxList: todatasubset(
                            local!inboxDetails,
                            local!inboxListPagingInfo
                          ),
                          local!inboxSelectedId: 1,
                          {
                            a!forEach(
                              items: local!pagedInboxList,
                              expression: {
                                a!cardLayout(
                                  contents: {
                                    /*PEOPLE*/
                                    a!sideBySideLayout(
                                      items: {
                                        a!sideBySideItem(
                                          item: a!richTextDisplayField(
                                            labelPosition: "COLLAPSED",
                                            value: a!richTextItem(text: fv!item.people),
                                            preventWrapping: true
                                          )
                                        ),
                                        a!sideBySideItem(width: "MINIMIZE"),
                                        a!sideBySideItem(width: "MINIMIZE"),
                                        a!sideBySideItem(
                                          item: a!richTextDisplayField(
                                            labelPosition: "COLLAPSED",
                                            value: a!richTextItem(
                                              text: if(
                                                a!isNullOrEmpty(fv!item.receivedOn),
                                                fv!item.receivedTime,
                                                fv!item.receivedOn
                                              )
                                            )
                                          ),
                                          width: "MINIMIZE"
                                        )
                                      }
                                    ),
                                    /*SUBJECT*/
                                    a!sideBySideLayout(
                                      items: {
                                        a!sideBySideItem(
                                          item: a!richTextDisplayField(
                                            labelPosition: "COLLAPSED",
                                            value: {
                                              a!richTextIcon(
                                                icon: if(
                                                  toboolean(fv!item.isRead),
                                                  "circle-o",
                                                  "circle"
                                                ),
                                                caption: if(
                                                  toboolean(fv!item.isRead),
                                                  "Read",
                                                  "Unread"
                                                ),
                                                color: if(
                                                  toboolean(fv!item.isRead),
                                                  "SECONDARY",
                                                  "ACCENT"
                                                ),
                                                size: "STANDARD"
                                              )
                                            },
                                            preventWrapping: true
                                          ),
                                          width: "MINIMIZE"
                                        ),
                                        a!sideBySideItem(
                                          item: a!richTextDisplayField(
                                            labelPosition: "COLLAPSED",
                                            value: {
                                              a!richTextItem(
                                                text: fv!item.subject,
                                                size: "MEDIUM",
                                                style: "STRONG"
                                              )
                                            },
                                            preventWrapping: true
                                          ),
                                          width: "AUTO"
                                        )
                                      },
                                      alignVertical: "MIDDLE"
                                    ),
                                    /*REQUIREMENT*/
                                    a!sideBySideLayout(
                                      items: {
                                        a!sideBySideItem(
                                          item: a!richTextDisplayField(
                                            labelPosition: "COLLAPSED",
                                            value: {
                                              a!richTextItem(
                                                text: fv!item.opportunity,
                                                color: "STANDARD"
                                              )
                                            },
                                            preventWrapping: true
                                          ),
                                          width: "AUTO"
                                        ),
                                        a!sideBySideItem(
                                          item: a!richTextDisplayField(
                                            labelPosition: "COLLAPSED",
                                            value: {
                                              a!richTextIcon(
                                                icon: "paperclip",
                                                caption: "Contains " & fv!item.numOfAttachments & " attachment(s)",
                                                /*color: "#6C6C75",*/
                                                showWhen: if(
                                                  toboolean(fv!item.attachmentsPresent) = true,
                                                  true,
                                                  false
                                                ),
                                                size: "STANDARD"
                                              ),
                                              " ",
                                              a!richTextItem(
                                                text: fv!item.numOfAttachments,
                                                /*color: "#6C6C75",*/
                                                showWhen: if(
                                                  toboolean(fv!item.attachmentsPresent) = true,
                                                  true,
                                                  false
                                                )
                                              )
                                            }
                                          ),
                                          width: "MINIMIZE"
                                        ),
                                        a!sideBySideItem(
                                          item: a!richTextDisplayField(
                                            labelPosition: "COLLAPSED",
                                            value: {
                                              a!richTextItem(
                                                text: "•",
                                                showWhen: if(
                                                  toboolean(fv!item.attachmentsPresent) = true,
                                                  true,
                                                  false
                                                )
                                              )
                                            }
                                          ),
                                          width: "MINIMIZE"
                                        ),
                                        a!sideBySideItem(
                                          item: a!richTextDisplayField(
                                            labelPosition: "COLLAPSED",
                                            value: {
                                              a!richTextIcon(
                                                icon: "comments-o",
                                                caption: "Contains " & fv!item.count & " message(s) in this thread",
                                                size: "STANDARD"
                                              ),
                                              " ",
                                              a!richTextItem(
                                                text: fv!item.count
                                                
                                              )
                                            }
                                          ),
                                          width: "MINIMIZE"
                                        )
                                      },
                                      alignVertical: "MIDDLE"
                                    )
                                  },
                                  link: a!dynamicLink(
                                    value: if(
                                      toboolean(fv!item.isRead) = true,
                                      true,
                                      not(fv!item.isRead)
                                    ),
                                    saveInto: {
                                      fv!item.isRead,
                                      a!save(local!inboxSelectedId, fv!item.id),
                                      a!save(
                                        local!inboxDetails[local!inboxSelectedId].isRead,
                                        save!value
                                      )
                                    }
                                  ),
                                  style: if(
                                    tointeger(fv!item.id) = tointeger(local!inboxSelectedId),
                                    "#F5F9FF",
                                    "#FFFFFF"
                                  ),
                                  shape: "SQUARED",
                                  padding: "STANDARD",
                                  marginAbove: if(fv!isFirst, "NONE", "STANDARD"),
                                  marginBelow: "NONE",
                                  showBorder: false,
                                  showShadow: false,
                                  decorativeBarPosition: if(
                                    tointeger(fv!item.id) = tointeger(local!inboxSelectedId),
                                    "START",
                                    "NONE"
                                  ),
                                  decorativeBarColor: if(
                                    tointeger(fv!item.id) = tointeger(local!inboxSelectedId),
                                    "ACCENT",
                                    "#FFFFFF"
                                  ),
                                  accessibilityText: {
                                    if(
                                      and(
                                        toboolean(fv!item.isRead) = true,
                                        tointeger(fv!item.id) = tointeger(local!inboxSelectedId)
                                      ),
                                      "This message is selected and read",
                                      if(
                                        and(
                                          toboolean(fv!item.isRead) = false,
                                          tointeger(fv!item.id) = tointeger(local!inboxSelectedId)
                                        ),
                                        "This message is selected and unread",
                                        if(
                                          and(
                                            toboolean(fv!item.isRead) = true,
                                            tointeger(fv!item.id) <> tointeger(local!inboxSelectedId)
                                          ),
                                          "This message is not selected and read",
                                          "This message is not selected and unread"
                                        )
                                      )
                                    )
                                  }
                                ),
                                a!horizontalLine(
                                  marginAbove: "STANDARD",
                                  marginBelow: "NONE",
                                  showWhen: if(fv!isLast, false, true)
                                )
                              }
                            ),
                            /* INBOX MESSAGES PAGINATION*/
                            a!cardLayout(
                              contents: {
                                a!richTextDisplayField(
                                  labelPosition: "ABOVE",
                                  value: {
                                    a!richTextIcon(
                                      icon: "angle-left-bold",
                                      caption: if(
                                        local!inboxListPagingInfo.startIndex <> 1,
                                        "First page",
                                        ""
                                      ),
                                      link: a!dynamicLink(
                                        saveInto: {
                                          a!save(local!inboxListPagingInfo.startIndex, 1),
                                          a!save(
                                            local!pagedInboxList,
                                            todatasubset(
                                              arrayToPage: local!inboxDetails,
                                              pagingConfiguration: local!inboxListPagingInfo
                                            )
                                          )
                                        },
                                        showWhen: local!inboxListPagingInfo.startIndex <> 1
                                      ),
                                      linkStyle: "STANDALONE",
                                      color: if(
                                        local!inboxListPagingInfo.startIndex <> 1,
                                        "ACCENT",
                                        "SECONDARY"
                                      )
                                    ),
                                    " ",
                                    a!richTextIcon(
                                      icon: "angle-left",
                                      caption: if(
                                        local!inboxListPagingInfo.startIndex <> 1,
                                        "Previous Page",
                                        ""
                                      ),
                                      link: a!dynamicLink(
                                        saveInto: {
                                          a!save(
                                            local!inboxListPagingInfo.startIndex,
                                            if(
                                              local!inboxListPagingInfo.startIndex - local!inboxListPagingInfo.batchSize < 1,
                                              1,
                                              local!inboxListPagingInfo.startIndex - local!inboxListPagingInfo.batchSize
                                            )
                                          )
                                        },
                                        showWhen: local!inboxListPagingInfo.startIndex <> 1
                                      ),
                                      linkStyle: "STANDALONE",
                                      color: if(
                                        local!inboxListPagingInfo.startIndex <> 1,
                                        "ACCENT",
                                        "SECONDARY"
                                      )
                                    ),
                                    " ",
                                    a!richTextItem(
                                      text: {
                                        local!inboxListPagingInfo.startIndex,
                                        " - ",
                                        if(
                                          local!inboxListPagingInfo.startIndex + local!inboxListPagingInfo.batchSize - 1 > local!pagedInboxList.totalCount,
                                          local!pagedInboxList.totalCount,
                                          local!inboxListPagingInfo.startIndex + local!inboxListPagingInfo.batchSize - 1
                                        )
                                      },
                                      style: "STRONG"
                                    ),
                                    a!richTextItem(
                                      text: {
                                        " of ",
                                        fixed(local!pagedInboxList.totalCount, 0)
                                      }
                                    ),
                                    " ",
                                    a!richTextIcon(
                                      icon: "angle-right",
                                      caption: if(
                                        local!inboxListPagingInfo.startIndex + local!inboxListPagingInfo.batchSize - 1 < local!pagedInboxList.totalCount,
                                        "Next Page",
                                        ""
                                      ),
                                      link: a!dynamicLink(
                                        saveInto: {
                                          a!save(
                                            local!inboxListPagingInfo,
                                            a!pagingInfo(
                                              startIndex: local!inboxListPagingInfo.startIndex + local!inboxListPagingInfo.batchSize,
                                              batchSize: local!inboxListPagingInfo.batchSize
                                            )
                                          )
                                        },
                                        showWhen: local!inboxListPagingInfo.startIndex + local!inboxListPagingInfo.batchSize - 1 < local!pagedInboxList.totalCount
                                      ),
                                      linkStyle: "STANDALONE",
                                      color: if(
                                        local!inboxListPagingInfo.startIndex + local!inboxListPagingInfo.batchSize - 1 < local!pagedInboxList.totalCount,
                                        "ACCENT",
                                        "SECONDARY"
                                      )
                                    ),
                                    " ",
                                    a!richTextIcon(
                                      icon: "angle-right-bold",
                                      caption: if(
                                        local!inboxListPagingInfo.startIndex + local!inboxListPagingInfo.batchSize - 1 < local!pagedInboxList.totalCount,
                                        "Last Page",
                                        ""
                                      ),
                                      link: a!dynamicLink(
                                        saveInto: {
                                          a!save(
                                            local!inboxListPagingInfo.startIndex,
                                            if(
                                              mod(
                                                local!pagedInboxList.totalCount,
                                                local!inboxListPagingInfo.batchSize
                                              ) = 0,
                                              local!pagedInboxList.totalCount - local!inboxListPagingInfo.batchSize + 1,
                                              local!pagedInboxList.totalCount - mod(
                                                local!pagedInboxList.totalCount,
                                                local!inboxListPagingInfo.batchSize
                                              ) + 1
                                            )
                                          )
                                        },
                                        showWhen: local!inboxListPagingInfo.startIndex + local!inboxListPagingInfo.batchSize - 1 < local!pagedInboxList.totalCount
                                      ),
                                      linkStyle: "STANDALONE",
                                      color: if(
                                        local!inboxListPagingInfo.startIndex + local!inboxListPagingInfo.batchSize - 1 < local!pagedInboxList.totalCount,
                                        "ACCENT",
                                        "SECONDARY"
                                      )
                                    )
                                  },
                                  align: "RIGHT"
                                )
                              },
                              height: "AUTO",
                              style: "NONE",
                              padding: "NONE",
                              marginAbove: "STANDARD",
                              marginBelow: "NONE",
                              showBorder: false
                            )
                          }
                        )
                      },
                      {
                        a!cardLayout(
                          contents: {
                            a!richTextDisplayField(
                              labelPosition: "COLLAPSED",
                              value: {
                                a!richTextIcon(
                                  icon: "box-open",
                                  color: "#6C6C75",
                                  size: "LARGE_PLUS"
                                )
                              },
                              align: "CENTER",
                              marginAbove: "MORE"
                            ),
                            a!richTextDisplayField(
                              labelPosition: "COLLAPSED",
                              value: {
                                a!richTextItem(text: "No messages found")
                              },
                              align: "CENTER",
                              marginBelow: "MORE"
                            )
                          },
                          shape: "SEMI_ROUNDED",
                          padding: "STANDARD",
                          showBorder: true,
                          showShadow: false
                        )
                      }
                    )
                  },
                  width: if(
                    a!isPageWidth({ "DESKTOP_NARROW" }),
                    "7X",
                    "MEDIUM_PLUS"
                  )
                ),
                /*MESSAGE BODY*/
                a!columnLayout(
                  contents: {
                    choose(
                      local!showEmptyList,
                      /*INBOX MESSAGES FULL CONVERSATION LIST*/
                      a!localVariables(
                        local!messageDetails: {
                          {
                            id: 1,
                            initials: "BA",
                            sentBy: "Reuben Humphrey",
                            sentTime: "1:00 PM",
                            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                            isAttachmentsPresent: true,
                            showMore: false
                          },
                          {
                            id: 2,
                            initials: "LW",
                            sentBy: "Julie Daniel",
                            sentTime: "1:15 PM",
                            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                            isAttachmentsPresent: false,
                            showMore: false
                          },
                          {
                            id: 3,
                            initials: "BA",
                            sentBy: "Reuben Humphrey",
                            sentTime: "1:30 PM",
                            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis mattis nisl nec semper lacinia diam ac, maximus tortor. Proin fermentum vel ligula id volutpat.",
                            isAttachmentsPresent: false,
                            showMore: false
                          },
                          {
                            id: 4,
                            initials: "LW",
                            sentBy: "Julie Daniel",
                            sentTime: "1:50 PM",
                            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis mattis nisl nec semper lacinia diam ac, maximus tortor. Proin fermentum vel ligula id volutpat.",
                            isAttachmentsPresent: false,
                            showMore: false
                          },
                          {
                            id: 5,
                            initials: "BA",
                            sentBy: "Reuben Humphrey",
                            sentTime: "2:15 PM",
                            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                            isAttachmentsPresent: false(),
                            showMore: false
                          },
                          {
                            id: 6,
                            initials: "LW",
                            sentBy: "Julie Daniel",
                            sentTime: "2:30 PM",
                            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis mattis nisl nec semper lacinia diam ac, maximus tortor. Proin fermentum vel ligula id volutpat.",
                            isAttachmentsPresent: false,
                            showMore: false
                          },
                          {
                            id: 7,
                            initials: "LW",
                            sentBy: "Julie Daniel",
                            sentTime: "2:35 PM",
                            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis mattis nisl nec semper lacinia diam ac, maximus tortor. Proin fermentum vel ligula id volutpat.",
                            isAttachmentsPresent: false,
                            showMore: false
                          },
                          {
                            id: 8,
                            initials: "BA",
                            sentBy: "Reuben Humphrey",
                            sentTime: "2:45 PM",
                            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis mattis nisl nec semper lacinia diam ac, maximus tortor. Proin fermentum vel ligula id volutpat.",
                            isAttachmentsPresent: false,
                            showMore: false
                          },
                          {
                            id: 9,
                            initials: "LW",
                            sentBy: "Julie Daniel",
                            sentTime: "3:00 PM",
                            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                            isAttachmentsPresent: true,
                            showMore: false
                          }
                        },
                        local!count: count(local!messageDetails),
                        local!showReply: false,
                        local!showAllMessages: false,
                        local!composeType: { 1, 2 },
                        local!typeSave: 1,
                        local!templateNames: {
                          "Request for Proposal (RFP) Submission Deadline Reminder",
                          "Invitation to Bid on [Project Name]",
                          "Notice of Contract Award: [Contractor Name]",
                          "Important Update: Contract Modification [Contract Number]",
                          "Pre-Bid Conference Announcement for [Project Name]",
                          "Vendor Registration and Certification Process",
                          "Contract Performance Review Meeting Request",
                          "Upcoming Government Contract Opportunities",
                          "Solicitation Amendment Incoming",
                          "Notice of Intent to Sole Source Procurement"
                        },
                        local!savedTemplated,
                        local!row1Docs: {
                          a!map(
                            docName: "Strategic Defense Procurement Plan"
                          ),
                          a!map(
                            docName: "Infrastructure Expansion Blueprint"
                          ),
                          a!map(
                            docName: "Energy Grid Sustainability Report"
                          )
                        },
                        local!row2Docs: {
                          a!map(docName: "Maritime Security Assessment"),
                          a!map(
                            docName: "Cybersecurity Enhancement Proposal"
                          ),
                          a!map(docName: "Disaster Response Framework")
                        },
                        local!row3Docs: {
                          a!map(docName: "Aircraft Fleet Modernization"),
                          a!map(docName: "Resource Allocation Strategy"),
                          a!map(docName: "Satellite Communication Plan")
                        },
                        local!replyValue,
                        local!replySave,
                        {
                          a!cardLayout(
                            style: "NONE",
                            padding: "NONE",
                            showBorder: false,
                            contents: {
                              a!sectionLayout(
                                label: "Attach New Documents",
                                labelHeadingTag: "H2",
                                labelColor: "STANDARD",
                                marginAbove: "STANDARD",
                                marginBelow: "NONE",
                                contents: {
                                  a!richTextDisplayField(
                                    labelPosition: "COLLAPSED",
                                    value: {
                                      a!richTextItem(
                                        text: {
                                          a!richTextItem(
                                            text: {
                                              "NAVIFOR MOC TYCOM Support & IW Requirements and Programs"
                                            },
                                            
                                          ),
                                          "  ",
                                          a!richTextIcon(
                                            icon: "external-link",
                                            size: "SMALL",
                                            altText: "opens in a new window"
                                          )
                                        },
                                        link: a!dynamicLink(),
                                        linkStyle: "STANDALONE"
                                      )
                                    }
                                  ),
                                  a!buttonArrayLayout(
                                    align: "START",
                                    marginAbove: "LESS",
                                    buttons: {
                                      a!buttonWidget(
                                        label: "Reply",
                                        /*icon: "reply",*/
                                        style: "OUTLINE",
                                        color: "SECONDARY",
                                        size: "SMALL",
                                        saveInto: { a!save(local!showReply, true) },
                                        disabled: if(local!showReply = true, true, false)
                                      ),
                                      a!buttonWidget(
                                        label: "Mark as Unread",
                                        /*icon: "envelope-open",*/
                                        style: "OUTLINE",
                                        color: "SECONDARY",
                                        size: "SMALL",
                                        disabled: if(local!showReply = true, true, false)
                                      ),
                                      a!buttonWidget(
                                        label: "Expand",
                                        /*icon: "expand-alt",*/
                                        style: "OUTLINE",
                                        color: "SECONDARY",
                                        size: "SMALL",
                                        disabled: if(local!showReply = true, true, false)
                                      ),
                                      
                                    }
                                  ),
                                  /*REPLY MESSAGE FORM*/
                                  a!cardLayout(
                                    contents: {
                                      a!columnsLayout(
                                        columns: {
                                          a!columnLayout(
                                            contents: {
                                              a!textField(
                                                label: "Reply to",
                                                value: "Julie Daniel, Reuben Humphrey",
                                                readOnly: true,
                                                
                                              )
                                            }
                                          ),
                                          a!columnLayout(
                                            contents: {
                                              a!multipleDropdownField(
                                                label: "Additional Recipients",
                                                choiceValues: { 1, 2 },
                                                choiceLabels: { 1, 2 },
                                                value: local!replyValue,
                                                saveInto: local!replySave,
                                                placeholder: "Select additional recipients to reply to"
                                              ),
                                              
                                            }
                                          )
                                        }
                                      ),
                                      a!radioButtonField(
                                        label: "Compose a message using a...",
                                        /*labelPosition: "COLLAPSED",*/
                                        choiceLabels: { "Custom Message", "Templated Message" },
                                        choiceValues: local!composeType,
                                        value: local!typeSave,
                                        saveInto: local!typeSave,
                                        choiceLayout: "COMPACT",
                                        choiceStyle: "CARDS"
                                      ),
                                      a!dropdownField(
                                        label: "Template",
                                        labelPosition: "ABOVE",
                                        placeholder: "Select a Template",
                                        choiceLabels: local!templateNames,
                                        choiceValues: { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 },
                                        value: local!savedTemplated,
                                        saveInto: local!savedTemplated,
                                        searchDisplay: "AUTO",
                                        required: true,
                                        showWhen: local!typeSave = 2
                                      ),
                                      richTextFieldWithTables(
                                        label: "Message",
                                        labelPosition: "ABOVE",
                                        required: true,
                                        validations: {},
                                        height: "AUTO",
                                        richTextValue: null,
                                        richTextSaveInto: null,
                                        readOnly: null,
                                        maxSize: null,
                                        placeholder: null,
                                        tableBorderStyle: null,
                                        disabled: if(local!typeSave = 2, true, false)
                                      ),
                                      a!fileUploadField(
                                        label: "Attachments",
                                        labelPosition: "ABOVE",
                                        disabled: if(local!typeSave = 2, true, false),
                                        saveInto: {},
                                        validations: {}
                                      ),
                                      /*REPLY BUTTONS*/
                                      a!sectionLayout(
                                        label: "",
                                        contents: {
                                          /*BUTTONS*/
                                          a!sideBySideLayout(
                                            items: {
                                              a!sideBySideItem(
                                                item: a!buttonArrayLayout(
                                                  buttons: {
                                                    a!buttonWidget(
                                                      label: "Cancel",
                                                      saveInto: { a!save(local!showReply, false),  },
                                                      size: "SMALL",
                                                      style: "LINK"
                                                    )
                                                  },
                                                  align: "START"
                                                )
                                              ),
                                              a!sideBySideItem(
                                                item: a!buttonArrayLayout(
                                                  buttons: {
                                                    a!buttonWidget(
                                                      label: "Reply",
                                                      saveInto: { a!save(local!showReply, false) },
                                                      size: "SMALL",
                                                      style: "SOLID"
                                                    )
                                                  },
                                                  align: "END"
                                                )
                                              )
                                            },
                                            marginBelow: "NONE"
                                          )
                                        },
                                        divider: "ABOVE",
                                        marginAbove: "NONE",
                                        marginBelow: "NONE"
                                      )
                                    },
                                    marginBelow: "STANDARD",
                                    shape: "SEMI_ROUNDED",
                                    padding: "STANDARD",
                                    showBorder: true,
                                    style: "#F5F5F5",
                                    showWhen: local!showReply = true,
                                    
                                  ),
                                  /*SUMMARIZATION*/
                                  a!cardLayout(
                                    padding: "NONE",
                                    showBorder: false,
                                    marginAbove: "LESS",
                                    marginBelow: "LESS",
                                    contents: {
                                      /*SUMMARY CARD*/
                                      a!cardLayout(
                                        shape: "SEMI_ROUNDED",
                                        padding: "LESS",
                                        marginAbove: "NONE",
                                        style: "#F2F4FD",
                                        showBorder: false,
                                        showWhen: local!summaryError = false,
                                        contents: {
                                          a!richTextDisplayField(
                                            marginAbove: "LESS",
                                            labelPosition: "COLLAPSED",
                                            value: {
                                              a!richTextImage(
                                                image: a!webImage(
                                                  source: "https://raw.githubusercontent.com/pglevy/design-system-docs/main/assets/images/ai-imagery/sparkle-light-1.png"
                                                )
                                              ),
                                              " ",
                                              a!richTextItem(
                                                text: "AI Smart Summary",
                                                style: "STRONG",
                                                color: "#080887"
                                              ),
                                              " ",
                                              a!richTextIcon(
                                                icon: "question-circle",
                                                color: "ACCENT",
                                                caption: "This summary summarizes up to 11,000 characters in the thread"
                                              )
                                            }
                                          ),
                                          a!cardLayout(
                                            showBorder: false,
                                            shape: "SEMI_ROUNDED",
                                            marginBelow: "LESS",
                                            contents: {
                                              a!richTextDisplayField(
                                                labelPosition: "COLLAPSED",
                                                value: {
                                                  a!richTextItem(
                                                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna neque viverra justo nec ultrices dui."
                                                  )
                                                }
                                              )
                                            }
                                          )
                                        }
                                      ),
                                      /*SUMMARY CARD ERROR BANNER*/
                                      if(
                                        local!summaryError = true,
                                        rule!ASDS_Message_Banner_Component(
                                          type: "ERROR",
                                          contents: {
                                            a!richTextItem(
                                              text: "Summary Load Error. ",
                                              style: "STRONG"
                                            ),
                                            char(10),
                                            a!richTextItem(
                                              text: "Try again or contact your system administer to resolve the issue.",
                                              
                                            ),
                                            
                                          },
                                          link: "Learn more",
                                          buttons: null,
                                          showBackground: false,
                                          showIcon: false,
                                          
                                        ),
                                        null
                                      )
                                    }
                                  ),
                                  /*ALL ATTACHMENTS*/
                                  a!boxLayout(
                                    label: "All Attachments",
                                    isCollapsible: true,
                                    isInitiallyCollapsed: true,
                                    shape: "SEMI_ROUNDED",
                                    style: "#FFF",
                                    showBorder: true,
                                    marginAbove: "LESS",
                                    marginBelow: "LESS",
                                    padding: "LESS",
                                    contents: {
                                      a!columnsLayout(
                                        columns: {
                                          a!forEach(
                                            items: local!row1Docs,
                                            expression: {
                                              a!columnLayout(
                                                contents: {
                                                  a!cardLayout(
                                                    shape: "SEMI_ROUNDED",
                                                    padding: "STANDARD",
                                                    link: a!dynamicLink(),
                                                    contents: {
                                                      a!richTextDisplayField(
                                                        labelPosition: "COLLAPSED",
                                                        value: { a!richTextItem(text: fv!item.docName) },
                                                        preventWrapping: true,
                                                        marginBelow: "NONE"
                                                      ),
                                                      a!richTextDisplayField(
                                                        labelPosition: "COLLAPSED",
                                                        value: {
                                                          a!richTextIcon(
                                                            icon: "cloud-download",
                                                            color: "ACCENT",
                                                            linkStyle: "STANDALONE",
                                                            size: "SMALL"
                                                          ),
                                                          " ",
                                                          a!richTextItem(
                                                            text: "Download • 2MB",
                                                            color: "ACCENT",
                                                            linkStyle: "STANDALONE",
                                                            size: "SMALL"
                                                          )
                                                        },
                                                        preventWrapping: true
                                                      )
                                                    }
                                                  )
                                                }
                                              )
                                            }
                                          ),
                                          
                                        },
                                        spacing: "DENSE"
                                      ),
                                      a!columnsLayout(
                                        columns: {
                                          a!forEach(
                                            items: local!row2Docs,
                                            expression: {
                                              a!columnLayout(
                                                contents: {
                                                  a!cardLayout(
                                                    shape: "SEMI_ROUNDED",
                                                    padding: "STANDARD",
                                                    link: a!dynamicLink(),
                                                    contents: {
                                                      a!richTextDisplayField(
                                                        labelPosition: "COLLAPSED",
                                                        value: { a!richTextItem(text: fv!item.docName) },
                                                        preventWrapping: true,
                                                        marginBelow: "NONE"
                                                      ),
                                                      a!richTextDisplayField(
                                                        labelPosition: "COLLAPSED",
                                                        value: {
                                                          a!richTextIcon(
                                                            icon: "cloud-download",
                                                            color: "ACCENT",
                                                            linkStyle: "STANDALONE",
                                                            size: "SMALL"
                                                          ),
                                                          " ",
                                                          a!richTextItem(
                                                            text: "Download • 2MB",
                                                            color: "ACCENT",
                                                            linkStyle: "STANDALONE",
                                                            size: "SMALL"
                                                          )
                                                        },
                                                        preventWrapping: true
                                                      )
                                                    }
                                                  )
                                                }
                                              )
                                            }
                                          ),
                                          
                                        },
                                        spacing: "DENSE"
                                      ),
                                      a!columnsLayout(
                                        columns: {
                                          a!forEach(
                                            items: local!row3Docs,
                                            expression: {
                                              a!columnLayout(
                                                contents: {
                                                  a!cardLayout(
                                                    shape: "SEMI_ROUNDED",
                                                    padding: "STANDARD",
                                                    link: a!dynamicLink(),
                                                    contents: {
                                                      a!richTextDisplayField(
                                                        labelPosition: "COLLAPSED",
                                                        value: { a!richTextItem(text: fv!item.docName) },
                                                        preventWrapping: true,
                                                        marginBelow: "NONE"
                                                      ),
                                                      a!richTextDisplayField(
                                                        labelPosition: "COLLAPSED",
                                                        value: {
                                                          a!richTextIcon(
                                                            icon: "cloud-download",
                                                            color: "ACCENT",
                                                            linkStyle: "STANDALONE",
                                                            size: "SMALL"
                                                          ),
                                                          " ",
                                                          a!richTextItem(
                                                            text: "Download • 2MB",
                                                            color: "ACCENT",
                                                            linkStyle: "STANDALONE",
                                                            size: "SMALL"
                                                          )
                                                        },
                                                        preventWrapping: true
                                                      )
                                                    }
                                                  )
                                                }
                                              )
                                            }
                                          ),
                                          
                                        },
                                        spacing: "DENSE"
                                      )
                                    }
                                  ),
                                  /*MESSAGES LIST*/
                                  a!forEach(
                                    items: if(
                                      toboolean(local!showAllMessages) = true,
                                      reverse(
                                        a!forEach(
                                          items: (enumerate(local!count - 1) + 2),
                                          expression: local!messageDetails[fv!item]
                                        )
                                      ),
                                      {
                                        reverse(
                                          local!messageDetails[(enumerate(3) + (local!count - 4 + 2))]
                                        )
                                      }
                                    ),
                                    expression: {
                                      a!cardLayout(
                                        contents: {
                                          /*SENDER*/
                                          a!sideBySideLayout(
                                            items: {
                                              a!sideBySideItem(
                                                item: a!richTextDisplayField(
                                                  labelPosition: "COLLAPSED",
                                                  marginBelow: "NONE",
                                                  value: {
                                                    a!richTextItem(
                                                      text: fv!item.sentBy,
                                                      color: "STANDARD",
                                                      size: "MEDIUM",
                                                      style: "STRONG"
                                                    ),
                                                    
                                                  }
                                                ),
                                                width: "AUTO"
                                              ),
                                              a!sideBySideItem(
                                                width: "MINIMIZE",
                                                item: a!richTextDisplayField(
                                                  labelPosition: "COLLAPSED",
                                                  value: {
                                                    a!richTextItem(
                                                      text: if(
                                                        local!messageDetails[fv!item.id].showMore,
                                                        "View Less",
                                                        "View Full Message"
                                                      ),
                                                      link: a!dynamicLink(
                                                        saveInto: {
                                                          a!save(
                                                            local!messageDetails[fv!item.id].showMore,
                                                            not(
                                                              local!messageDetails[fv!item.id].showMore
                                                            )
                                                          )
                                                        }
                                                      ),
                                                      linkStyle: "STANDALONE",
                                                      
                                                    )
                                                  },
                                                  accessibilityText: "[insert name of sender, date/time the message was sent]"
                                                ),
                                                showWhen: len(fv!item.message) > 300
                                              ),
                                              a!sideBySideItem(
                                                width: "MINIMIZE",
                                                item: a!richTextDisplayField(
                                                  labelPosition: "COLLAPSED",
                                                  value: {
                                                    a!richTextItem(
                                                      text: { " May 18, 2023 • ", fv!item.sentTime },
                                                      color: "SECONDARY",
                                                      size: "STANDARD"
                                                    )
                                                  },
                                                  
                                                ),
                                                
                                              ),
                                              
                                            },
                                            alignVertical: "MIDDLE",
                                            marginAbove: "STANDARD",
                                            
                                          ),
                                          /*MESSAGE*/
                                          a!richTextDisplayField(
                                            labelPosition: "COLLAPSED",
                                            value: {
                                              a!richTextItem(
                                                text: {
                                                  if(
                                                    len(fv!item.message) <= 300,
                                                    fv!item.message,
                                                    if(
                                                      and(
                                                        toboolean(
                                                          local!messageDetails[fv!item.id].showMore
                                                        ) = true,
                                                        len(fv!item.message) > 300
                                                      ),
                                                      fv!item.message,
                                                      {
                                                        a!richTextItem(text: { leftb(fv!item.message, 300) }),
                                                        "..."
                                                      }
                                                    )
                                                  )
                                                }
                                              )
                                            },
                                            preventWrapping: false,
                                            marginAbove: "LESS",
                                            marginBelow: "STANDARD"
                                          ),
                                          /*ATTACHMENTS*/
                                          a!sideBySideLayout(
                                            items: {
                                              a!sideBySideItem(
                                                item: a!richTextDisplayField(
                                                  labelPosition: "COLLAPSED",
                                                  marginAbove: "NONE",
                                                  marginBelow: "NONE",
                                                  value: {
                                                    a!richTextItem(text: "5 attachments", style: "STRONG")
                                                  }
                                                ),
                                                
                                              ),
                                              a!sideBySideItem(
                                                width: "MINIMIZE",
                                                item: a!richTextDisplayField(
                                                  labelPosition: "COLLAPSED",
                                                  marginAbove: "NONE",
                                                  marginBelow: "NONE",
                                                  accessibilityText: "[insert number of attachments (i.e. 5 attachments)]",
                                                  value: a!richTextItem(
                                                    text: "View All",
                                                    link: a!dynamicLink(),
                                                    linkStyle: "STANDALONE"
                                                  )
                                                ),
                                                
                                              )
                                            },
                                            alignVertical: "MIDDLE",
                                            showWhen: toboolean(fv!item.isAttachmentsPresent) = true,
                                            marginAbove: "LESS",
                                            marginBelow: "NONE"
                                          ),
                                          a!columnsLayout(
                                            columns: {
                                              a!columnLayout(
                                                contents: {
                                                  a!cardLayout(
                                                    contents: {
                                                      a!columnsLayout(
                                                        columns: {
                                                          a!columnLayout(
                                                            contents: {
                                                              a!cardLayout(
                                                                contents: {
                                                                  a!richTextDisplayField(
                                                                    labelPosition: "COLLAPSED",
                                                                    value: a!richTextIcon(
                                                                      icon: "file-text-o",
                                                                      color: "#6C6C75",
                                                                      size: "MEDIUM_PLUS"
                                                                    ),
                                                                    align: "CENTER",
                                                                    marginAbove: "LESS",
                                                                    marginBelow: "LESS"
                                                                  )
                                                                },
                                                                style: "#EDEEF2",
                                                                /*padding: "STANDARD",*/
                                                                showBorder: false
                                                              )
                                                            },
                                                            width: "EXTRA_NARROW"
                                                          ),
                                                          a!columnLayout(
                                                            contents: {
                                                              a!cardLayout(
                                                                contents: {
                                                                  a!richTextDisplayField(
                                                                    labelPosition: "COLLAPSED",
                                                                    value: {
                                                                      a!richTextItem(text: "Proposal Addendum")
                                                                    },
                                                                    preventWrapping: true,
                                                                    marginBelow: "NONE"
                                                                  ),
                                                                  a!richTextDisplayField(
                                                                    labelPosition: "COLLAPSED",
                                                                    value: {
                                                                      a!richTextIcon(
                                                                        icon: "cloud-download",
                                                                        color: "ACCENT",
                                                                        linkStyle: "STANDALONE",
                                                                        size: "SMALL"
                                                                      ),
                                                                      " ",
                                                                      a!richTextItem(
                                                                        text: "Download • 2MB",
                                                                        color: "ACCENT",
                                                                        linkStyle: "STANDALONE",
                                                                        size: "SMALL"
                                                                      )
                                                                    },
                                                                    preventWrapping: true
                                                                  )
                                                                },
                                                                padding: "LESS",
                                                                showBorder: false
                                                              )
                                                            }
                                                          )
                                                        },
                                                        alignVertical: "MIDDLE",
                                                        spacing: "NONE"
                                                      )
                                                    },
                                                    shape: "SEMI_ROUNDED",
                                                    padding: "NONE",
                                                    marginBelow: "NONE",
                                                    showBorder: true,
                                                    showShadow: false,
                                                    link: a!dynamicLink()
                                                  )
                                                }
                                              ),
                                              a!columnLayout(
                                                contents: {
                                                  a!cardLayout(
                                                    contents: {
                                                      a!columnsLayout(
                                                        columns: {
                                                          a!columnLayout(
                                                            contents: {
                                                              a!cardLayout(
                                                                contents: {
                                                                  a!richTextDisplayField(
                                                                    labelPosition: "COLLAPSED",
                                                                    value: a!richTextIcon(
                                                                      icon: "file-text-o",
                                                                      color: "#6C6C75",
                                                                      size: "MEDIUM_PLUS"
                                                                    ),
                                                                    align: "CENTER",
                                                                    marginAbove: "LESS",
                                                                    marginBelow: "LESS"
                                                                  )
                                                                },
                                                                style: "#EDEEF2",
                                                                /*padding: "STANDARD",*/
                                                                showBorder: false
                                                              )
                                                            },
                                                            width: "EXTRA_NARROW"
                                                          ),
                                                          a!columnLayout(
                                                            contents: {
                                                              a!cardLayout(
                                                                contents: {
                                                                  a!richTextDisplayField(
                                                                    labelPosition: "COLLAPSED",
                                                                    value: {
                                                                      a!richTextItem(
                                                                        text: "CLOUD-29980 - Appian InfoSec Security Impact Analysis"
                                                                      )
                                                                    },
                                                                    preventWrapping: true,
                                                                    marginBelow: "NONE"
                                                                  ),
                                                                  a!richTextDisplayField(
                                                                    labelPosition: "COLLAPSED",
                                                                    value: {
                                                                      a!richTextIcon(
                                                                        icon: "cloud-download",
                                                                        color: "ACCENT",
                                                                        linkStyle: "STANDALONE",
                                                                        size: "SMALL"
                                                                      ),
                                                                      " ",
                                                                      a!richTextItem(
                                                                        text: "Download • 2MB",
                                                                        color: "ACCENT",
                                                                        linkStyle: "STANDALONE",
                                                                        size: "SMALL"
                                                                      )
                                                                    },
                                                                    preventWrapping: true
                                                                  )
                                                                },
                                                                padding: "LESS",
                                                                showBorder: false
                                                              )
                                                            }
                                                          )
                                                        },
                                                        alignVertical: "MIDDLE",
                                                        spacing: "NONE"
                                                      )
                                                    },
                                                    shape: "SEMI_ROUNDED",
                                                    padding: "NONE",
                                                    marginBelow: "NONE",
                                                    showBorder: true,
                                                    showShadow: false,
                                                    link: a!dynamicLink()
                                                  )
                                                }
                                              ),
                                              
                                            },
                                            marginAbove: "STANDARD",
                                            marginBelow: "STANDARD",
                                            showWhen: toboolean(fv!item.isAttachmentsPresent) = true,
                                            
                                          ),
                                          /*HORIZONTAL LINE*/
                                          a!horizontalLine(
                                            marginAbove: "STANDARD",
                                            marginBelow: "NONE",
                                            showWhen: if(
                                              and(fv!isLast, not(local!showAllMessages)),
                                              false,
                                              true
                                            )
                                          )
                                        },
                                        height: "AUTO",
                                        style: "TRANSPARENT",
                                        padding: "LESS",
                                        marginBelow: "NONE",
                                        marginAbove: "NONE",
                                        showBorder: false
                                      )
                                    }
                                  ),
                                  /*MESSAGE EXPANDER*/
                                  a!columnsLayout(
                                    columns: {
                                      a!columnLayout(
                                        contents: {
                                          a!horizontalLine(marginAbove: "STANDARD")
                                        }
                                      ),
                                      a!columnLayout(
                                        width: "NARROW",
                                        contents: {
                                          a!richTextDisplayField(
                                            labelPosition: "COLLAPSED",
                                            align: "CENTER",
                                            marginAbove: "NONE",
                                            marginBelow: "NONE",
                                            value: {
                                              a!richTextItem(
                                                text: "View 4 more messages",
                                                color: "ACCENT",
                                                style: "STRONG",
                                                link: a!dynamicLink(
                                                  saveInto: { a!save(local!showAllMessages, true) }
                                                ),
                                                linkStyle: "STANDALONE",
                                                showWhen: local!showAllMessages = false,
                                                
                                              )
                                            }
                                          )
                                        }
                                      ),
                                      a!columnLayout(
                                        contents: {
                                          a!horizontalLine(marginAbove: "STANDARD")
                                        }
                                      )
                                    },
                                    spacing: "NONE",
                                    alignVertical: "MIDDLE",
                                    marginAbove: "STANDARD",
                                    marginBelow: "STANDARD",
                                    showWhen: local!showAllMessages = false,
                                    
                                  ),
                                  /*FIRST MESSAGES*/
                                  a!cardLayout(
                                    contents: {
                                      a!sectionLayout(
                                        label: "",
                                        contents: {
                                          /*SENDER*/
                                          a!sideBySideLayout(
                                            items: {
                                              a!sideBySideItem(
                                                item: a!richTextDisplayField(
                                                  labelPosition: "COLLAPSED",
                                                  marginBelow: "NONE",
                                                  value: {
                                                    a!richTextItem(
                                                      text: "Reuben Humphrey",
                                                      color: "STANDARD",
                                                      size: "MEDIUM",
                                                      style: "STRONG"
                                                    ),
                                                    
                                                  }
                                                ),
                                                width: "AUTO"
                                              ),
                                              a!sideBySideItem(
                                                width: "MINIMIZE",
                                                item: a!richTextDisplayField(
                                                  labelPosition: "COLLAPSED",
                                                  value: {
                                                    a!richTextItem(
                                                      text: { " May 18, 2023 • ", "12:00 PM" },
                                                      color: "SECONDARY",
                                                      size: "STANDARD"
                                                    )
                                                  },
                                                  
                                                ),
                                                
                                              ),
                                              
                                            },
                                            alignVertical: "MIDDLE",
                                            marginAbove: "STANDARD",
                                            
                                          ),
                                          /*MESSAGE*/
                                          a!richTextDisplayField(
                                            labelPosition: "COLLAPSED",
                                            value: {
                                              a!richTextItem(
                                                text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,",
                                                
                                              )
                                            },
                                            preventWrapping: false,
                                            marginAbove: "LESS",
                                            marginBelow: "STANDARD"
                                          ),
                                          
                                        },
                                        marginBelow: "NONE"
                                      )
                                    },
                                    height: "AUTO",
                                    style: "TRANSPARENT",
                                    padding: "LESS",
                                    marginBelow: "NONE",
                                    marginAbove: "NONE",
                                    showBorder: false
                                  ),
                                  
                                }
                              ),
                              
                            }
                          )
                        }
                      ),
                      {}
                    )
                  },
                  width: if(
                    a!isPageWidth({ "DESKTOP_NARROW" }),
                    "10X",
                    "AUTO"
                  )
                )
              },
              marginBelow: "NONE",
              spacing: "SPARSE",
              stackWhen: {
                "TABLET_LANDSCAPE",
                "TABLET_PORTRAIT",
                "PHONE"
              },
              showDividers: true
            )
          },
          height: "AUTO",
          style: "TRANSPARENT",
          padding: "NONE",
          marginBelow: "NONE",
          showBorder: false,
          showShadow: false
        )
      },
      style: "NONE",
      padding: "NONE",
      marginAbove: "NONE",
      showBorder: false
    )
  }
)
```

---
