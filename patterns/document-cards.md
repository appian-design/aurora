---
status: "stable"
last_updated: "2025-6-3"
---

# Document Cards

Cards that represent documents and their respective actions

![](https://github.com/user-attachments/assets/ed687393-8cc2-4d99-979c-3e660382ffe7)

## Design

### Variants

#### Most Components

![](https://github.com/user-attachments/assets/92afe3ca-e300-49b5-a005-a1cc4242a872)

This variant has the most components — a file type icon, metadata, statuses, and actions

#### Least Components

![](https://github.com/user-attachments/assets/a03a6aff-06ef-44e2-aacd-edeb83ba6826)

The simplest version of the document card

#### AI Rationale / Summary

![](https://github.com/user-attachments/assets/ff2367b7-42f9-42fc-b28a-e7d6d80c225a)

The metadata section of the document card doesn't just need to include data about the document. It can also include other subsidiary information like information from AI summarizing the document or explaining why it was returned in a search.

#### Actions

![](https://github.com/user-attachments/assets/8f5ead65-ef4d-4000-93bd-e014591a897a)

Whether or not you denote actions with icons in the top right or text on the bottom on your card depends on your use case. If you need more than one action opt for the text variant. If there is not a convincing icon for your action, use text.

#### Icons & Alignment

![](https://github.com/user-attachments/assets/fb885d7a-b7bc-4d4c-905c-6b7b70b749aa)

Icons and text will be middle aligned only if there are 2 lines of text. Otherwise, it will be top aligned.

## Development

### Variants 

#### Most Components
```
a!columnsLayout(
  columns: {
    a!columnLayout(
      width: "MEDIUM",
      contents: {
        a!cardLayout(
          shape: "ROUNDED",
          /* Gray 1 */ 
          borderColor: "#EDEEFA",
          contents: {
            a!columnsLayout(
              columns: {
                a!columnLayout(
                  width: "MEDIUM_PLUS",
                  contents: {
                    a!columnsLayout(
                      alignVertical: "TOP",
                      spacing: "NONE",
                      columns: {
                        /*ICON*/
                        a!columnLayout(
                          width: "1X",
                          contents: {
                            a!cardLayout(
                              contents: {
                                a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: a!richTextIcon(
                                    icon: "file-word-o",
                                    /* Gray 3 */ 
                                    color: "#6C6C75", 
                                    size: "LARGE"
                                  ),
                                  align: "CENTER",
                                  marginAbove: "LESS",
                                  marginBelow: "NONE"
                                )
                              },
                              padding: "EVEN_LESS",
                              showBorder: false
                            )
                          },
                        ),
                        /*CONTENT*/
                        a!columnLayout(
                          width: "10X",
                          contents: {
                            a!cardLayout(
                              contents: {
                                /*TITLE*/
                                a!headingField(
                                  headingTag: "H3",
                                  text: "Document Title",
                                  size: "EXTRA_SMALL",
                                  fontWeight: "BOLD",
                                  marginAbove: "EVEN_LESS",
                                  marginBelow: "NONE"
                                ),
                                /*METADATA*/
                                a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(
                                      text: "Uploaded on Apr 2nd, 2024 by Julie Park",
                                      /* Gray 3 */ 
                                      color: "#6C6C75", 
                                      linkStyle: "STANDALONE",
                                      size: "SMALL"
                                    )
                                  },
                                  preventWrapping: true,
                                  marginBelow: "LESS"
                                ),
                                /*STATUS & FILE TYPE*/
                                a!tagField(
                                  labelPosition: "COLLAPSED",
                                  marginAbove: "NONE",
                                  marginBelow: "EVEN_LESS",
                                  size: "SMALL",
                                  tags: {
                                    a!tagItem(
                                      /* Purple 1 */ 
                                      backgroundColor: "#F2E9FF", 
                                      /* Purple 4 */ 
                                      textColor: "#790DA1", 
                                      text: "Pending",
                                      tooltip: "Status"
                                    ),
                                    a!tagItem(
                                      /* Gray 1 */ 
                                      backgroundColor: "#EDEDF2", 
                                      /* Gray 4 */ 
                                      textColor: "#2E2E35", 
                                      text: "DOCX",
                                      tooltip: "Document format"
                                    ),
                                  }
                                ),
                                /*ACTIONS*/
                                a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  marginAbove: "LESS",
                                  value: {
                                    a!richTextItem(
                                      text: "Go to Contract",
                                      link: a!dynamicLink(),
                                      linkStyle: "STANDALONE"
                                    ),
                                    a!richTextItem(
                                      size: "SMALL",
                                      text: "   •   ",
                                      /* Gray 3 */ 
                                      color: "#6C6C75", 
                                    ),
                                    a!richTextItem(
                                      text: "Download",
                                      link: a!dynamicLink(),
                                      linkStyle: "STANDALONE"
                                    )
                                  }
                                )
                              },
                              showBorder: false
                            )
                          },
                        ),
                      }
                    )
                  }
                ),
              },
              alignVertical: "MIDDLE",
              spacing: "NONE"
            )
          },
        ),
      }
    ),
    a!columnLayout(
      width: "MEDIUM",
      contents: {
        a!cardLayout(
          shape: "ROUNDED",
          borderColor: "#EDEEFA", 
          contents: {
            a!columnsLayout(
              columns: {
                a!columnLayout(
                  width: "MEDIUM_PLUS",
                  contents: {
                    a!columnsLayout(
                      alignVertical: "TOP",
                      spacing: "NONE",
                      columns: {
                        /*ICON*/
                        a!columnLayout(
                          width: "1X",
                          contents: {
                            a!cardLayout(
                              contents: {
                                a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: a!richTextIcon(
                                    icon: "file-word-o",
                                    /* Gray 3 */ 
                                    color: "#6C6C75", 
                                    size: "LARGE"
                                  ),
                                  align: "CENTER",
                                  marginAbove: "LESS",
                                  marginBelow: "NONE"
                                )
                              },
                              padding: "EVEN_LESS",
                              showBorder: false
                            )
                          },
                        ),
                        /*CONTENT*/
                        a!columnLayout(
                          width: "10X",
                          contents: {
                            a!cardLayout(
                              contents: {
                                /*TITLE*/
                                a!sideBySideLayout(
                                  alignVertical: "MIDDLE",
                                  marginAbove: "NONE",
                                  marginBelow: "NONE",
                                  items: {
                                    a!sideBySideItem(
                                      width: "AUTO",
                                      item: a!headingField(
                                        headingTag: "H3",
                                        text: "Document Title",
                                        size: "EXTRA_SMALL",
                                        fontWeight: "BOLD",
                                        marginAbove: "EVEN_LESS",
                                        marginBelow: "NONE"
                                      )
                                    ),
                                    a!sideBySideItem(
                                      width: "MINIMIZE",
                                      item: a!richTextDisplayField(
                                        labelPosition: "COLLAPSED",
                                        align: "RIGHT",
                                        marginAbove: "EVEN_LESS",
                                        marginBelow: "NONE",
                                        value: {
                                          a!richTextIcon(
                                            icon: "download",
                                            /*size: "SMALL",*/
                                            link: a!dynamicLink(),
                                            linkStyle: "STANDALONE"
                                          )
                                        }
                                      )
                                    )
                                  }
                                ),
                                /*METADATA*/
                                a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextItem(
                                      text: "Uploaded on Apr 2nd, 2024 by Julie Park",
                                      /* Gray 3 */ 
                                      color: "#6C6C75", 
                                      linkStyle: "STANDALONE",
                                      size: "SMALL"
                                    )
                                  },
                                  preventWrapping: true,
                                  marginBelow: "LESS"
                                ),
                                /*STATUS & FILE TYPE*/
                                a!tagField(
                                  labelPosition: "COLLAPSED",
                                  marginAbove: "NONE",
                                  marginBelow: "EVEN_LESS",
                                  size: "SMALL",
                                  tags: {
                                    a!tagItem(
                                      /* Purple 1 */ 
                                      backgroundColor: "#F2E9FF", 
                                      /* Purple 4 */ 
                                      textColor: "#790DA1", 
                                      text: "Pending",
                                      tooltip: "Status"
                                    ),
                                    a!tagItem(
                                      /* Gray 1 */ 
                                      backgroundColor: "#EDEDF2", 
                                      /* Gray 4 */ 
                                      textColor: "#2E2E35", 
                                      text: "DOCX",
                                      tooltip: "Document format"
                                    ),
                                  }
                                ),
                              },
                              showBorder: false
                            )
                          },
                        ),
                      }
                    )
                  }
                ),
              },
              alignVertical: "MIDDLE",
              spacing: "NONE"
            )
          },
        ),
      }
    ),
  }
)
```

#### Least Components
```
a!columnsLayout(
  marginAbove: "NONE",
  marginBelow: "NONE",
  columns: {
    a!columnLayout(
      width: "MEDIUM",
      contents: {
        a!cardLayout(
          shape: "ROUNDED",
          borderColor: "#EDEDF2", 
          contents: {
            a!columnsLayout(
              columns: {
                a!columnLayout(
                  width: "MEDIUM_PLUS",
                  contents: {
                    a!cardLayout(
                      contents: {
                        /*TITLE*/
                        a!headingField(
                          headingTag: "H3",
                          text: "Document Title",
                          size: "EXTRA_SMALL",
                          fontWeight: "BOLD",
                          marginAbove: "EVEN_LESS",
                          marginBelow: "NONE"
                        ),
                        /*METADATA*/
                        a!richTextDisplayField(
                          labelPosition: "COLLAPSED",
                          value: {
                            a!richTextItem(
                              text: "Uploaded on Apr 2nd, 2024 by Julie Park",
                              /* Gray 3 */ 
                              color: "#6C6C75", 
                              linkStyle: "STANDALONE",
                              size: "SMALL"
                            )
                          },
                          preventWrapping: true,
                          marginBelow: "LESS"
                        ),
                      },
                      showBorder: false
                    )
                  }
                ),
              },
              alignVertical: "MIDDLE",
              spacing: "NONE"
            )
          },
        ),
      }
    )
  }
)
```

#### AI Metadata
```
a!columnsLayout(
  marginAbove: "NONE",
  marginBelow: "NONE",
  columns: {
    a!columnLayout(
      width: "MEDIUM_PLUS",
      contents: {
        a!cardLayout(
          shape: "ROUNDED",
          /* Gray 1 */
          borderColor: "#EDEDF2", 
          contents: {
            a!columnsLayout(
              columns: {
                a!columnLayout(
                  width: "MEDIUM_PLUS",
                  contents: {
                    a!columnsLayout(
                      alignVertical: "TOP",
                      spacing: "NONE",
                      columns: {
                        /*ICON*/
                        a!columnLayout(
                          width: "1X",
                          contents: {
                            a!cardLayout(
                              contents: {
                                a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: a!richTextIcon(
                                    icon: "file-pdf-o",
                                    /* Gray 3 */
                                    color: "#6C6C75", 
                                    size: "LARGE"
                                  ),
                                  align: "CENTER",
                                  marginAbove: "LESS",
                                  marginBelow: "NONE"
                                )
                              },
                              padding: "EVEN_LESS",
                              showBorder: false
                            )
                          },
                        ),
                        /*CONTENT*/
                        a!columnLayout(
                          width: "10X",
                          contents: {
                            a!cardLayout(
                              contents: {
                                /*TITLE*/
                                a!sideBySideLayout(
                                  alignVertical: "MIDDLE",
                                  marginAbove: "NONE",
                                  marginBelow: "NONE",
                                  items: {
                                    a!sideBySideItem(
                                      width: "AUTO",
                                      item: a!headingField(
                                        headingTag: "H3",
                                        text: "Document Title",
                                        size: "EXTRA_SMALL",
                                        fontWeight: "BOLD",
                                        marginAbove: "EVEN_LESS",
                                        marginBelow: "NONE"
                                      )
                                    ),
                                    a!sideBySideItem(
                                      width: "MINIMIZE",
                                      item: a!richTextDisplayField(
                                        labelPosition: "COLLAPSED",
                                        align: "RIGHT",
                                        marginAbove: "EVEN_LESS",
                                        marginBelow: "NONE",
                                        value: {
                                          a!richTextIcon(
                                            icon: "bookmark-o",
                                            /*size: "SMALL",*/
                                            link: a!dynamicLink(),
                                            linkStyle: "STANDALONE"
                                          )
                                        }
                                      )
                                    )
                                  }
                                ),
                                /*METADATA*/
                                a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextIcon(
                                      icon: "circle",
                                      color: "#E9EDFC",
                                      size: "SMALL"
                                    ),
                                    a!richTextIcon(
                                      icon: "circle",
                                      color: "#AFBFF8",
                                      size: "SMALL"
                                    ),
                                    a!richTextIcon(
                                      icon: "circle",
                                      color: "#AFBFF8",
                                      size: "SMALL"
                                    ),
                                    a!richTextIcon(
                                      icon: "circle",
                                      color: "#08088D",
                                      size: "SMALL"
                                    ),
                                    a!richTextIcon(
                                      icon: "circle-o",
                                      color: "#DCDCE5",
                                      size: "SMALL"
                                    ),
                                    "  ",
                                    a!richTextItem(
                                      text: "Apr 2nd, 2024",
                                      /* Gray 3 */
                                      color: "#6C6C75", 
                                      linkStyle: "STANDALONE",
                                      size: "SMALL"
                                    ),
                                  },
                                  preventWrapping: true,
                                  marginBelow: "LESS"
                                ),
                                /*ACTIONS AND/OR MISC INFO*/
                                a!cardLayout(
                                  shape: "ROUNDED",
                                  showBorder: false,
                                  /* Default background */
                                  style: "#FAFAFC", 
                                  marginAbove: "EVEN_LESS",
                                  marginBelow: "EVEN_LESS",
                                  contents: {
                                    a!sideBySideLayout(
                                      items: {
                                        a!sideBySideItem(
                                          item: a!imageField(
                                            labelPosition: "COLLAPSED",
                                            images: {
                                              a!webImage(
                                                source:"https://raw.githubusercontent.com/pglevy/design-system-docs/main/assets/images/ai-imagery/sparkle-light-1.png"
                                              )
                                            },
                                            size: "ICON",
                                            marginBelow: "NONE"
                                          ),
                                          width: "MINIMIZE"
                                        ),
                                        a!sideBySideItem(
                                          item: a!richTextDisplayField(
                                            labelPosition: "COLLAPSED",
                                            value: {
                                              a!richTextItem(
                                                text: "Blurb about why we matched on this document/why this is relevant to the search query.",
                                                size: "SMALL",
                                                color: "#020A50",
                                              )
                                            },
                                            marginBelow: "NONE"
                                          ),
                                        )

                                      },
                                      spacing: "STANDARD",
                                      marginBelow: "NONE"
                                    ),
                                  }
                                ),
                              },
                              showBorder: false
                            )
                          },
                        ),
                      }
                    )
                  }
                ),
              },
              alignVertical: "MIDDLE",
              spacing: "NONE"
            )
          },
        ),
      }
    ),
    a!columnLayout()
  }
)
```

#### Actions
```
a!cardLayout(
  shape: "ROUNDED",
  /* Default background */
  style: "#FAFAFC", 
  showBorder: false,
  padding: "EVEN_MORE",
  contents: {
    a!columnsLayout(
      columns: {
        a!columnLayout(
          width: "MEDIUM",
          contents: {
            a!cardLayout(
              shape: "ROUNDED",
              /* Gray 1 */
              borderColor: "#EDEDF2", 
              contents: {
                a!columnsLayout(
                  columns: {
                    a!columnLayout(
                      width: "MEDIUM_PLUS",
                      contents: {
                        a!columnsLayout(
                          alignVertical: "TOP",
                          spacing: "NONE",
                          columns: {
                            /*ICON*/
                            a!columnLayout(
                              width: "1X",
                              contents: {
                                a!cardLayout(
                                  contents: {
                                    a!richTextDisplayField(
                                      labelPosition: "COLLAPSED",
                                      value: a!richTextIcon(
                                        icon: "file-word-o",
                                        /* Gray 3 */
                                        color: "#6C6C75", 
                                        size: "LARGE"
                                      ),
                                      align: "CENTER",
                                      marginAbove: "LESS",
                                      marginBelow: "NONE"
                                    )
                                  },
                                  padding: "EVEN_LESS",
                                  showBorder: false
                                )
                              },
                            ),
                            /*CONTENT*/
                            a!columnLayout(
                              width: "10X",
                              contents: {
                                a!cardLayout(
                                  contents: {
                                    /*TITLE*/
                                    a!headingField(
                                      headingTag: "H3",
                                      text: "Document Title",
                                      size: "EXTRA_SMALL",
                                      fontWeight: "BOLD",
                                      marginAbove: "EVEN_LESS",
                                      marginBelow: "NONE"
                                    ),
                                    /*METADATA*/
                                    a!richTextDisplayField(
                                      labelPosition: "COLLAPSED",
                                      value: {
                                        a!richTextItem(
                                          text: "Uploaded on Apr 2nd, 2024 by Julie Park",
                                          /* Gray 3 */
                                          color: "#6C6C75", 
                                          linkStyle: "STANDALONE",
                                          size: "SMALL"
                                        )
                                      },
                                      preventWrapping: true,
                                      marginBelow: "LESS"
                                    ),
                                    /*STATUS & FILE TYPE*/
                                    a!tagField(
                                      labelPosition: "COLLAPSED",
                                      marginAbove: "NONE",
                                      marginBelow: "EVEN_LESS",
                                      size: "SMALL",
                                      tags: {
                                        a!tagItem(
                                          /* Purple 1 */
                                          backgroundColor: "#F2E9FF", 
                                          /* Purple 4 */
                                          textColor: "#790DA1", 
                                          text: "Pending",
                                          tooltip: "Status"
                                        ),
                                        a!tagItem(
                                          /* Gray 1 */
                                          backgroundColor: "#EDEDF2", 
                                          /* Gray 4 */
                                          textColor: "#2E2E35", 
                                          text: "DOCX",
                                          tooltip: "Document format"
                                        ),
                                      }
                                    ),
                                    /*ACTIONS*/
                                    a!richTextDisplayField(
                                      labelPosition: "COLLAPSED",
                                      marginAbove: "LESS",
                                      value: {
                                        a!richTextItem(
                                          /*size: "SMALL",*/
                                          text: "Go to Contract",
                                          link: a!dynamicLink(),
                                          linkStyle: "STANDALONE"
                                        ),
                                        a!richTextItem(
                                          size: "SMALL",
                                          text: "   •   ",
                                          /* Gray 3 */
                                          color: "#6C6C75", 
                                        ),
                                        a!richTextItem(
                                          /*size: "SMALL",*/
                                          text: "Download",
                                          link: a!dynamicLink(),
                                          linkStyle: "STANDALONE"
                                        )
                                      }
                                    )
                                  },
                                  showBorder: false
                                )
                              },
                            ),
                          }
                        )
                      }
                    ),
                  },
                  alignVertical: "MIDDLE",
                  spacing: "NONE"
                )
              },
            ),
          }
        ),
        a!columnLayout(
          width: "MEDIUM",
          contents: {
            a!cardLayout(
              shape: "ROUNDED",
              /* Gray 1 */ 
              borderColor: "#EDEDF2", 
              contents: {
                a!columnsLayout(
                  columns: {
                    a!columnLayout(
                      width: "MEDIUM_PLUS",
                      contents: {
                        a!columnsLayout(
                          alignVertical: "TOP",
                          spacing: "NONE",
                          columns: {
                            /*ICON*/
                            a!columnLayout(
                              width: "1X",
                              contents: {
                                a!cardLayout(
                                  contents: {
                                    a!richTextDisplayField(
                                      labelPosition: "COLLAPSED",
                                      value: a!richTextIcon(
                                        icon: "file-word-o",
                                        /* Gray 3 */
                                        color: "#6C6C75", 
                                        size: "LARGE"
                                      ),
                                      align: "CENTER",
                                      marginAbove: "LESS",
                                      marginBelow: "NONE"
                                    )
                                  },
                                  padding: "EVEN_LESS",
                                  showBorder: false
                                )
                              },
                            ),
                            /*CONTENT*/
                            a!columnLayout(
                              width: "10X",
                              contents: {
                                a!cardLayout(
                                  contents: {
                                    /*TITLE*/
                                    a!sideBySideLayout(
                                      alignVertical: "MIDDLE",
                                      marginAbove: "NONE",
                                      marginBelow: "NONE",
                                      items: {
                                        a!sideBySideItem(
                                          width: "AUTO",
                                          item: a!headingField(
                                            headingTag: "H3",
                                            text: "Document Title",
                                            size: "EXTRA_SMALL",
                                            fontWeight: "BOLD",
                                            marginAbove: "EVEN_LESS",
                                            marginBelow: "NONE"
                                          )
                                        ),
                                        a!sideBySideItem(
                                          width: "MINIMIZE",
                                          item: a!richTextDisplayField(
                                            labelPosition: "COLLAPSED",
                                            align: "RIGHT",
                                            marginAbove: "EVEN_LESS",
                                            marginBelow: "NONE",
                                            value: {
                                              a!richTextIcon(
                                                icon: "download",
                                                /*size: "SMALL",*/
                                                link: a!dynamicLink(),
                                                linkStyle: "STANDALONE"
                                              )
                                            }
                                          )
                                        )
                                      }
                                    ),
                                    /*METADATA*/
                                    a!richTextDisplayField(
                                      labelPosition: "COLLAPSED",
                                      value: {
                                        a!richTextItem(
                                          text: "Uploaded on Apr 2nd, 2024 by Julie Park",
                                          /* Gray 3 */
                                          color: "#6C6C75", 
                                          linkStyle: "STANDALONE",
                                          size: "SMALL"
                                        )
                                      },
                                      preventWrapping: true,
                                      marginBelow: "LESS"
                                    ),
                                    /*STATUS & FILE TYPE*/
                                    a!tagField(
                                      labelPosition: "COLLAPSED",
                                      marginAbove: "NONE",
                                      marginBelow: "EVEN_LESS",
                                      size: "SMALL",
                                      tags: {
                                        a!tagItem(
                                          /* Purple 1 */
                                          backgroundColor: "#F2E9FF", 
                                          /* Purple 4 */
                                          textColor: "#790DA1", 
                                          text: "Pending",
                                          tooltip: "Status"
                                        ),
                                        a!tagItem(
                                          /* Gray 1 */ 
                                          backgroundColor: "#EDEDF2",
                                          /* Gray 4 */
                                          textColor: "#2E2E35",
                                          text: "DOCX",
                                          tooltip: "Document format"
                                        ),
                                      }
                                    ),
                                  },
                                  showBorder: false
                                )
                              },
                            ),
                          }
                        )
                      }
                    ),
                  },
                  alignVertical: "MIDDLE",
                  spacing: "NONE"
                )
              },
            ),
          }
        ),
      }
    ),
  }
)
```

#### Icons & Alignment
```
{
  a!cardLayout(
    shape: "ROUNDED",
    /* Default background */
    style: "#FAFAFC",
    showBorder: false,
    padding: "EVEN_MORE",
    contents: {
      a!sideBySideLayout(
        alignVertical: "MIDDLE",
        marginAbove: "LESS",
        marginBelow: "STANDARD",
        items: {
          a!sideBySideItem(
            width: "AUTO",
            item: a!headingField(
              text: "Attachments",
              size: "EXTRA_SMALL",
              fontWeight: "SEMI_BOLD",
              marginAbove: "NONE",
              marginBelow: "NONE"
            ),
            
          ),
          
        }
      ),
      a!cardGroupLayout(
        labelPosition: "COLLAPSED",
        marginAbove: "NONE",
        marginBelow: "NONE",
        cardWidth: "NARROW_PLUS",
        spacing: "DENSE",
        cards: {
          a!localVariables(
            local!kristelCards1: a!refreshVariable(
              value: {
                a!map(
                  title: "Statement of Work",
                  status: "Required",
                  date: "May 05, 2025",
                  type: "PDF"
                ),
                a!map(
                  title: "Performance Work Statement",
                  status: "Optional",
                  date: "Mar 25, 2025",
                  type: "DOCX"
                ),
                a!map(
                  title: "Pricing Template",
                  status: "Required",
                  date: "Mar 19, 2025",
                  type: "PDF"
                ),
                a!map(
                  title: "Technical Proposal Template",
                  status: "Required",
                  date: "Feb 28, 2025",
                  type: "PDF"
                ),
                
              },
              refreshAlways: true
            ),
            {
              a!forEach(
                items: local!kristelCards1,
                expression: {
                  a!cardLayout(
                    shape: "ROUNDED",
                    /* Gray 1 */
                    borderColor: "#EDEDF2",
                    contents: {
                      a!columnsLayout(
                        columns: {
                          a!columnLayout(
                            width: "MEDIUM_PLUS",
                            contents: {
                              a!columnsLayout(
                                alignVertical: "TOP",
                                spacing: "NONE",
                                columns: {
                                  /*ICON*/
                                  a!columnLayout(
                                    width: "1X",
                                    contents: {
                                      a!cardLayout(
                                        contents: {
                                          a!richTextDisplayField(
                                            labelPosition: "COLLAPSED",
                                            value: if(
                                              fv!item.type = "PDF",
                                              a!richTextIcon(
                                                icon: "file-pdf-o",
                                                /* Gray 3 */
                                                color: "#6C6C75",
                                                size: "LARGE"
                                              ),
                                              a!richTextIcon(
                                                icon: "file-word-o",
                                                /* Gray 3 */
                                                color: "#6C6C75",
                                                size: "LARGE"
                                              ),
                                              
                                            ),
                                            align: "CENTER",
                                            marginAbove: "LESS",
                                            marginBelow: "NONE"
                                          )
                                        },
                                        padding: "EVEN_LESS",
                                        showBorder: false
                                      )
                                    },
                                    
                                  ),
                                  /*CONTENT*/
                                  a!columnLayout(
                                    width: "10X",
                                    contents: {
                                      a!cardLayout(
                                        contents: {
                                          /*TITLE*/
                                          a!sideBySideLayout(
                                            alignVertical: "MIDDLE",
                                            marginAbove: "NONE",
                                            marginBelow: "NONE",
                                            items: {
                                              a!sideBySideItem(
                                                width: "AUTO",
                                                item: a!headingField(
                                                  headingTag: "H3",
                                                  text: fv!item.title,
                                                  size: "EXTRA_SMALL",
                                                  fontWeight: "BOLD",
                                                  marginAbove: "EVEN_LESS",
                                                  marginBelow: "NONE"
                                                )
                                              ),
                                              a!sideBySideItem(
                                                width: "MINIMIZE",
                                                item: a!richTextDisplayField(
                                                  labelPosition: "COLLAPSED",
                                                  align: "RIGHT",
                                                  marginAbove: "EVEN_LESS",
                                                  marginBelow: "NONE",
                                                  value: {
                                                    a!richTextIcon(
                                                      icon: "download",
                                                      /*size: "SMALL",*/
                                                      link: a!dynamicLink(),
                                                      linkStyle: "STANDALONE"
                                                    )
                                                  }
                                                )
                                              )
                                            }
                                          ),
                                          /*METADATA*/
                                          a!richTextDisplayField(
                                            labelPosition: "COLLAPSED",
                                            value: {
                                              a!richTextItem(
                                                text: fv!item.date,
                                                /* Gray 3 */
                                                color: "#6C6C75",
                                                linkStyle: "STANDALONE",
                                                size: "SMALL"
                                              )
                                            },
                                            preventWrapping: true,
                                            marginBelow: "LESS"
                                          ),
                                          /*STATUS & FILE TYPE*/
                                          a!tagField(
                                            labelPosition: "COLLAPSED",
                                            marginAbove: "NONE",
                                            marginBelow: "EVEN_LESS",
                                            size: "SMALL",
                                            tags: {
                                              a!tagItem(
                                                text: fv!item.status,
                                                tooltip: "Status",
                                                textColor: if(
                                                  fv!item.status = "Required",
                                                  /* Green 4 */
                                                  "#117C00",
                                                  /* Gray 4 */
                                                  "#2E2E35",
                                                  
                                                ),
                                                backgroundColor: if(
                                                  fv!item.status = "Required",
                                                  /* Green 1 */
                                                  "#E3FBDF",
                                                  /* Gray 1 */
                                                  "#EDEDF2",
                                                  
                                                )
                                              ),
                                              a!tagItem(
                                                /* Gray 1 */
                                                backgroundColor: "#EDEDF2",
                                                /* Gray 4 */
                                                textColor: "#2E2E35",
                                                text: if(fv!item.type = "PDF", "PDF", "DOCX"),
                                                tooltip: "Document format"
                                              ),
                                              
                                            }
                                          ),
                                          
                                        },
                                        showBorder: false
                                      )
                                    },
                                    
                                  ),
                                  
                                }
                              )
                            }
                          ),
                          
                        },
                        alignVertical: "MIDDLE",
                        spacing: "NONE"
                      )
                    },
                    
                  ),
                  
                }
              )
            }
          )
        }
      ),
      a!columnsLayout(
        columns: {
          a!columnLayout(
            width: "MEDIUM_PLUS",
            contents: {
              a!headingField(
                text: "Documents",
                size: "SMALL",
                fontWeight: "BOLD",
                marginAbove: "MORE",
                marginBelow: "NONE"
              ),
              a!localVariables(
                local!kristelCards3: a!refreshVariable(
                  value: {
                    a!map(
                      title: "Technical Proposal",
                      size: "344 KB"
                    ),
                    a!map(
                      title: "Executive Summary",
                      size: "365 KB"
                    ),
                    a!map(title: "Business License", size: "205 KB"),
                    
                  },
                  refreshAlways: true
                ),
                local!kristelCards4: a!refreshVariable(
                  value: {
                    a!map(title: "Criteria", size: "523 KB"),
                    a!map(
                      title: "Evaluation Instructions",
                      size: "102 KB"
                    ),
                    
                  },
                  refreshAlways: true
                ),
                {
                  a!headingField(
                    text: "Vendor",
                    size: "EXTRA_SMALL",
                    fontWeight: "SEMI_BOLD",
                    marginAbove: "STANDARD",
                    marginBelow: "NONE"
                  ),
                  a!forEach(
                    items: local!kristelCards3,
                    expression: {
                      a!cardLayout(
                        shape: "ROUNDED",
                        /* Gray 1 */
                        borderColor: "#EDEDF2",
                        marginAbove: "LESS",
                        marginBelow: "NONE",
                        contents: {
                          a!columnsLayout(
                            columns: {
                              a!columnLayout(
                                width: "MEDIUM_PLUS",
                                contents: {
                                  a!cardLayout(
                                    contents: {
                                      a!columnsLayout(
                                        marginAbove: "NONE",
                                        marginBelow: "NONE",
                                        alignVertical: "MIDDLE",
                                        columns: {
                                          a!columnLayout(
                                            contents: {
                                              /*TITLE*/
                                              a!headingField(
                                                headingTag: "H3",
                                                text: fv!item.title,
                                                size: "EXTRA_SMALL",
                                                fontWeight: "BOLD",
                                                marginAbove: "EVEN_LESS",
                                                marginBelow: "NONE"
                                              ),
                                              /*METADATA*/
                                              a!richTextDisplayField(
                                                labelPosition: "COLLAPSED",
                                                value: {
                                                  a!richTextItem(
                                                    text: fv!item.size,
                                                    /* Gray 3 */
                                                    color: "#6C6C75",
                                                    linkStyle: "STANDALONE",
                                                    size: "SMALL"
                                                  )
                                                },
                                                preventWrapping: true,
                                                marginBelow: "LESS"
                                              ),
                                              
                                            }
                                          ),
                                          a!columnLayout(
                                            width: "EXTRA_NARROW",
                                            contents: {
                                              a!richTextDisplayField(
                                                labelPosition: "COLLAPSED",
                                                align: "RIGHT",
                                                marginAbove: "EVEN_LESS",
                                                marginBelow: "NONE",
                                                value: {
                                                  a!richTextIcon(
                                                    icon: "download",
                                                    /*size: "SMALL",*/
                                                    link: a!dynamicLink(),
                                                    linkStyle: "STANDALONE"
                                                  )
                                                }
                                              )
                                            }
                                          )
                                        }
                                      ),
                                      
                                    },
                                    showBorder: false
                                  )
                                }
                              ),
                              
                            },
                            alignVertical: "MIDDLE",
                            spacing: "NONE"
                          )
                        },
                        
                      )
                    }
                  ),
                  a!headingField(
                    text: "Evaluation",
                    size: "EXTRA_SMALL",
                    fontWeight: "SEMI_BOLD",
                    marginAbove: "MORE",
                    marginBelow: "NONE"
                  ),
                  a!forEach(
                    items: local!kristelCards4,
                    expression: {
                      a!cardLayout(
                        shape: "ROUNDED",
                        /* Gray 1 */
                        borderColor: "#EDEDF2",
                        marginAbove: "LESS",
                        marginBelow: "NONE",
                        contents: {
                          a!columnsLayout(
                            columns: {
                              a!columnLayout(
                                width: "MEDIUM_PLUS",
                                contents: {
                                  a!cardLayout(
                                    contents: {
                                      /*TITLE*/
                                      a!sideBySideLayout(
                                        alignVertical: "MIDDLE",
                                        marginAbove: "NONE",
                                        marginBelow: "NONE",
                                        items: {
                                          a!sideBySideItem(
                                            width: "AUTO",
                                            item: a!headingField(
                                              headingTag: "H3",
                                              text: fv!item.title,
                                              size: "EXTRA_SMALL",
                                              fontWeight: "BOLD",
                                              marginAbove: "EVEN_LESS",
                                              marginBelow: "NONE"
                                            )
                                          ),
                                          a!sideBySideItem(
                                            width: "MINIMIZE",
                                            item: a!richTextDisplayField(
                                              labelPosition: "COLLAPSED",
                                              align: "RIGHT",
                                              marginAbove: "EVEN_LESS",
                                              marginBelow: "NONE",
                                              value: {
                                                a!richTextIcon(
                                                  icon: "download",
                                                  /*size: "SMALL",*/
                                                  link: a!dynamicLink(),
                                                  linkStyle: "STANDALONE"
                                                )
                                              }
                                            )
                                          )
                                        }
                                      ),
                                      /*METADATA*/
                                      a!richTextDisplayField(
                                        labelPosition: "COLLAPSED",
                                        value: {
                                          a!richTextItem(
                                            text: fv!item.size,
                                            /* Gray 3 */
                                            color: "#6C6C75",
                                            linkStyle: "STANDALONE",
                                            size: "SMALL"
                                          )
                                        },
                                        preventWrapping: true,
                                        marginBelow: "LESS"
                                      ),
                                      
                                    },
                                    showBorder: false
                                  )
                                }
                              ),
                              
                            },
                            alignVertical: "MIDDLE",
                            spacing: "NONE"
                          )
                        }
                      )
                    }
                  )
                }
              )
            }
          )
        }
      )
    }
  )
}
```
