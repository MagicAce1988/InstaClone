export const DEFAULT_PADDING = 16;

const palette = {
  primaries: {
    blackest: (alpha = 1) => `rgba(0, 0, 0, ${alpha})`, //#000000
    whitest: (alpha = 1) => `rgba(255, 255, 255, ${alpha})`, //#ffffff
  },
};

function getTheme(mode) {
  return {
    colors: {
      generalColors: {
        black: {
          light: palette.primaries.blackest(),
          dark: palette.primaries.blackest(),
        }[mode],
        white: {
          light: palette.primaries.whitest(),
          dark: palette.primaries.whitest(),
        }[mode],
      },
      components: {
        exampleComponent: {
          exampleProperty: {
            activeColor: {
              light: palette.primaries.blackest(),
              dark: palette.primaries.blackest(),
            }[mode],
          },
        },
        post: {
          components: {
            header: {
              text: {
                light: '#3c3c3c',
                dark: '#3c3c3c',
              }[mode],
            },
            footer: {
              date: {
                light: '#8c8c8c',
                dark: '#8c8c8c',
              }[mode],
              icon: {
                light: '#545454',
                dark: '#545454',
              }[mode],
              redIcon: {
                light: '#e73838',
                dark: '#e73838',
              }[mode],
            },
          },
        },
        profilePicture: {
          defaultBorderColor: {
            light: '#ae22e0',
            dark: '#ae22e0',
          }[mode],
          spacingBorderColor: {
            light: palette.primaries.whitest(),
            dark: palette.primaries.whitest(),
          }[mode],
        },
        story: {
          name: {
            light: '#3c3c3c',
            dark: '#3c3c3c',
          }[mode],
        },
        line: {
          bg: {
            light: palette.primaries.blackest(0.1),
            dark: palette.primaries.blackest(0.1),
          }[mode],
        },
      },
      screens: {
        exampleScreen: {
          components: {},
          exampleProperty: {
            activeColor: {
              light: palette.primaries.blackest(),
              dark: palette.primaries.blackest(),
            }[mode],
          },
        },
        storyScreen: {
          inputBackground: {
            light: palette.primaries.blackest(0.5),
            dark: palette.primaries.blackest(0.5),
          }[mode],
          inputPlaceholder: {
            light: palette.primaries.whitest(0.6),
            dark: palette.primaries.whitest(0.6),
          }[mode],
        },
      },
    },
    fonts: {},
  };
}

export default getTheme;
