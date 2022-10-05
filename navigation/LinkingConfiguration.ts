import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../utils/types/types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Movies: {
            screens: {
              MoviesScreen: "movies",
            },
          },
          Series: {
            screens: {
              SeriesScreen: "series",
            },
          },
          ComingSoon: {
            screens: {
              ComingSoonScreen: "coming-soon",
            },
          },
          MovieDetail: {
            screens: {
              ModalScreen: {
                path: "movies/:id",
                parse: {
                  id: (id: string) => +id,
                },
              },
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};

export default linking;
