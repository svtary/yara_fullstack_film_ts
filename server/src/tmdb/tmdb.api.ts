import axiosClient from "../axios/axios.client.js";
import tmdbEndpoints from "./tmdb.endpoints";
import {
  SmediaList,
  SMediaDetail,
  Spersonid,
  SmediaSearch,
  SmediaGenres,
} from "../types/interfaces.js";
const tmdbApi = {
  mediaList: async ({ mediaType, mediaCategory, page }: SmediaList) =>
    await axiosClient.get(
      tmdbEndpoints.mediaList({ mediaType, mediaCategory, page })
    ),
  mediaDetail: async ({ mediaType, mediaId }: SMediaDetail) =>
    await axiosClient.get(tmdbEndpoints.mediaDetail({ mediaType, mediaId })),
  mediaGenres: async ({ mediaType }: SmediaGenres) =>
    await axiosClient.get(tmdbEndpoints.mediaGenres({ mediaType })),
  mediaCredits: async ({ mediaType, mediaId }: SMediaDetail) =>
    await axiosClient.get(tmdbEndpoints.mediaCredits({ mediaType, mediaId })),
  mediaVideos: async ({ mediaType, mediaId }: SMediaDetail) =>
    await axiosClient.get(tmdbEndpoints.mediaVideos({ mediaType, mediaId })),
  mediaImages: async ({ mediaType, mediaId }: SMediaDetail) =>
    await axiosClient.get(tmdbEndpoints.mediaImages({ mediaType, mediaId })),
  mediaRecommend: async ({ mediaType, mediaId }: SMediaDetail) =>
    await axiosClient.get(tmdbEndpoints.mediaRecommend({ mediaType, mediaId })),
  mediaSearch: async ({ mediaType, query, page }: SmediaSearch) =>
    await axiosClient.get(
      tmdbEndpoints.mediaSearch({ mediaType, query, page })
    ),
  personDetail: async ({ personId }: Spersonid) =>
    await axiosClient.get(tmdbEndpoints.personDetail({ personId })),
  personMedias: async ({ personId }: Spersonid) =>
    await axiosClient.get(tmdbEndpoints.personMedias({ personId })),
};

export default tmdbApi;